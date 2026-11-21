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

-- ---------- phone alerts ----------
reset role;
-- give A a county (Harris County, Texas) and an assessment old enough for check-in reminders
update public.profiles set answers = '{"adults": 2, "county": {"fips": "48201", "st": "TX"}}' where user_id = 'aaaaaaaa-0000-0000-0000-000000000001';
update public.assessments set taken_at = now() - interval '30 days' where user_id = 'aaaaaaaa-0000-0000-0000-000000000001';
set role authenticated;
select set_config('request.jwt.claim.sub', 'aaaaaaaa-0000-0000-0000-000000000001', false);
do $$ begin
  begin
    perform public.push_subscribe('https://evil.example.com/collect', repeat('a', 64), null);
    raise exception 'FAIL: a phone address off the push services got in';
  exception when check_violation then raise notice 'ok   only real push services are stored';
  end;
  begin
    perform public.push_subscribe('https://fcm.googleapis.com.evil.example/x', repeat('a', 64), null);
    raise exception 'FAIL: a look-alike push host got in';
  exception when check_violation then raise notice 'ok   a look-alike push host is refused';
  end;
end $$;
select public.push_subscribe('https://fcm.googleapis.com/fcm/send/phone-a', encode(sha256('read-key-a'::bytea), 'hex'), 'America/Chicago');
select pg_temp.check((select count(*) from public.push_subs) = 1, 'A sees his own phone');
select pg_temp.check((select tz from public.alert_prefs) = 'America/Chicago', 'A''s time zone is kept');
do $$ begin
  begin
    perform endpoint from public.push_subs;
    raise exception 'FAIL: the phone address can be read back';
  exception when insufficient_privilege then raise notice 'ok   the phone address and read key are not readable, even by him';
  end;
  begin
    insert into public.push_events (user_id, kind, ref, title) values (auth.uid(), 'test', 'x', 'x');
    raise exception 'FAIL: A wrote an alert row himself';
  exception when insufficient_privilege then raise notice 'ok   a man cannot write alert rows';
  end;
  begin
    perform public.queue_push('bbbbbbbb-0000-0000-0000-000000000002', 'forum', 'x', 'x', 'x', 'index.html', null);
    raise exception 'FAIL: A queued an alert for B';
  exception when insufficient_privilege then raise notice 'ok   a man cannot queue an alert for anyone';
  end;
  begin
    perform public.push_claim();
    raise exception 'FAIL: A ran the sender';
  exception when insufficient_privilege then raise notice 'ok   a man cannot run the sender';
  end;
end $$;
select pg_temp.check(public.push_test(), 'A sends himself a test alert');
select pg_temp.check(not public.push_test(), 'a second test inside a minute is refused');
select pg_temp.check((select count(*) from public.push_events) = 1, 'A sees his test alert');
update public.alert_prefs set watches = true;
select pg_temp.check((select watches from public.alert_prefs), 'A turns on watches');

reset role;
select set_config('t.a_phone', (select id::text from public.push_subs), false);
set role authenticated;
select set_config('request.jwt.claim.sub', 'bbbbbbbb-0000-0000-0000-000000000002', false);
select public.push_subscribe('https://web.push.apple.com/phone-b', encode(sha256('read-key-b'::bytea), 'hex'), 'Not/AZone');
select pg_temp.check((select count(*) from public.push_subs) = 1, 'B sees only his own phone');
select pg_temp.check((select tz from public.alert_prefs) = 'America/Chicago', 'a bad time zone is ignored');
select pg_temp.check((select count(*) from public.push_events) = 0, 'B cannot read A''s alerts');
select pg_temp.check((select count(*) from public.alert_prefs where user_id = 'aaaaaaaa-0000-0000-0000-000000000001') = 0, 'B cannot read A''s alert choices');
with d as (delete from public.push_subs where id = current_setting('t.a_phone')::bigint returning 1) select pg_temp.check((select count(*) from d) = 0, 'B cannot remove A''s phone');
select public.push_unsubscribe('https://fcm.googleapis.com/fcm/send/phone-a');
with u as (update public.alert_prefs set warnings = false where user_id = 'aaaaaaaa-0000-0000-0000-000000000001' returning 1) select pg_temp.check((select count(*) from u) = 0, 'B cannot change A''s alert choices');

-- not signed in: the phone reads its alerts with its own key, and nothing else
reset role;
set role anon;
select set_config('request.jwt.claim.sub', '', false);
select pg_temp.check((select count(*) from public.push_latest('https://fcm.googleapis.com/fcm/send/phone-a', 'wrong-key')) = 0, 'a wrong read key gets nothing');
select pg_temp.check((select count(*) from public.push_latest('https://web.push.apple.com/phone-b', 'read-key-a')) = 0, 'A''s key does not open B''s phone');
select pg_temp.check((select title from public.push_latest('https://fcm.googleapis.com/fcm/send/phone-a', 'read-key-a')) = 'Test alert', 'A''s phone reads its test alert (B''s unsubscribe did nothing)');
select pg_temp.check((select count(*) from public.push_latest('https://fcm.googleapis.com/fcm/send/phone-a', 'read-key-a')) = 0, 'an alert is shown once');
do $$ begin
  begin
    perform count(*) from public.push_events;
    raise exception 'FAIL: a visitor read alerts';
  exception when insufficient_privilege then raise notice 'ok   a visitor cannot read alerts';
  end;
  begin
    perform public.push_test();
    raise exception 'FAIL: a visitor sent a test';
  exception when insufficient_privilege then raise notice 'ok   a visitor cannot send a test';
  end;
end $$;

-- the server: weather, check-ins, the forum, sending
reset role;
set role service_role;
select pg_temp.check(public.push_queue_weather('[{"ref": "urn:oid:1", "kind": "warning", "event": "Tornado Warning", "fips": ["48201", "48157"], "title": "Tornado Warning", "body": "Take shelter now.", "detail": {"event": "Tornado Warning"}},
  {"ref": "urn:oid:2", "kind": "warning", "event": "Flood Warning", "fips": ["40027"], "title": "Flood Warning", "body": "Elsewhere."}]') = 1, 'a warning for his county reaches A only');
select pg_temp.check(public.push_queue_weather('[{"ref": "urn:oid:1", "kind": "warning", "event": "Tornado Warning", "fips": ["48201"], "title": "Tornado Warning", "body": "Update."}]') = 0, 'the same warning is sent once');
select pg_temp.check(public.push_queue_weather('[{"ref": "urn:oid:3", "kind": "watch", "event": "Tornado Watch", "fips": ["48201"], "title": "Tornado Watch", "body": "Be ready."}]') = 1, 'a watch reaches A, who turned watches on');
select pg_temp.check((select url from public.push_events where ref = 'urn:oid:1') = 'alert.html?id=' || (select id from public.push_events where ref = 'urn:oid:1'), 'a weather alert opens its own page');
select pg_temp.check((select detail->>'fips' from public.push_events where ref = 'urn:oid:1') = '48201', 'the alert keeps which county it was for');
select pg_temp.check(public.queue_push('aaaaaaaa-0000-0000-0000-000000000001', 'forum', 'reply:1', 'New reply', 'Thanks for the tip on water.', 'forum.html?t=1', 'bbbbbbbb-0000-0000-0000-000000000002'), 'the forum queues a reply alert for A');
select pg_temp.check(not public.queue_push('aaaaaaaa-0000-0000-0000-000000000001', 'forum', 'reply:1', 'New reply', 'Again.', 'forum.html?t=1', null), 'the same reply alert is queued once');
select pg_temp.check(not public.queue_push('aaaaaaaa-0000-0000-0000-000000000001', 'forum', 'reply:2', 'New reply', 'Mine.', 'forum.html', 'aaaaaaaa-0000-0000-0000-000000000001'), 'no alert for his own reply');
select pg_temp.check(public.queue_push('aaaaaaaa-0000-0000-0000-000000000001', 'forum', 'reply:3', 'New reply', 'x', 'https://evil.example/', null)
  and (select url from public.push_events where ref = 'reply:3') = 'index.html', 'an outside link in an alert becomes the home page');
select pg_temp.check(not public.queue_push('aaaaaaaa-0000-0000-0000-000000000001', 'test', 'reply:4', 'x', 'x', 'index.html', null), 'the server cannot queue a made-up kind');
select pg_temp.check(public.push_queue_checkins('2026-11-25 17:00+00') = 1, 'a check-in reminder when one is due (Wednesday, 11 a.m. his time)');
select pg_temp.check(public.push_queue_checkins('2026-11-25 18:00+00') = 0, 'one reminder a week');
select pg_temp.check(public.push_queue_checkins('2026-11-18 17:00+00') = 0, 'no reminder in a week he already checked in');
select pg_temp.check(public.push_queue_checkins('2026-12-02 08:00+00') = 0, 'no reminder at 2 a.m. his time');
select pg_temp.check((select count(*) from public.push_claim()) = 1, 'the sender wakes A''s one phone');
select pg_temp.check((select count(*) from public.push_claim()) = 0, 'and only once');
select pg_temp.check(public.push_nws_due(), 'the Weather Service is due on the first tick');
select pg_temp.check(not public.push_nws_due(), 'and not again within a few minutes');
reset role;
update public.alert_prefs set forum = false, warnings = false where user_id = 'aaaaaaaa-0000-0000-0000-000000000001';
set role service_role;
select pg_temp.check(not public.queue_push('aaaaaaaa-0000-0000-0000-000000000001', 'forum', 'reply:5', 'New reply', 'x', 'forum.html', null), 'forum alerts off means none are queued');
select pg_temp.check(public.push_queue_weather('[{"ref": "urn:oid:9", "kind": "warning", "event": "Flood Warning", "fips": ["48201"], "title": "Flood Warning", "body": "x"}]') = 0, 'warnings off means none are queued');
reset role;

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
select pg_temp.check((select count(*) from public.push_subs where user_id = 'bbbbbbbb-0000-0000-0000-000000000002') = 0
  and (select count(*) from public.alert_prefs where user_id = 'bbbbbbbb-0000-0000-0000-000000000002') = 0, 'B''s phone and alert choices went with him');
select pg_temp.check((select count(*) from public.push_subs) = 1 and (select count(*) from public.push_events) > 0, 'A''s phone and alerts are untouched');
\echo ALL ROW RULE CHECKS PASS
