# Prepare Me

A free prepping coach. The folder and repo are `prepare-me`. The readiness score and the assessment keep their names inside the app. A man enters his town and answers plain questions about his home and family. Prepare Me looks up the disasters FEMA counts in his county, more likely and less likely. It scores where he stands in nine areas. Then it gives him the next thing to fix, one step at a time, with the free steps first.

No fear, no scare talk, no store names. A plain check of where he stands.

## What it does

- **Accounts.** Each man signs in with a 6-digit code sent to his email (no password, no link). The email has no link because work mail and some phones open every link to check it, which uses up the sign-in. His answers, scores, progress and check-ins are saved in his own rows.
- **The score.** His home page opens with a bold score out of 100 and a score for each area: water, food, power and heat, medical and first aid, communications, family plan, security and home, skills, and money cushion. Under it are the next one or two things to fix.
- **His disasters.** From his town or ZIP, Prepare Me finds his county in the FEMA National Risk Index and sorts 18 hazards into *more likely here* and *less likely here*. His plan covers the more likely ones plus five every home faces: long power outage, house fire, sickness, losing a paycheck, and leaving home fast. He can add a less likely one, or take one off, with one tap. Each disaster shows how ready he is for it.
- **Attacks.** Four that can reach any town are in every plan: a chemical spill or chemical attack, a cyber attack on power, banks or phones, a nuclear or radiation emergency, and a biological attack or outbreak. Their steps follow Ready.gov and the CDC: get inside, stay inside, stay tuned; shelter in place and seal a room; clean off after an exposure; a shelter kit; masks and shots; locking down accounts and freezing credit; a no-phone family plan; and an unplugged backup. He can take any of the four off his plan. The every-home list stays.
- **The assessment.** Town, household, home, and "what you already have". He can retake it any time; every score is kept.
- **The coach.** One step at a time. Every step says who does it, what to do (parts he can check off), when, why it matters, and what done looks like, with links to the source. He can mark a step done, put it off a week, or ask for another. Free steps come first, then paid steps sorted by cost. His whole plan is listed below by area.
- **Weekly check-ins.** Score then and now, the steps done since last time, three quick questions, a plain reply, and a chart of every score over time.
- **Forum.** Men ask and answer questions. Boards: Start here, one for each of the nine areas, and Disasters. Topics and replies. Each man picks a display name the first time he posts; it is kept in his own row, and no email is ever shown. The house rules sit above the boards. Every post has a Report button. Posts show at once. The moderator hides or restores any post and reads the reports. Every step in the coach has an "Ask about this step" link that opens a new topic with the step's title. Only signed-in men read the forum. A new reply can queue a phone alert to the topic's author (see Reply alerts below).
- **Account.** Download everything as a file, or delete the account and every row.

There are 87 steps. The household and the county decide which ones apply. A man alone in a Miami apartment gets a different plan than a family of five on a well in Moore, Oklahoma.

## Pages

| Page | What it does |
|---|---|
| `index.html` | Signed out: how it works and sign-in. Signed in: the score, next to fix, the nine areas, and his disasters. |
| `start.html` | The assessment: town lookup with a live preview of his disasters, household, home, what he already has. |
| `coach.html` | The next step, in full, and the whole plan by area. `coach.html?task=<id>` opens one step. |
| `checkin.html` | The weekly check-in and the history chart. |
| `forum.html` | The boards, a board's topics, a topic and its replies, a new topic, and the moderator's reports. `forum.html?board=<id>`, `?topic=<id>`, `?new=1&task=<step id>`, `?reports=1`. |
| `resources.html` | Every source, by area and by disaster, and how the county ratings are read. |
| `account.html` | Sign out, download my data, delete my account. |
| `privacy.html` | What is kept and who can see it. |

## How it is built

A static site for GitHub Pages, the same pattern as Groundwork and Weight Target. No build step.

- `data/tasks.js`: the areas, the disasters, the questions and every step. Edit steps here.
- `data/links.js`: every outside link in one place.
- `data/forum.js`: the forum's boards, house rules and limits. The board ids and limits match `supabase/schema.sql` (a test checks).
- `data/hazards.json` and `data/places.json`: the FEMA county table, and town and ZIP to county. Built by `scripts/build_hazards.py`.
- `js/engine.js`: scores, the county disasters, the next step and the week. No page code, so the tests run it in Node.
- `js/store.js`: reads and writes. Online it talks to Supabase. Opened from `localhost` with no project in `config.js`, it keeps rows in that browser, one person per email, so every page can be checked before a change goes out.
- `js/site.js`: the nav, footer, theme, sign-in gate and loading his state.
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

Every page loads its CSS and scripts with a version tag (`site.css?v=20261117b`). After changing any of those files, change the tag to a new value in all seven pages (one find-and-replace), so browsers fetch the new code at once instead of using their saved copy for up to ten minutes. A test checks that every page uses the same tag.

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
1,377 checks. They cover the step library (every step has who, what, when, why, done and links that exist), calm wording with no store names, the household math, the county disasters for known places, the attacks (on by default, each can come off, their steps follow), town and ZIP search, scoring, next-step order (free first), put-off steps, the week, the local store keeping two men apart, and the forum (boards and limits match the server, the house rules, the nav and coach links, and in the local store: display names, posting, reports, hiding, the rate limit and deleting).

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
