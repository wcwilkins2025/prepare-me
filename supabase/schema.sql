-- Prepare Me: every table holds rows for many men; each man can read and write only his own.
-- Run once in the Supabase SQL editor (SQL Editor > New query > paste > Run). Safe to run again.
-- The steps, areas, disasters and FEMA county table are not here: they ship with the site and are the same for everyone.

-- ---------- tables ----------

-- His household answers and his town (with the FEMA ratings for his county, so pages need not load the whole table).
create table if not exists public.profiles (
  user_id    uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  answers    jsonb not null default '{}'::jsonb check (jsonb_typeof(answers) = 'object' and pg_column_size(answers) < 20000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Every time he takes the assessment: what he said, what he had, and the scores it gave. Kept for the history.
create table if not exists public.assessments (
  id       bigint generated always as identity primary key,
  user_id  uuid not null default auth.uid() references auth.users (id) on delete cascade,
  taken_at timestamptz not null default now(),
  answers  jsonb not null default '{}'::jsonb check (pg_column_size(answers) < 20000),
  have     text[] not null default '{}' check (cardinality(have) <= 300),
  overall  int not null check (overall between 0 and 100),
  areas    jsonb not null default '{}'::jsonb check (pg_column_size(areas) < 4000),
  hazards  jsonb not null default '{}'::jsonb check (pg_column_size(hazards) < 4000)
);
create index if not exists assessments_user on public.assessments (user_id, taken_at);

-- Where he stands on each step: done, put off until a date, or open with some of its parts checked.
create table if not exists public.progress (
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  task_id     text not null check (length(task_id) <= 40),
  status      text not null default 'open' check (status in ('open', 'done', 'later')),
  steps       int[] not null default '{}' check (cardinality(steps) <= 20),
  done_at     timestamptz,
  later_until timestamptz,
  updated_at  timestamptz not null default now(),
  primary key (user_id, task_id)
);

-- One check-in a week: the score that week, steps done since the last, and his three answers.
create table if not exists public.checkins (
  id         bigint generated always as identity primary key,
  user_id    uuid not null default auth.uid() references auth.users (id) on delete cascade,
  week_of    date not null,
  created_at timestamptz not null default now(),
  overall    int not null check (overall between 0 and 100),
  areas      jsonb not null default '{}'::jsonb check (pg_column_size(areas) < 4000),
  done_count int not null default 0 check (done_count between 0 and 500),
  answers    jsonb not null default '{}'::jsonb check (jsonb_typeof(answers) = 'object' and pg_column_size(answers) < 4000),
  unique (user_id, week_of)
);

-- ---------- row rules: a man sees and changes only his own rows. Visitors who are not signed in get nothing. ----------
do $$
declare t text;
begin
  foreach t in array array['profiles', 'assessments', 'progress', 'checkins'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('alter table public.%I force row level security', t);
    execute format('revoke all on public.%I from anon', t);
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('drop policy if exists "own rows: read" on public.%I', t);
    execute format('drop policy if exists "own rows: add" on public.%I', t);
    execute format('drop policy if exists "own rows: change" on public.%I', t);
    execute format('drop policy if exists "own rows: remove" on public.%I', t);
    execute format('create policy "own rows: read"   on public.%I for select to authenticated using (auth.uid() = user_id)', t);
    execute format('create policy "own rows: add"    on public.%I for insert to authenticated with check (auth.uid() = user_id)', t);
    execute format('create policy "own rows: change" on public.%I for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id)', t);
    execute format('create policy "own rows: remove" on public.%I for delete to authenticated using (auth.uid() = user_id)', t);
  end loop;
end $$;

-- ---------- keep updated_at honest ----------
create or replace function public.rd_touch() returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before update on public.profiles for each row execute function public.rd_touch();
drop trigger if exists progress_touch on public.progress;
create trigger progress_touch before update on public.progress for each row execute function public.rd_touch();

-- ---------- delete my account: removes the sign-in and, through the cascades, every row. Only on himself. ----------
create or replace function public.delete_me() returns void
language plpgsql security definer set search_path = public, auth as $$
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  delete from auth.users where id = auth.uid();
end $$;
revoke all on function public.delete_me() from public, anon;
grant execute on function public.delete_me() to authenticated;

-- =====================================================================================================
-- Phone alerts (Web Push). Same design as the Community Resilience Network:
--   * the push sent to a phone is empty and signed with the site's VAPID key, so Apple, Google and Mozilla
--     only learn that "something happened";
--   * the phone's service worker (sw.js) then asks push_latest() what to show, proving it is that phone with a
--     random read key it alone holds (only its SHA-256 is kept here);
--   * stored push addresses must be real browser push services, so the sender can never be pointed elsewhere.
-- The sender is the Edge Function supabase/functions/push, run each minute by pg_cron (supabase/cron.sql).
-- =====================================================================================================

-- His alert choices. One row per man; he reads and changes his own (row rules below).
create table if not exists public.alert_prefs (
  user_id    uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  warnings   boolean not null default true,    -- National Weather Service warnings for his county
  watches    boolean not null default false,   -- and watches
  checkin    boolean not null default true,    -- the weekly check-in reminder
  forum      boolean not null default true,    -- replies in the forum
  tz         text not null default 'America/Chicago' check (length(tz) <= 64),   -- for the check-in hour
  updated_at timestamptz not null default now()
);

-- One row per phone or browser that turned alerts on. Written only through push_subscribe().
create table if not exists public.push_subs (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references auth.users (id) on delete cascade,
  endpoint   text not null unique check (length(endpoint) <= 1000 and endpoint ~ ('^https://(' ||
               'fcm\.googleapis\.com|updates\.push\.services\.mozilla\.com|([a-z0-9-]+\.)+push\.services\.mozilla\.com|' ||
               'web\.push\.apple\.com|([a-z0-9-]+\.)+push\.apple\.com|([a-z0-9-]+\.)+notify\.windows\.com)/')),
  read_hash  text not null check (read_hash ~ '^[0-9a-f]{64}$'),
  created_at timestamptz not null default now(),
  last_ok    timestamptz,
  last_event bigint not null default 0
);
create index if not exists push_subs_user on public.push_subs (user_id);

-- What each alert says. The push is empty; the phone reads this. He can read his own (alert.html).
create table if not exists public.push_events (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references auth.users (id) on delete cascade,
  kind       text not null check (kind in ('warning', 'watch', 'checkin', 'forum', 'test')),
  ref        text not null check (length(ref) <= 300),
  title      text not null check (length(title) <= 120),
  body       text not null default '' check (length(body) <= 200),
  url        text not null default 'index.html' check (url ~ '^[a-z0-9-]+\.html([?#].*)?$' and length(url) <= 300),
  detail     jsonb not null default '{}'::jsonb check (pg_column_size(detail) < 20000),
  created_at timestamptz not null default now(),
  sent_at    timestamptz,
  unique (user_id, kind, ref)
);
create index if not exists push_events_unsent on public.push_events (created_at) where sent_at is null;
create index if not exists push_events_user on public.push_events (user_id, id);

-- Small notes the sender keeps for itself (when it last asked the Weather Service). No one else can read it.
create table if not exists public.push_state (
  key text primary key,
  at  timestamptz not null default now()
);

-- Row rules. These four are not FORCEd (unlike the tables above): the alert functions below run as the table owner and
-- must reach every man's rows, while signed-in men and visitors stay bound by the rules.
do $$
begin
  execute 'alter table public.alert_prefs enable row level security';
  execute 'revoke all on public.alert_prefs from anon';
  execute 'grant select, insert, update, delete on public.alert_prefs to authenticated';
  execute 'drop policy if exists "own rows: read" on public.alert_prefs';
  execute 'drop policy if exists "own rows: add" on public.alert_prefs';
  execute 'drop policy if exists "own rows: change" on public.alert_prefs';
  execute 'drop policy if exists "own rows: remove" on public.alert_prefs';
  execute 'create policy "own rows: read"   on public.alert_prefs for select to authenticated using (auth.uid() = user_id)';
  execute 'create policy "own rows: add"    on public.alert_prefs for insert to authenticated with check (auth.uid() = user_id)';
  execute 'create policy "own rows: change" on public.alert_prefs for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id)';
  execute 'create policy "own rows: remove" on public.alert_prefs for delete to authenticated using (auth.uid() = user_id)';

  -- phones: he can see that they exist and remove them; adding goes through push_subscribe()
  execute 'alter table public.push_subs enable row level security';
  execute 'revoke all on public.push_subs from anon, authenticated';
  execute 'grant select (id, created_at, last_ok), delete on public.push_subs to authenticated';
  execute 'drop policy if exists "own rows: read" on public.push_subs';
  execute 'drop policy if exists "own rows: remove" on public.push_subs';
  execute 'create policy "own rows: read"   on public.push_subs for select to authenticated using (auth.uid() = user_id)';
  execute 'create policy "own rows: remove" on public.push_subs for delete to authenticated using (auth.uid() = user_id)';

  -- alerts: he can read his own; only the server writes them
  execute 'alter table public.push_events enable row level security';
  execute 'revoke all on public.push_events from anon, authenticated';
  execute 'grant select on public.push_events to authenticated';
  execute 'drop policy if exists "own rows: read" on public.push_events';
  execute 'create policy "own rows: read" on public.push_events for select to authenticated using (auth.uid() = user_id)';

  execute 'alter table public.push_state enable row level security';
  execute 'revoke all on public.push_state from anon, authenticated';
end $$;

drop trigger if exists alert_prefs_touch on public.alert_prefs;
create trigger alert_prefs_touch before update on public.alert_prefs for each row execute function public.rd_touch();

-- ---------- turn alerts on or off for this phone ----------
-- A phone that moves to another man's sign-in takes the new owner, and starts from now, not from old alerts.
create or replace function public.push_subscribe(p_endpoint text, p_read_hash text, p_tz text default null) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  delete from public.push_subs where endpoint = p_endpoint;
  insert into public.push_subs (user_id, endpoint, read_hash, last_event)
    values (auth.uid(), p_endpoint, lower(p_read_hash), coalesce((select max(id) from public.push_events), 0));
  insert into public.alert_prefs (user_id) values (auth.uid()) on conflict (user_id) do nothing;
  if p_tz is not null and exists (select 1 from pg_timezone_names where name = p_tz) then
    update public.alert_prefs set tz = p_tz where user_id = auth.uid();
  end if;
end $$;

create or replace function public.push_unsubscribe(p_endpoint text) returns void
language sql security definer set search_path = public as $$
  delete from public.push_subs where endpoint = p_endpoint and user_id = auth.uid();
$$;

-- A test alert to his own phones. At most one a minute.
create or replace function public.push_test() returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  if not exists (select 1 from public.push_subs where user_id = auth.uid()) then return false; end if;
  if exists (select 1 from public.push_events where user_id = auth.uid() and kind = 'test' and created_at > now() - interval '1 minute') then
    return false;
  end if;
  insert into public.push_events (user_id, kind, ref, title, body, url)
    values (auth.uid(), 'test', 'test:' || extract(epoch from clock_timestamp())::bigint, 'Test alert', 'Alerts are working on this phone.', 'account.html#alerts');
  return true;
end $$;

-- ---------- what the phone shows: called by sw.js with the phone's own read key ----------
-- Anyone may call it, but it returns nothing unless the endpoint and the read key match a stored phone.
-- Unseen alerts from the last day, oldest first, at most five; the phone then counts them as seen.
create or replace function public.push_latest(p_endpoint text, p_read_key text)
returns table (id bigint, kind text, title text, body text, url text, created_at timestamptz)
language plpgsql security definer set search_path = public as $$
declare s record; newest bigint;
begin
  select ps.id, ps.user_id, ps.last_event into s from public.push_subs ps
    where ps.endpoint = p_endpoint and ps.read_hash = encode(sha256(convert_to(coalesce(p_read_key, ''), 'UTF8')), 'hex');
  if not found then return; end if;
  select max(e.id) into newest from public.push_events e where e.user_id = s.user_id and e.id > s.last_event;
  if newest is null then return; end if;
  update public.push_subs set last_event = newest where push_subs.id = s.id;
  return query select x.id, x.kind, x.title, x.body, x.url, x.created_at from (
    select e.id, e.kind, e.title, e.body, e.url, e.created_at from public.push_events e
      where e.user_id = s.user_id and e.id > s.last_event and e.created_at > now() - interval '1 day'
      order by e.id desc limit 5) x order by x.id;
end $$;

-- ---------- queue an alert for one man (the forum, and other server-side code) ----------
-- Callable only by the server (service role) and by security-definer triggers; never by a signed-in man or a visitor.
-- Same (man, kind, ref) twice does nothing. Respects his settings, and needs a phone with alerts on.
create or replace function public.queue_push(p_user uuid, p_kind text, p_ref text, p_title text, p_body text, p_url text, p_from uuid default null)
returns boolean language plpgsql security definer set search_path = public as $$
declare p record; n int; b text;
begin
  if p_user is null or p_user = p_from then return false; end if;
  if p_kind not in ('forum', 'checkin', 'warning', 'watch') then return false; end if;
  if not exists (select 1 from public.push_subs where user_id = p_user) then return false; end if;
  select * into p from public.alert_prefs where user_id = p_user;
  if found and ((p_kind = 'forum' and not p.forum) or (p_kind = 'checkin' and not p.checkin)
             or (p_kind = 'warning' and not p.warnings) or (p_kind = 'watch' and not p.watches)) then return false; end if;
  if not found and p_kind = 'watch' then return false; end if;
  b := btrim(regexp_replace(coalesce(p_body, ''), '\s+', ' ', 'g'));
  if length(b) > 160 then b := left(b, 157) || '…'; end if;
  insert into public.push_events (user_id, kind, ref, title, body, url)
    values (p_user, p_kind, left(coalesce(p_ref, ''), 300), left(coalesce(nullif(btrim(p_title), ''), 'Prepare Me'), 80), b,
            case when coalesce(p_url, '') ~ '^[a-z0-9-]+\.html([?#].*)?$' and length(p_url) <= 300 then p_url else 'index.html' end)
    on conflict (user_id, kind, ref) do nothing;
  get diagnostics n = row_count;
  return n > 0;
end $$;

-- ---------- weather: the sender passes the active NWS warnings and watches; this matches them to counties ----------
-- p_alerts: [{ "ref", "kind": "warning"|"watch", "event", "fips": ["48201", ...], "title", "body", "detail": {...} }]
-- His county is answers.county.fips on his profile. Returns how many alerts were queued.
create or replace function public.push_queue_weather(p_alerts jsonb) returns int
language plpgsql security definer set search_path = public as $$
declare ids bigint[];
begin
  with a as (
    select x->>'ref' as ref, x->>'kind' as kind, x->>'title' as title, x->>'body' as body,
           coalesce(x->'detail', '{}'::jsonb) as detail, f.fips
      from jsonb_array_elements(coalesce(p_alerts, '[]'::jsonb)) x
      cross join lateral jsonb_array_elements_text(coalesce(x->'fips', '[]'::jsonb)) f(fips)
     where x->>'kind' in ('warning', 'watch') and coalesce(x->>'ref', '') <> ''
  ), m as (
    select distinct on (pr.user_id, a.ref) pr.user_id, a.ref, a.kind, a.title, a.body, a.detail, a.fips
      from a
      join public.profiles pr on pr.answers->'county'->>'fips' = a.fips
      left join public.alert_prefs ap on ap.user_id = pr.user_id
     where exists (select 1 from public.push_subs s where s.user_id = pr.user_id)
       and ((a.kind = 'warning' and coalesce(ap.warnings, true)) or (a.kind = 'watch' and coalesce(ap.watches, false)))
  ), ins as (
    insert into public.push_events (user_id, kind, ref, title, body, url, detail)
    select m.user_id, m.kind, left(m.ref, 300), left(coalesce(nullif(m.title, ''), 'Weather alert'), 80),
           case when length(coalesce(m.body, '')) > 160 then left(m.body, 157) || '…' else coalesce(m.body, '') end,
           'alert.html', m.detail || jsonb_build_object('fips', m.fips)
      from m
    on conflict (user_id, kind, ref) do nothing
    returning push_events.id
  )
  select array_agg(ins.id) into ids from ins;
  -- tapping a weather alert opens its own page
  update public.push_events e set url = 'alert.html?id=' || e.id where e.id = any(ids);
  return coalesce(cardinality(ids), 0);
end $$;

-- ---------- the weekly check-in reminder: once a week, from 10 a.m. his time, while one is due ----------
-- Due means the same as engine.checkinDue: no check-in this week (weeks start Monday) and his first assessment is
-- at least five days old. Returns how many were queued.
create or replace function public.push_queue_checkins(p_now timestamptz default now()) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  with u as (
    select ap.user_id, (p_now at time zone ap.tz) as local_now
      from public.alert_prefs ap
      join pg_timezone_names z on z.name = ap.tz
     where ap.checkin
       and exists (select 1 from public.push_subs s where s.user_id = ap.user_id)
       and (select min(a.taken_at) from public.assessments a where a.user_id = ap.user_id) <= p_now - interval '5 days'
  ), due as (
    select u.user_id, date_trunc('week', u.local_now)::date as wk from u
     where extract(hour from u.local_now) between 10 and 19
       and not exists (select 1 from public.checkins c where c.user_id = u.user_id and c.week_of = date_trunc('week', u.local_now)::date)
  ), ins as (
    insert into public.push_events (user_id, kind, ref, title, body, url)
    select due.user_id, 'checkin', 'checkin:' || due.wk, 'Your weekly check-in', 'Three quick questions and your score for the week.', 'checkin.html'
      from due
    on conflict (user_id, kind, ref) do nothing
    returning 1
  )
  select count(*) into n from ins;
  return n;
end $$;

-- ---------- the sender: which phones to wake now. Marks the alerts sent and clears out old ones. ----------
create or replace function public.push_claim() returns table (sub_id bigint, endpoint text)
language plpgsql security definer set search_path = public as $$
begin
  delete from public.push_events where created_at < now() - interval '60 days';
  return query
    with c as (
      update public.push_events e set sent_at = now()
       where e.sent_at is null and e.created_at > now() - interval '1 day'
      returning e.user_id
    )
    select s.id, s.endpoint from public.push_subs s where s.user_id in (select c.user_id from c);
end $$;

-- True at most once every 150 seconds: whether it is time to ask the Weather Service again.
create or replace function public.push_nws_due() returns boolean
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  insert into public.push_state (key, at) values ('nws', now() - interval '1 hour') on conflict (key) do nothing;
  update public.push_state set at = now() where key = 'nws' and at < now() - interval '150 seconds';
  get diagnostics n = row_count;
  return n > 0;
end $$;

-- The forum's hook (agreed with the forum branch): its AFTER INSERT trigger on forum_replies calls this for the topic's
-- author. 'forum_reply' is a forum alert (his "Replies to me in the forum" choice). Each call is one reply, so each is queued.
create or replace function public.queue_alert(p_user uuid, p_kind text, p_title text, p_body text, p_url text) returns void
language plpgsql security definer set search_path = public as $$
begin
  perform public.queue_push(p_user, case when p_kind in ('forum_reply', 'forum') then 'forum' else p_kind end,
    left(coalesce(p_kind, '') || ':' || coalesce(p_url, '') || ':' || (extract(epoch from clock_timestamp()) * 1000000)::bigint, 300),
    p_title, p_body, p_url, null);
end $$;

-- After sending: phones the push service took (last_ok), and phones it says are gone (removed).
create or replace function public.push_result(p_ok bigint[], p_gone bigint[]) returns void
language sql security definer set search_path = public as $$
  update public.push_subs set last_ok = now() where id = any(coalesce(p_ok, '{}'));
  delete from public.push_subs where id = any(coalesce(p_gone, '{}'));
$$;

-- who may run what
revoke all on function public.push_subscribe(text, text, text) from public, anon;
grant execute on function public.push_subscribe(text, text, text) to authenticated;
revoke all on function public.push_unsubscribe(text) from public, anon;
grant execute on function public.push_unsubscribe(text) to authenticated;
revoke all on function public.push_test() from public, anon;
grant execute on function public.push_test() to authenticated;
revoke all on function public.push_latest(text, text) from public;
grant execute on function public.push_latest(text, text) to anon, authenticated;
do $$
declare f text;
begin
  foreach f in array array['public.queue_push(uuid, text, text, text, text, text, uuid)', 'public.push_queue_weather(jsonb)',
                           'public.push_queue_checkins(timestamptz)', 'public.push_claim()', 'public.push_nws_due()',
                           'public.push_result(bigint[], bigint[])',
                           'public.queue_alert(uuid, text, text, text, text)'] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
end $$;
