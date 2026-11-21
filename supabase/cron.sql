-- Prepare Me phone alerts: run the sender (supabase/functions/push) once a minute.
-- Run once in the SQL editor AFTER the push function is deployed and the pg_cron and pg_net extensions are on
-- (Database > Extensions). Safe to run again: it replaces the job of the same name.
-- No key is needed: the sender only does work that is due anyway and limits how often it asks the Weather Service.
select cron.unschedule('prepare-me-push') where exists (select 1 from cron.job where jobname = 'prepare-me-push');
select cron.schedule('prepare-me-push', '* * * * *', $$
  select net.http_post(
    url := 'https://fdsiiklmensulmovfmoa.supabase.co/functions/v1/push',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{"action": "tick"}'::jsonb,
    timeout_milliseconds := 30000
  );
$$);
-- To check it: select * from cron.job_run_details order by start_time desc limit 5;
--              select status_code, content from net._http_response order by created desc limit 5;
-- To stop it:  select cron.unschedule('prepare-me-push');
