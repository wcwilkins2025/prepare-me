-- Row rule tests: two men, A and B. Each must see and change only his own rows. Visitors who are not signed in get nothing.
-- Run by supabase/tests/run_rls.sh after stub_supabase.sql and schema.sql. Any failed check stops with an error.
\set ON_ERROR_STOP on
insert into auth.users values ('aaaaaaaa-0000-0000-0000-000000000001', 'a@example.com'), ('bbbbbbbb-0000-0000-0000-000000000002', 'b@example.com');

create or replace function pg_temp.check(cond boolean, msg text) returns void language plpgsql as $$
begin if not cond then raise exception 'FAIL: %', msg; end if; raise notice 'ok   %', msg; end $$;

select pg_temp.check((select bool_and(tableowner = 'schema_owner') from pg_tables where schemaname = 'public'), 'the tables belong to a plain role, as on Supabase');

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
    perform public.queue_alert('bbbbbbbb-0000-0000-0000-000000000002', 'forum_reply', 'x', 'x', 'forum.html');
    raise exception 'FAIL: A used the forum hook';
  exception when insufficient_privilege then raise notice 'ok   a man cannot use the forum hook';
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
select public.queue_alert('aaaaaaaa-0000-0000-0000-000000000001', 'forum_reply', 'New reply', 'Sam replied to "Water"', 'forum.html?topic=7');
select pg_temp.check((select count(*) from public.push_events where kind = 'forum' and url = 'forum.html?topic=7') = 1, 'the forum trigger hook queues a reply alert');
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

-- =====================================================================================================================
-- ---------- the forum: A is a member, C is the moderator, D posts. ----------
reset role;
insert into auth.users values ('cccccccc-0000-0000-0000-000000000003', 'c@example.com'), ('dddddddd-0000-0000-0000-000000000004', 'd@example.com');
insert into public.moderators (user_id) values ('cccccccc-0000-0000-0000-000000000003');
update public.profiles set display_name = 'Al' where user_id = 'aaaaaaaa-0000-0000-0000-000000000001';
-- a stand-in for the phone-alert queue, to prove a reply calls queue_alert for the topic's author with the agreed
-- arguments. (The real queue_alert, from the alerts section, is tested above with the server checks.) This is the last
-- part of the run, so replacing it here changes nothing else.
create table public.test_alerts (user_id uuid, kind text, title text, body text, url text);
create or replace function public.queue_alert(p_user uuid, p_kind text, p_title text, p_body text, p_url text) returns void
  language sql security definer as $$ insert into public.test_alerts values (p_user, p_kind, p_title, p_body, p_url) $$;
grant select on public.test_alerts to authenticated;
grant insert on public.test_alerts to schema_owner;  -- queue_alert keeps its owner, the schema owner

set role authenticated;
select set_config('request.jwt.claim.sub', 'dddddddd-0000-0000-0000-000000000004', false);
do $$ begin
  begin
    insert into public.forum_topics (board, title, body) values ('water', 'How much water?', 'For four people.');
    raise exception 'FAIL: posted with no display name';
  exception when raise_exception then raise notice 'ok   no post before a display name';
  end;
end $$;
insert into public.profiles (display_name) values ('Dan B');
do $$ begin
  begin
    update public.profiles set display_name = 'dan@example.com';
    raise exception 'FAIL: an email became a display name';
  exception when check_violation then raise notice 'ok   an email cannot be a display name';
  end;
end $$;
-- he tries to set the name, the moderator mark and the hidden flag himself; the trigger sets them
insert into public.forum_topics (board, title, body, author_name, by_moderator, hidden, reply_count)
  values ('water', 'How much water for four?', '  We are four. How many gallons?  ', 'Wiley', true, true, 99);
select pg_temp.check((select author_name = 'Dan B' and not by_moderator and not hidden and reply_count = 0 and body = 'We are four. How many gallons?'
  from public.forum_topics), 'a post carries his own name, and he cannot set the mark, hidden or counts');
do $$ begin
  begin
    insert into public.forum_topics (user_id, board, title, body) values ('aaaaaaaa-0000-0000-0000-000000000001', 'food', 'Posting as A', 'Not me.');
    raise exception 'FAIL: D posted as A';
  exception when insufficient_privilege then raise notice 'ok   D cannot post as another man';
  end;
  begin
    insert into public.forum_topics (board, title, body) values ('water', 'Hi', 'Too short a title.');
    raise exception 'FAIL: a 2-letter title got in';
  exception when check_violation then raise notice 'ok   title too short refused';
  end;
  begin
    insert into public.forum_topics (board, title, body) values ('water', 'A long body', repeat('x', 4001));
    raise exception 'FAIL: a 4001-letter body got in';
  exception when check_violation then raise notice 'ok   body too long refused';
  end;
  begin
    insert into public.forum_topics (board, title, body) values ('guns', 'Not a board', 'No.');
    raise exception 'FAIL: an unknown board got in';
  exception when check_violation then raise notice 'ok   unknown board refused';
  end;
end $$;

-- ---------- A reads it and replies; the reply queues an alert to D ----------
select set_config('request.jwt.claim.sub', 'aaaaaaaa-0000-0000-0000-000000000001', false);
do $$ begin
  begin
    update public.profiles set display_name = 'dan b';
    raise exception 'FAIL: two men share a name';
  exception when unique_violation then raise notice 'ok   display names are unique, any case';
  end;
end $$;
select pg_temp.check((select count(*) from public.forum_topics) = 1, 'a signed-in man reads a post that is not hidden');
insert into public.forum_replies (topic_id, body) select id, 'One gallon a person a day.' from public.forum_topics;
select pg_temp.check((select reply_count from public.forum_topics) = 1, 'the reply is counted');
select pg_temp.check((select count(*) from public.test_alerts where user_id = 'dddddddd-0000-0000-0000-000000000004' and kind = 'forum_reply'
  and body like 'Al replied to "How much water for four?"' and url like 'forum.html?topic=%') = 1, 'a reply queues an alert to the topic''s author');
select pg_temp.check((select count(*) from public.test_alerts where body like '%@%') = 0, 'the alert holds no email');
do $$ begin
  begin
    update public.forum_topics set title = 'Changed by A';
    raise exception 'FAIL: A changed D''s topic';
  exception when insufficient_privilege then raise notice 'ok   A cannot change a post';
  end;
  begin
    delete from public.forum_replies;
    raise exception 'FAIL: A deleted a reply';
  exception when insufficient_privilege then raise notice 'ok   no one deletes posts from the app';
  end;
  begin
    perform public.forum_moderate('topic', (select id from public.forum_topics), true);
    raise exception 'FAIL: A hid a post';
  exception when insufficient_privilege then raise notice 'ok   a member cannot hide a post';
  end;
  begin
    perform count(*) from public.moderators;
    raise exception 'FAIL: A read the moderators';
  exception when insufficient_privilege then raise notice 'ok   a member cannot read the moderators';
  end;
  begin
    insert into public.moderators (user_id) values ('aaaaaaaa-0000-0000-0000-000000000001');
    raise exception 'FAIL: A made himself a moderator';
  exception when insufficient_privilege then raise notice 'ok   a member cannot make himself a moderator';
  end;
end $$;
select pg_temp.check(not public.forum_is_moderator(), 'A is not a moderator');
insert into public.forum_reports (topic_id, reason) select id, 'selling' from public.forum_topics;
do $$ begin
  begin
    insert into public.forum_reports (topic_id, reason) select id, 'again' from public.forum_topics;
    raise exception 'FAIL: a post was reported twice by one man';
  exception when unique_violation then raise notice 'ok   one report per man per post';
  end;
end $$;
select pg_temp.check((select count(*) from public.forum_reports) = 0, 'a member cannot read reports, even his own');

-- D replies to his own topic: no alert to himself
select set_config('request.jwt.claim.sub', 'dddddddd-0000-0000-0000-000000000004', false);
insert into public.forum_replies (topic_id, body) select id, 'Thanks.' from public.forum_topics;
select pg_temp.check((select count(*) from public.test_alerts) = 1, 'no alert for replying to his own topic');

-- ---------- not signed in: nothing ----------
reset role;
set role anon;
select set_config('request.jwt.claim.sub', '', false);
do $$ begin
  begin
    perform count(*) from public.forum_topics;
    raise exception 'FAIL: a visitor read the forum';
  exception when insufficient_privilege then raise notice 'ok   a visitor cannot read the forum';
  end;
end $$;

-- ---------- C, the moderator: reads reports, hides and restores ----------
reset role;
set role authenticated;
select set_config('request.jwt.claim.sub', 'cccccccc-0000-0000-0000-000000000003', false);
select pg_temp.check(public.forum_is_moderator(), 'C is a moderator');
select pg_temp.check((select count(*) from public.forum_reports where resolved_at is null) = 1, 'the moderator reads the report');
select public.forum_moderate('topic', (select id from public.forum_topics), true);
select pg_temp.check((select count(*) from public.forum_reports where resolved_at is null) = 0, 'hiding a post clears its reports');
select pg_temp.check((select count(*) from public.forum_topics where hidden) = 1, 'the moderator still sees the hidden topic');

select set_config('request.jwt.claim.sub', 'aaaaaaaa-0000-0000-0000-000000000001', false);
select pg_temp.check((select count(*) from public.forum_topics) = 0, 'a hidden topic is gone for other men');
select pg_temp.check((select count(*) from public.forum_replies) = 0, 'and so are its replies');
reset role;
create temp table hid as select id from public.forum_topics;
grant select on hid to authenticated;
set role authenticated;
do $$ begin
  begin
    insert into public.forum_replies (topic_id, body) select id, 'Still here?' from hid;
    raise exception 'FAIL: replied to a hidden topic';
  exception when insufficient_privilege then raise notice 'ok   no replies to a hidden topic';
  end;
end $$;
select set_config('request.jwt.claim.sub', 'dddddddd-0000-0000-0000-000000000004', false);
select pg_temp.check((select count(*) from public.forum_topics where hidden) = 1, 'the author still sees his hidden topic');

select set_config('request.jwt.claim.sub', 'cccccccc-0000-0000-0000-000000000003', false);
select public.forum_moderate('topic', (select id from public.forum_topics), false);
select public.forum_moderate('reply', (select min(id) from public.forum_replies), true);
select set_config('request.jwt.claim.sub', 'aaaaaaaa-0000-0000-0000-000000000001', false);
select pg_temp.check((select count(*) from public.forum_topics) = 1, 'a restored topic shows again');
select pg_temp.check((select count(*) from public.forum_replies where hidden) = 1, 'A still sees his own hidden reply');
select set_config('request.jwt.claim.sub', 'dddddddd-0000-0000-0000-000000000004', false);
select pg_temp.check((select count(*) from public.forum_replies) = 1, 'for other men a hidden reply is gone, the other shows');
select pg_temp.check((select reply_count from public.forum_topics) = 1, 'the count leaves out the hidden reply');

-- the moderator's own post carries the moderator mark
select set_config('request.jwt.claim.sub', 'cccccccc-0000-0000-0000-000000000003', false);
insert into public.profiles (display_name) values ('Moderator W');
insert into public.forum_topics (board, title, body) values ('start', 'Welcome to the forum', 'Ask anything.');
select pg_temp.check((select by_moderator from public.forum_topics where board = 'start'), 'a moderator''s post carries the mark');

-- ---------- the rate limit and a new name ----------
select set_config('request.jwt.claim.sub', 'dddddddd-0000-0000-0000-000000000004', false);
-- D has one topic and one reply this minute; one more is the third
insert into public.forum_topics (board, title, body) values ('food', 'Rice or beans first?', 'Which keeps longer?');
do $$ begin
  begin
    insert into public.forum_topics (board, title, body) values ('food', 'One more question', 'Too fast.');
    raise exception 'FAIL: a fourth post in a minute got in';
  exception when raise_exception then raise notice 'ok   3 posts a minute, then wait';
  end;
end $$;
update public.profiles set display_name = 'Dan Baker';
select pg_temp.check((select count(*) from public.forum_topics where author_name = 'Dan Baker') = 2
  and (select count(*) from public.forum_replies where author_name = 'Dan Baker') = 1, 'a new name shows on his posts');

-- ---------- delete_me takes his posts with him ----------
select public.delete_me();
reset role;
select pg_temp.check((select count(*) from public.forum_topics where user_id = 'dddddddd-0000-0000-0000-000000000004') = 0, 'delete_me removes his posts');
select pg_temp.check((select count(*) from public.forum_topics) = 1, 'the moderator''s post stays');
\echo ALL ROW RULE CHECKS PASS
