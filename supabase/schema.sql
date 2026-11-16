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
