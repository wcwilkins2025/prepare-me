# Prepare Me

A free prepping coach. The folder and repo are `prepare-me`. The readiness score and the assessment keep their names inside the app. A man enters his town and answers plain questions about his home and family. Prepare Me looks up the disasters FEMA counts in his county, more likely and less likely. It scores where he stands in ten areas. Then it gives him the next thing to fix, one step at a time, with the free steps first.

No fear, no scare talk, no store names. A plain check of where he stands.

## What it does

- **Accounts.** Each man signs in with a 6-digit code sent to his email (no password, no link). The email has no link because work mail and some phones open every link to check it, which uses up the sign-in. His answers, scores, progress and check-ins are saved in his own rows.
- **The score.** His home page opens with a bold score out of 100 and a score for each area: water, food, sanitation and hygiene, power and heat, medical and first aid, communications, family plan, security and home, skills, and money cushion. Under it are the next one or two things to fix. Only survival steps count. Comfort steps (`comfort: true` in `data/tasks.js`: canning, growing food, drying food, ham radio, backup power, the bigger money cushions and the like) are his own choice: the coach lists them as "Extras, your choice" and they never count in the score.
- **His disasters.** From his town or ZIP, Prepare Me finds his county in the FEMA National Risk Index and sorts 18 hazards into *more likely here* and *less likely here*. His plan covers the more likely ones plus five every home faces: long power outage, house fire, sickness, losing a paycheck, and leaving home fast. He can add a less likely one, or take one off, with one tap. Each disaster shows how ready he is for it.
- **Attacks.** Four that can reach any town are in every plan: a chemical spill or chemical attack, a cyber attack on power, banks or phones, a nuclear or radiation emergency, and a biological attack or outbreak. Their steps follow Ready.gov and the CDC: get inside, stay inside, stay tuned; shelter in place and seal a room; clean off after an exposure; a shelter kit; masks and shots; locking down accounts and freezing credit; a no-phone family plan; and an unplugged backup. He can take any of the four off his plan. The every-home list stays.
- **The assessment.** Town, household, home, and "what you already have". He can retake it any time; every score is kept.
- **The coach.** One step at a time. Every step says who does it, what to do (parts he can check off), when, why it matters, and what done looks like, with links to the source. He can mark a step done, put it off a week, or ask for another. Free steps come first, then paid steps sorted by cost. His whole plan is listed below by area.
- **Weekly check-ins.** Score then and now, the steps done since last time, three quick questions, a plain reply, and a chart of every score over time.
- **How to do it.** Every step has a full how-to: the method, the amounts, tables where numbers line up, mistakes to skip, and the date each fact was checked against its source (government agencies, Extension, nonprofits, medical groups and respected prepping sites). It shows inside the step in the coach, and on `guides.html`, which anyone can read without an account and print.
- **Phone alerts.** He can turn on alerts for his phone on the account page. He gets one when the National Weather Service puts out a warning for his county (watches too, if he picks them), when his weekly check-in is due, and when someone replies to him in the forum. Tapping a weather alert opens the Weather Service's own words and the steps in his plan that fit it, the ones not done first. On iPhone, alerts work once Prepare Me is on the Home Screen (iOS 16.4 or newer).
- **Forum.** Men ask and answer questions. Boards: Start here, one for each of the ten areas, and Disasters. Topics and replies. Each man picks a display name the first time he posts; it is kept in his own row, and no email is ever shown. The house rules sit above the boards. Every post has a Report button. Posts show at once. The moderator hides or restores any post and reads the reports. Every step in the coach has an "Ask about this step" link that opens a new topic with the step's title. Only signed-in men read the forum. A new reply can queue a phone alert to the topic's author (see Reply alerts below).
- **Account.** Phone alerts, download everything as a file, or delete the account and every row.

There are 123 steps (17 of them comfort extras), including survival skills: CPR, heat and cold illness, wounds, an emergency toilet, canning, fire, the 10 essentials, compass, signaling, getting found, a night outdoors, knots, hunter education and fishing; and since 2026-11-26 sanitation (a latrine, trash, pests, cleaning with bleach), cooking over a wood fire, fuel storage, food after a flood, drying food, going back in after a flood or storm, mold, and stress after a disaster; then a plan for anyone older or living with a disability, livestock and horses, where to go if you cannot stay home, a car kit, a clean-air room for wildfire smoke, a long outbreak at home, space weather, work and the commute, a kit each child builds, and farm disaster records. The household and the county decide which ones apply. A man alone in a Miami apartment gets a different plan than a family of five on a well in Moore, Oklahoma.

## Pages

| Page | What it does |
|---|---|
| `index.html` | Signed out: how it works and sign-in. Signed in: the score, next to fix, the ten areas, and his disasters. |
| `start.html` | The assessment: town lookup with a live preview of his disasters, household, home, what he already has. |
| `coach.html` | The next step, in full, and the whole plan by area. `coach.html?task=<id>` opens one step. |
| `plan.html` | The written family plan, from `data/plan.js`: who is in it, who to call, where to meet, where things are, and what to do for each of his disasters. Saves as he types. Prints the plan (blank lines left to fill by hand) and fold-over wallet cards. Signed out: print a blank plan or blank cards. |
| `checkin.html` | The weekly check-in and the history chart. |
| `guides.html` | Survival basics first, then every how-to by area, free to read signed out. `guides.html?step=<id>` is one guide, ready to print. |
| `whats-new.html` | Release notes from `data/releases.js`, newest first. Linked in every footer. |
| `forum.html` | The boards, a board's topics, a topic and its replies, a new topic, and the moderator's reports. `forum.html?board=<id>`, `?topic=<id>`, `?new=1&task=<step id>`, `?reports=1`. |
| `resources.html` | Every source, by area and by disaster, and how the county ratings are read. |
| `account.html` | Phone alerts (on or off for this phone, a test, what to be alerted about, the iPhone steps), sign out, download my data, delete my account. |
| `alert.html` | `alert.html?id=<n>` opens one weather alert and his steps for it. With no id, his alerts from the last 60 days. |
| `privacy.html` | What is kept and who can see it. |

## How it is built

A static site for GitHub Pages, the same pattern as Groundwork and Weight Target. No build step.

- `data/tasks.js`: the areas, the disasters, the questions and every step. Edit steps here.
- `data/releases.js`: the release notes. Add a release at the top each time a change goes live.
- `data/howto.js`: the full how-to for each step, keyed by step id. Every fact comes from the step's sources; `checked` is the date it was checked. No household numbers, since guides are read signed out.
- `data/links.js`: every outside link in one place.
- `data/forum.js`: the forum's boards, house rules and limits. The board ids and limits match `supabase/schema.sql` (a test checks).
- `data/hazards.json` and `data/places.json`: the FEMA county table, and town and ZIP to county. Built by `scripts/build_hazards.py`.
- `data/nws.js`: which of his disasters each National Weather Service warning or watch goes with, and the steps to show for it.
- `js/engine.js`: scores, the county disasters, the next step and the week. No page code, so the tests run it in Node.
- `js/store.js`: reads and writes. Online it talks to Supabase. Opened from `localhost` with no project in `config.js`, it keeps rows in that browser, one person per email, so every page can be checked before a change goes out.
- `js/site.js`: the nav, footer, theme, sign-in gate and loading his state.
- `supabase/schema.sql`: four tables (`profiles`, `assessments`, `progress`, `checkins`), row-level security on each, and `delete_me()`. Then the phone alert tables (`alert_prefs`, `push_subs`, `push_events`, `push_state`) and their functions. Safe to run again.
- `js/alerts.js`, `sw.js`, `manifest.webmanifest` and the icons: the alerts switch, the service worker that shows alerts, and what the Home Screen needs.
- `supabase/functions/push/index.ts`: the sender, a Supabase Edge Function. `supabase/cron.sql` runs it each minute.
- `supabase/schema.sql`: four tables (`profiles`, `assessments`, `progress`, `checkins`), row-level security on each, and `delete_me()`. Then the forum: `profiles.display_name`, `moderators`, `forum_topics`, `forum_replies` and `forum_reports`, their row rules, and the moderator functions `forum_moderate()` and `forum_clear_report()`.

### The forum's rules on the server

- Only signed-in men read the forum. A visitor who is not signed in reads nothing.
- A signed-in man reads every post that is not hidden. He also sees his own hidden posts, marked as hidden.
- A man posts, replies and reports only as himself. He cannot edit, hide or delete a post. He cannot read reports, even his own.
- Before a post goes in, the server sets his display name, the moderator mark and the counts. He cannot set them himself.
- Limits: a title of 5 to 120 letters, a topic up to 4,000, a reply up to 2,000, a report reason up to 300. A display name of 2 to 30 letters or numbers, with no @, unique in any case.
- Rate limit: 3 posts a minute and 30 a day, topics and replies together. 10 reports a day. One report per man per post.
- Moderators are the rows of `moderators`. Only SQL run in the dashboard can add one. A moderator reads reports and hidden posts, and hides or restores any post through `forum_moderate()`. Hiding a post clears its reports.
- Deleting an account removes his posts, with the replies under his topics.

### Reply alerts

When a man replies to someone else's topic, the server calls `public.queue_alert(user, kind, title, body, url)` for the topic's author, with kind `forum_reply`, the replier's display name, the topic title and `forum.html?topic=<id>`. That function belongs to the phone alerts. Until it exists, a reply queues nothing, so the forum works with or without alerts.

Every page loads its CSS and scripts with a version tag (`site.css?v=20261126a`). After changing any of those files, change the tag to a new value in every page (one find-and-replace), so browsers fetch the new code at once instead of using their saved copy for up to ten minutes. A test checks that every page uses the same tag.

### How phone alerts work

The same design as the Community Resilience Network.

1. **Turning on.** The account page asks the browser for a push address and makes a random read key. The key stays in that browser. Prepare Me keeps the address and only a SHA-256 of the key (`push_subscribe()`). Stored addresses must be real browser push services (Google, Apple, Mozilla, Microsoft); the table refuses anything else, so the sender can never be pointed somewhere else.
2. **Something happens.** Each minute pg_cron calls the sender. At most every 150 seconds it reads the active alerts from `api.weather.gov` (one call for the whole country). It keeps every warning and watch with a county code, and leaves out tests, cancels and marine areas. `push_queue_weather()` matches the county codes to the county in each man's assessment and records an alert for each man with a phone, once per warning (updates keep the first message's id). `push_queue_checkins()` records a check-in reminder once a week, from 10 a.m. his time, while one is due (the same rule as `engine.checkinDue`). The forum's reply trigger calls `queue_alert()`, which passes to `queue_push()`.
3. **Sending.** The sender sends each phone an empty push signed with the VAPID key. Apple, Google and Mozilla only learn that something happened.
4. **Showing.** The phone's service worker wakes and calls `push_latest()` with its address and read key. It gets back the alerts it has not shown, and shows them. Tapping one opens `alert.html`, the check-in or the forum.

A signed-in man can read his own alerts and choices, and remove his own phones. Only the server and database triggers can write alerts. `queue_push(p_user, p_kind, p_ref, p_title, p_body, p_url, p_from)` is the one way in for other server-side code: the same `(man, kind, ref)` is queued once, `p_from` is never alerted about his own post, the link must be a page in the app, and his choices are respected.

`config.js` holds the Supabase project URL and publishable key, which are made to be public. The row rules are what keep each man's rows his own. The secret key never goes in this repo.

### How "more likely" is decided

FEMA's National Risk Index (county layer, December 2025) gives each hazard a yearly frequency and a risk rating from very low to very high. Prepare Me ranks the frequency against every US county. A hazard is **more likely** when it happens more often than in at least half of US counties *and* FEMA rates it moderate or higher. Anything else FEMA counts there is **less likely**.

A very high rating alone does not count. FEMA's rating includes the homes and people in harm's way, so Miami-Dade rates very high for cold waves that rarely come. The tests check known places: tornado in Moore, hurricane and flood in Houston and Miami, earthquake and wildfire in Fresno, earthquake in Seattle, no winter worry in Miami.

Climate comes from the county too. Hard winters mean a January low of 25°F or below, or a likely winter hazard. Hot summers mean a mean yearly temperature of 57°F or above, or likely extreme heat. These turn the heat and cooling steps on.

## Running it

```
python -m http.server 8799 --bind 127.0.0.1
```

Open http://localhost:8799. With `config.js` empty it runs as the local preview: any email signs in, and rows stay in that browser. The forum there is one forum shared by every local email, and `moderator@example.com` is the moderator, so the moderator tools can be checked.

## Checks

```
node tests/run_tests.js
```
Run it for the count. They cover the step library (every step has who, what, when, why, done and links that exist), the how-to guides (each belongs to a step, has parts, and cites links that exist), calm wording with no store names, the household math, the county disasters for known places, the attacks (on by default, each can come off, their steps follow), town and ZIP search, scoring, next-step order (free first), put-off steps, the week, the local store keeping two men apart, the forum (names, boards, limits, reports, hiding, the rate limit, deleting) in the local store, and phone alerts: which Weather Service products become alerts and which steps each opens, county codes, the push-service list, the VAPID signature, and that the pages, service worker, schema and cron job agree.

```
node scripts/check_links.js
```
Loads every outside link and fails on any that is dead or serves an error page. The Red Cross class page refuses scripts; it is listed as opened by hand in a browser, with the date.

```
wsl -e sh supabase/tests/run_rls.sh
```
Runs the real `schema.sql` (twice, to prove it is safe to re-run) on a throwaway Postgres in `/tmp` with a small Supabase stand-in. The schema runs as a plain owner role, not a superuser, as in the Supabase dashboard. Then it checks the row rules with two men. A man reads only his own rows. He cannot change, delete or write rows as another man. A visitor who is not signed in reads nothing. `delete_me()` removes only the man who calls it, with his rows. For the forum it checks a member, a poster and a moderator: reading, posting only as himself, the server setting names and marks, the limits, unique names, reports, hiding and restoring, the moderator table closed to the app, the rate limit, renaming, the reply alert, and deleting. 57 checks.

To rebuild the county tables from the Land Finder's downloads:
```
python scripts/build_hazards.py <path to the Land Finder project folder>
```

## Turning on phone alerts (Wiley does these)

The code is ready. Each step is in the Supabase dashboard for project `fdsiiklmensulmovfmoa`, or on your own PC.

1. **Run the schema.** SQL Editor > New query > paste all of `supabase/schema.sql` > Run. It adds the alert tables and leaves the rest as it is.
2. **Make the alert key pair.** On your PC, in the repo folder: `node scripts/make_vapid.js`. It prints two values and saves nothing.
3. **Add two secrets.** Edge Functions > Secrets > Add: `VAPID_PUBLIC_KEY` = the first value, `VAPID_PRIVATE_JWK` = the second (the whole `{...}` line). Paste them yourself. Keep no other copy of the private one.
4. **Deploy the sender.** Edge Functions > Deploy a new function > Via Editor. Name it `push`. Replace the sample with all of `supabase/functions/push/index.ts`. Deploy. Then open the function's Details and turn **Enforce JWT verification** off, and save. (Phones and the cron job call it without a sign-in; it only does work that is due anyway.)
5. **Check it.** Open `https://fdsiiklmensulmovfmoa.supabase.co/functions/v1/push` in a browser. It should say `"ready":true` and show the public key.
6. **Turn on the timer.** Database > Extensions: turn on `pg_cron` and `pg_net`. Then SQL Editor: paste and run `supabase/cron.sql`.
7. **Try it.** Merge and publish the site. On your phone, open the account page, turn alerts on, and press Send a test alert. On iPhone, add Prepare Me to the Home Screen first and open it from that icon.

To see that the timer runs: `select * from cron.job_run_details order by start_time desc limit 5;` To stop it: `select cron.unschedule('prepare-me-push');`

## Going live (not done yet; each needs Wiley's yes)

1. **Supabase.** Create a free project under a personal email, never a work account. In the SQL editor, run `supabase/schema.sql`. Under Authentication > URL Configuration, set the site URL to the live address and add it to the redirect URLs. Put the project URL and publishable key in `config.js`.
2. **GitHub.** The repo `wcwilkins2025/prepare-me`, under `wcwilkins2025` only. Set the local `user.email` to `243682397+wcwilkins2025@users.noreply.github.com` before any commit. Turn on Pages from `main`.
3. **Domain (optional).** Add a `CNAME` file and the DNS records, as Groundwork did.
4. Before each push: run `node tests/run_tests.js` and `node scripts/check_links.js`.

## Turning the forum on (each step needs Wiley's yes)

1. In the Supabase SQL editor for this project, run the whole `supabase/schema.sql` again. It is safe to re-run. It keeps every row and adds the forum.
2. Make Wiley the moderator. Sign in to the site once with his own email, then in the SQL editor run this, with his email in place of the placeholder:
   ```sql
   insert into public.moderators (user_id)
   select id from auth.users where email = 'HIS-EMAIL-HERE'
   on conflict do nothing;
   select count(*) from public.moderators;  -- 1
   ```
3. In Table Editor, check that `moderators`, `forum_topics`, `forum_replies` and `forum_reports` show row-level security as on.
4. No sign-in or URL settings change.
5. After the push: open the Forum, pick a display name, and post a welcome topic in Start here.

To remove a moderator later: `delete from public.moderators where user_id = (select id from auth.users where email = '...');`

## Rules for this project

- Plain short sentences. Calm. No fear, no scare talk, no store or brand names, no shopping lists.
- Never mention how the app was made.
- Nothing that identifies a user goes public. The app keeps no name, address or phone number.
- The app never posts anywhere outside itself. The forum is inside the app and only signed-in men read it.
- No references to any group or community. It stands on its own.
- Free steps first. Paid steps sorted by cost, with an honest "about" price.
- Only authoritative free sources: Ready.gov, the American Red Cross, FEMA, the CDC, the USDA, the National Weather Service, ARRL, the FCC, the FDIC, the FTC, the FBI, Stop the Bleed. Free tools where they fit: Radio Elmer, Land Finder, Groundwork.

This is a plain checklist, not medical, legal or money advice. In an emergency, call 911.
