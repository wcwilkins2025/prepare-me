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
