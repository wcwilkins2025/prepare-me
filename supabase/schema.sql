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

-- The alert sender's functions run as the owner of these tables. profiles, assessments and checkins FORCE row rules
-- (so even the owner is bound), and the owner is a plain role on Supabase, so it gets one rule of its own: read only.
-- It reaches the county (profiles), the first assessment date and this week's check-in, and nothing else. No signed-in
-- man or visitor is the owner, so this opens nothing to them.
do $$
declare t text;
begin
  foreach t in array array['profiles', 'assessments', 'checkins'] loop
    execute format('drop policy if exists "alert sender: read" on public.%I', t);
    execute format('create policy "alert sender: read" on public.%I for select to %I using (true)', t, current_user);
  end loop;
end $$;

-- =====================================================================================================================
-- ---------- the forum: men ask and answer questions, by board. Only signed-in men read it; nothing in it is public. ----
-- Each man picks a display name the first time he posts. It lives in his own profiles row. No email is ever shown.
-- Posts show at once. A moderator (Wiley) hides or restores any post and reads the reports.
-- Row-level security is on for the forum tables but not forced, so the trigger functions below (owned by the table
-- owner) can keep names, counts and rate limits honest. Men reach the tables only through the policies.

-- his display name, in his own row. Unique without regard to case. No @, so an email can never be a name.
alter table public.profiles add column if not exists display_name text;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'profiles_display_name_ok') then
    alter table public.profiles add constraint profiles_display_name_ok check (display_name is null or
      (char_length(display_name) between 2 and 30 and display_name ~ '^[A-Za-z0-9][A-Za-z0-9 ._''-]*[A-Za-z0-9.]$' and display_name !~ '  '));
  end if;
end $$;
create unique index if not exists profiles_display_name_unique on public.profiles (lower(display_name)) where display_name is not null;

-- moderators: one row per moderator, set only by SQL run in the dashboard (see README). No one reads or changes it from the app.
create table if not exists public.moderators (
  user_id  uuid primary key references auth.users (id) on delete cascade,
  added_at timestamptz not null default now()
);

create table if not exists public.forum_topics (
  id            bigint generated always as identity primary key,
  user_id       uuid not null default auth.uid() references auth.users (id) on delete cascade,
  board         text not null check (board in ('start', 'water', 'food', 'power', 'medical', 'comms', 'plan', 'home', 'skills', 'money', 'disasters')),
  title         text not null check (char_length(btrim(title)) between 5 and 120),
  body          text not null check (char_length(btrim(body)) between 1 and 4000),
  task_id       text check (task_id is null or task_id ~ '^[a-z0-9-]{1,40}$'),
  author_name   text not null default '',
  by_moderator  boolean not null default false,
  hidden        boolean not null default false,
  hidden_at     timestamptz,
  reply_count   int not null default 0,
  created_at    timestamptz not null default now(),
  last_reply_at timestamptz not null default now()
);
create index if not exists forum_topics_board on public.forum_topics (board, last_reply_at desc);
create index if not exists forum_topics_user on public.forum_topics (user_id, created_at);

create table if not exists public.forum_replies (
  id           bigint generated always as identity primary key,
  topic_id     bigint not null references public.forum_topics (id) on delete cascade,
  user_id      uuid not null default auth.uid() references auth.users (id) on delete cascade,
  body         text not null check (char_length(btrim(body)) between 1 and 2000),
  author_name  text not null default '',
  by_moderator boolean not null default false,
  hidden       boolean not null default false,
  hidden_at    timestamptz,
  created_at   timestamptz not null default now()
);
create index if not exists forum_replies_topic on public.forum_replies (topic_id, created_at);
create index if not exists forum_replies_user on public.forum_replies (user_id, created_at);

-- a report names one topic or one reply. A man reports a post once. Only moderators read reports.
create table if not exists public.forum_reports (
  id          bigint generated always as identity primary key,
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  topic_id    bigint references public.forum_topics (id) on delete cascade,
  reply_id    bigint references public.forum_replies (id) on delete cascade,
  reason      text not null default '' check (char_length(reason) <= 300),
  created_at  timestamptz not null default now(),
  resolved_at timestamptz,
  check ((topic_id is null) <> (reply_id is null))
);
create unique index if not exists forum_reports_once_topic on public.forum_reports (user_id, topic_id) where topic_id is not null;
create unique index if not exists forum_reports_once_reply on public.forum_reports (user_id, reply_id) where reply_id is not null;
create index if not exists forum_reports_open on public.forum_reports (created_at) where resolved_at is null;

-- ---------- is the man signed in a moderator? (the forum page asks, to show the moderator tools) ----------
create or replace function public.forum_is_moderator() returns boolean
language sql stable security definer set search_path = public as $$
  select auth.uid() is not null and exists (select 1 from public.moderators where user_id = auth.uid())
$$;
revoke all on function public.forum_is_moderator() from public, anon;
grant execute on function public.forum_is_moderator() to authenticated;

-- ---------- row rules ----------
do $$
declare t text;
begin
  foreach t in array array['moderators', 'forum_topics', 'forum_replies', 'forum_reports'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('revoke all on public.%I from anon, authenticated', t);
  end loop;
end $$;
-- no update or delete grants: men cannot edit, hide or remove posts. A moderator does that through forum_moderate().
grant select, insert on public.forum_topics, public.forum_replies, public.forum_reports to authenticated;

drop policy if exists "forum: read" on public.forum_topics;
create policy "forum: read" on public.forum_topics for select to authenticated
  using (not hidden or user_id = auth.uid() or public.forum_is_moderator());
drop policy if exists "forum: post as himself" on public.forum_topics;
create policy "forum: post as himself" on public.forum_topics for insert to authenticated
  with check (user_id = auth.uid());

drop policy if exists "forum: read" on public.forum_replies;
create policy "forum: read" on public.forum_replies for select to authenticated
  using ((not hidden or user_id = auth.uid() or public.forum_is_moderator())
         and exists (select 1 from public.forum_topics t where t.id = topic_id));
drop policy if exists "forum: reply as himself" on public.forum_replies;
create policy "forum: reply as himself" on public.forum_replies for insert to authenticated
  with check (user_id = auth.uid() and exists (select 1 from public.forum_topics t where t.id = topic_id and not t.hidden));

drop policy if exists "forum: moderators read reports" on public.forum_reports;
create policy "forum: moderators read reports" on public.forum_reports for select to authenticated
  using (public.forum_is_moderator());
drop policy if exists "forum: report as himself" on public.forum_reports;
create policy "forum: report as himself" on public.forum_reports for insert to authenticated
  with check (user_id = auth.uid() and resolved_at is null and (
    exists (select 1 from public.forum_topics t where t.id = topic_id and not t.hidden) or
    exists (select 1 from public.forum_replies r where r.id = reply_id and not r.hidden)));
-- moderators has no policies at all, so the app can neither read nor write it.

-- ---------- before a topic or reply goes in: his name, the moderator mark, the rate limit, and values he cannot set ----------
-- These run as the man posting (not security definer), so they see only what his own row rules let him see:
-- his own profile and his own posts. The row rule then refuses the post unless it is under his own id.
-- The rate limit: 3 posts a minute and 30 a day, topics and replies together.
create or replace function public.forum_name_and_rate() returns text
language plpgsql set search_path = public as $$
declare nm text; recent int; today int;
begin
  select display_name into nm from public.profiles where user_id = auth.uid();
  if nm is null then raise exception 'forum: pick a display name first' using errcode = 'P0001'; end if;
  select (select count(*) from public.forum_topics  where user_id = auth.uid() and created_at > now() - interval '1 minute')
       + (select count(*) from public.forum_replies where user_id = auth.uid() and created_at > now() - interval '1 minute'),
         (select count(*) from public.forum_topics  where user_id = auth.uid() and created_at > now() - interval '1 day')
       + (select count(*) from public.forum_replies where user_id = auth.uid() and created_at > now() - interval '1 day')
    into recent, today;
  if recent >= 3 then raise exception 'forum: slow down, try again in a minute' using errcode = 'P0001'; end if;
  if today >= 30 then raise exception 'forum: that is the most posts for one day' using errcode = 'P0001'; end if;
  return nm;
end $$;
drop function if exists public.forum_check_rate(uuid);
revoke all on function public.forum_name_and_rate() from public, anon;
grant execute on function public.forum_name_and_rate() to authenticated;

create or replace function public.forum_before_topic() returns trigger
language plpgsql set search_path = public as $$
begin
  if new.user_id is distinct from auth.uid() then raise exception 'forum: post as yourself' using errcode = '42501'; end if;
  new.author_name   := public.forum_name_and_rate();
  new.by_moderator  := public.forum_is_moderator();
  new.title         := btrim(new.title);
  new.body          := btrim(new.body);
  new.hidden        := false;
  new.hidden_at     := null;
  new.reply_count   := 0;
  new.created_at    := now();
  new.last_reply_at := now();
  return new;
end $$;
drop trigger if exists forum_topics_before on public.forum_topics;
create trigger forum_topics_before before insert on public.forum_topics for each row execute function public.forum_before_topic();

create or replace function public.forum_before_reply() returns trigger
language plpgsql set search_path = public as $$
begin
  if new.user_id is distinct from auth.uid() then raise exception 'forum: post as yourself' using errcode = '42501'; end if;
  new.author_name  := public.forum_name_and_rate();
  new.by_moderator := public.forum_is_moderator();
  new.body         := btrim(new.body);
  new.hidden       := false;
  new.hidden_at    := null;
  new.created_at   := now();
  return new;
end $$;
drop trigger if exists forum_replies_before on public.forum_replies;
create trigger forum_replies_before before insert on public.forum_replies for each row execute function public.forum_before_reply();

-- ---------- the topic's reply count and last reply time count only posts that show ----------
create or replace function public.forum_recount(p_topic bigint) returns void
language sql security definer set search_path = public as $$
  update public.forum_topics t set
    reply_count   = (select count(*) from public.forum_replies r where r.topic_id = t.id and not r.hidden),
    last_reply_at = greatest(t.created_at, coalesce((select max(created_at) from public.forum_replies r where r.topic_id = t.id and not r.hidden), t.created_at))
  where t.id = p_topic
$$;
revoke all on function public.forum_recount(bigint) from public, anon, authenticated;

-- ---------- a new reply: count it, and queue a phone alert to the topic's author ----------
-- The alerts are built in the phone-alerts work. Its public.queue_alert(user, kind, title, body, url) takes the alert.
-- Until that function exists this does nothing, so the forum works with or without alerts. The alert holds only
-- the public display name and the topic title, never an email.
create or replace function public.forum_after_reply() returns trigger
language plpgsql security definer set search_path = public as $$
declare t public.forum_topics;
begin
  perform public.forum_recount(new.topic_id);
  select * into t from public.forum_topics where id = new.topic_id;
  if t.user_id <> new.user_id and to_regprocedure('public.queue_alert(uuid,text,text,text,text)') is not null then
    execute 'select public.queue_alert($1, $2, $3, $4, $5)'
      using t.user_id, 'forum_reply', 'New reply',
            new.author_name || ' replied to "' || left(t.title, 60) || case when char_length(t.title) > 60 then '…' else '' end || '"',
            'forum.html?topic=' || t.id;
  end if;
  return null;
end $$;
drop trigger if exists forum_replies_after on public.forum_replies;
create trigger forum_replies_after after insert on public.forum_replies for each row execute function public.forum_after_reply();

-- ---------- before a report goes in: 10 a day ----------
create or replace function public.forum_before_report() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.user_id is distinct from auth.uid() then raise exception 'forum: report as yourself' using errcode = '42501'; end if;
  if (select count(*) from public.forum_reports where user_id = new.user_id and created_at > now() - interval '1 day') >= 10 then
    raise exception 'forum: that is the most reports for one day' using errcode = 'P0001';
  end if;
  new.reason      := btrim(new.reason);
  new.created_at  := now();
  new.resolved_at := null;
  return new;
end $$;
drop trigger if exists forum_reports_before on public.forum_reports;
create trigger forum_reports_before before insert on public.forum_reports for each row execute function public.forum_before_report();

-- ---------- moderator tools: hide or restore a topic or reply; clear a report without hiding anything ----------
create or replace function public.forum_moderate(p_kind text, p_id bigint, p_hide boolean) returns void
language plpgsql security definer set search_path = public as $$
declare tid bigint;
begin
  if not public.forum_is_moderator() then raise exception 'moderators only' using errcode = '42501'; end if;
  if p_kind = 'topic' then
    update public.forum_topics set hidden = p_hide, hidden_at = case when p_hide then now() end where id = p_id returning id into tid;
    if p_hide then update public.forum_reports set resolved_at = now() where topic_id = p_id and resolved_at is null; end if;
  elsif p_kind = 'reply' then
    update public.forum_replies set hidden = p_hide, hidden_at = case when p_hide then now() end where id = p_id returning topic_id into tid;
    if p_hide then update public.forum_reports set resolved_at = now() where reply_id = p_id and resolved_at is null; end if;
    if tid is not null then perform public.forum_recount(tid); end if;
  else
    raise exception 'kind must be topic or reply';
  end if;
  if tid is null then raise exception 'no such post'; end if;
end $$;
revoke all on function public.forum_moderate(text, bigint, boolean) from public, anon;
grant execute on function public.forum_moderate(text, bigint, boolean) to authenticated;

create or replace function public.forum_clear_report(p_id bigint) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.forum_is_moderator() then raise exception 'moderators only' using errcode = '42501'; end if;
  update public.forum_reports set resolved_at = now() where id = p_id and resolved_at is null;
end $$;
revoke all on function public.forum_clear_report(bigint) from public, anon;
grant execute on function public.forum_clear_report(bigint) to authenticated;

-- ---------- when he changes his display name, his posts show the new one ----------
create or replace function public.forum_rename() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.display_name is distinct from old.display_name and new.display_name is not null then
    update public.forum_topics  set author_name = new.display_name where user_id = new.user_id;
    update public.forum_replies set author_name = new.display_name where user_id = new.user_id;
  end if;
  return null;
end $$;
drop trigger if exists profiles_forum_rename on public.profiles;
create trigger profiles_forum_rename after update of display_name on public.profiles for each row execute function public.forum_rename();

-- trigger functions are never called directly
revoke all on function public.forum_before_topic(), public.forum_before_reply(), public.forum_after_reply(),
  public.forum_before_report(), public.forum_rename() from public, anon, authenticated;
