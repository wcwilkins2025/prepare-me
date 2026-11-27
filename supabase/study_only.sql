-- Prepare Me: just the flash card table (same as the study parts of schema.sql). Safe to run again.
create table if not exists public.study (
  user_id    uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb check (jsonb_typeof(data) = 'object' and pg_column_size(data) < 60000),
  updated_at timestamptz not null default now()
);
alter table public.study enable row level security;
alter table public.study force row level security;
revoke all on public.study from anon;
grant select, insert, update, delete on public.study to authenticated;
drop policy if exists "own rows: read" on public.study;
drop policy if exists "own rows: add" on public.study;
drop policy if exists "own rows: change" on public.study;
drop policy if exists "own rows: remove" on public.study;
create policy "own rows: read"   on public.study for select to authenticated using (auth.uid() = user_id);
create policy "own rows: add"    on public.study for insert to authenticated with check (auth.uid() = user_id);
create policy "own rows: change" on public.study for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own rows: remove" on public.study for delete to authenticated using (auth.uid() = user_id);
drop trigger if exists study_touch on public.study;
create trigger study_touch before update on public.study for each row execute function public.rd_touch();
notify pgrst, 'reload schema';
