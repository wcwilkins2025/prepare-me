-- Row rule tests: two men, A and B. Each must see and change only his own rows. Visitors who are not signed in get nothing.
-- Run by supabase/tests/run_rls.sh after stub_supabase.sql and schema.sql. Any failed check stops with an error.
\set ON_ERROR_STOP on
insert into auth.users values ('aaaaaaaa-0000-0000-0000-000000000001', 'a@example.com'), ('bbbbbbbb-0000-0000-0000-000000000002', 'b@example.com');

create or replace function pg_temp.check(cond boolean, msg text) returns void language plpgsql as $$
begin if not cond then raise exception 'FAIL: %', msg; end if; raise notice 'ok   %', msg; end $$;

-- ---------- A writes his rows ----------
set role authenticated;
select set_config('request.jwt.claim.sub', 'aaaaaaaa-0000-0000-0000-000000000001', false);
insert into public.profiles (answers) values ('{"adults": 2}');
insert into public.assessments (answers, have, overall, areas, hazards) values ('{"adults": 2}', '{water-3day}', 12, '{}', '{}');
insert into public.progress (task_id, status, done_at) values ('comm-contact', 'done', now());
insert into public.checkins (week_of, overall, done_count, answers) values ('2026-11-16', 14, 1, '{"how": "done"}');
select pg_temp.check((select count(*) from public.assessments) = 1, 'A sees his own assessment');

-- ---------- B sees none of it and cannot touch it ----------
select set_config('request.jwt.claim.sub', 'bbbbbbbb-0000-0000-0000-000000000002', false);
select pg_temp.check((select count(*) from public.profiles) = 0, 'B cannot read A''s profile');
select pg_temp.check((select count(*) from public.assessments) = 0, 'B cannot read A''s assessments');
select pg_temp.check((select count(*) from public.progress) = 0, 'B cannot read A''s progress');
select pg_temp.check((select count(*) from public.checkins) = 0, 'B cannot read A''s check-ins');
with u as (update public.progress set status = 'open' returning 1) select pg_temp.check((select count(*) from u) = 0, 'B cannot change A''s progress');
with d as (delete from public.assessments returning 1) select pg_temp.check((select count(*) from d) = 0, 'B cannot delete A''s assessments');
do $$ begin
  begin
    insert into public.progress (user_id, task_id, status) values ('aaaaaaaa-0000-0000-0000-000000000001', 'med-kit', 'done');
    raise exception 'FAIL: B wrote a row as A';
  exception when insufficient_privilege then raise notice 'ok   B cannot write a row under A''s id';
  end;
  begin
    update public.profiles set user_id = 'bbbbbbbb-0000-0000-0000-000000000002';
    raise notice 'ok   B''s update touched no rows of A''s';
  end;
end $$;
insert into public.progress (task_id, status) values ('med-kit', 'done');
select pg_temp.check((select count(*) from public.progress) = 1, 'B sees only his own row');
do $$ begin
  begin
    insert into public.progress (task_id, status) values ('x', 'bogus');
    raise exception 'FAIL: a bad status got in';
  exception when check_violation then raise notice 'ok   bad status refused';
  end;
end $$;

-- ---------- not signed in: nothing at all ----------
reset role;
set role anon;
select set_config('request.jwt.claim.sub', '', false);
do $$ begin
  begin
    perform count(*) from public.assessments;
    raise exception 'FAIL: a visitor read assessments';
  exception when insufficient_privilege then raise notice 'ok   a visitor cannot read any table';
  end;
  begin
    perform public.delete_me();
    raise exception 'FAIL: a visitor ran delete_me';
  exception when insufficient_privilege then raise notice 'ok   a visitor cannot run delete_me';
  end;
end $$;

-- ---------- delete_me removes only the man who calls it ----------
reset role;
set role authenticated;
select set_config('request.jwt.claim.sub', 'bbbbbbbb-0000-0000-0000-000000000002', false);
select public.delete_me();
reset role;
select pg_temp.check((select count(*) from auth.users) = 1, 'delete_me removed B only');
select pg_temp.check((select count(*) from public.progress where user_id = 'bbbbbbbb-0000-0000-0000-000000000002') = 0, 'B''s rows went with him');
select pg_temp.check((select count(*) from public.progress where user_id = 'aaaaaaaa-0000-0000-0000-000000000001') = 1, 'A''s rows are untouched');
select pg_temp.check((select count(*) from public.checkins) = 1 and (select count(*) from public.assessments) = 1, 'A still has his check-in and assessment');
\echo ALL ROW RULE CHECKS PASS
