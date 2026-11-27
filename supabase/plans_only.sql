-- Prepare Me: just the family plan table (same as the plans parts of schema.sql). Safe to run again.
create table if not exists public.plans (
  id         bigint generated always as identity unique,
  user_id    uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb check (jsonb_typeof(data) = 'object' and pg_column_size(data) < 60000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.plans enable row level security;
alter table public.plans force row level security;
revoke all on public.plans from anon;
grant select, insert, update, delete on public.plans to authenticated;
drop policy if exists "own rows: read" on public.plans;
drop policy if exists "own rows: add" on public.plans;
drop policy if exists "own rows: change" on public.plans;
drop policy if exists "own rows: remove" on public.plans;
create policy "own rows: read"   on public.plans for select to authenticated using (auth.uid() = user_id);
create policy "own rows: add"    on public.plans for insert to authenticated with check (auth.uid() = user_id);
create policy "own rows: change" on public.plans for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own rows: remove" on public.plans for delete to authenticated using (auth.uid() = user_id);
drop trigger if exists plans_touch on public.plans;
create trigger plans_touch before update on public.plans for each row execute function public.rd_touch();
notify pgrst, 'reload schema';
