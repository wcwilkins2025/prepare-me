-- A small stand-in for the parts of Supabase that schema.sql leans on, so the row rules can be tested on plain Postgres.
-- Used only by supabase/tests/run_rls.sh. Never run this on the real project.
do $$ begin
  if not exists (select 1 from pg_roles where rolname = 'anon') then create role anon nologin; end if;
  if not exists (select 1 from pg_roles where rolname = 'authenticated') then create role authenticated nologin; end if;
  if not exists (select 1 from pg_roles where rolname = 'service_role') then create role service_role nologin bypassrls; end if;
  -- schema.sql runs as this plain role (not a superuser, no bypassrls), so the tests catch a function that only works for a superuser
  if not exists (select 1 from pg_roles where rolname = 'schema_owner') then create role schema_owner nologin nobypassrls; end if;
end $$;
create schema if not exists auth;
create table if not exists auth.users (id uuid primary key, email text);
create or replace function auth.uid() returns uuid language sql stable as $$
  select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid
$$;
grant usage on schema public to anon, authenticated;
grant usage on schema auth to anon, authenticated;
grant execute on function auth.uid() to anon, authenticated;
-- what the dashboard's postgres role can do on Supabase: make tables in public, and point at and remove sign-ins
grant usage, create on schema public to schema_owner;
grant usage on schema auth to schema_owner;
grant select, references, delete on auth.users to schema_owner;
grant execute on function auth.uid() to schema_owner;
grant anon, authenticated to schema_owner;
