/* Prepare Me tests: node tests/run_tests.js
   The step library, the county disasters, the score, the next step, the week, and the local store keeping two men apart. */
'use strict';
var fs = require('fs'), path = require('path');
var root = path.join(__dirname, '..');
require(path.join(root, 'data/links.js'));
require(path.join(root, 'data/tasks.js'));
require(path.join(root, 'js/engine.js'));
var RD = globalThis.RD, E = RD.engine;

var pass = 0, fail = 0;
function ok(cond, msg) { if (cond) pass++; else { fail++; console.log('FAIL ' + msg); } }
function eq(a, b, msg) { ok(JSON.stringify(a) === JSON.stringify(b), msg + ' (got ' + JSON.stringify(a) + ', want ' + JSON.stringify(b) + ')'); }

/* ---------- the step library ---------- */
var areaIds = RD.AREAS.map(function (a) { return a.id; });
var hzIds = RD.HAZARDS.map(function (h) { return h.id; });
var NEEDS = ['household', 'kids', 'babies', 'pets', 'babiesOrPets', 'seniors', 'meds', 'device', 'well', 'notRv', 'notApartment', 'mobile', 'vehicle', 'cold', 'hot'];
var ids = {};
RD.TASKS.forEach(function (t) {
  ok(!ids[t.id], 'unique id ' + t.id); ids[t.id] = 1;
  ok(areaIds.indexOf(t.area) >= 0, t.id + ' area');
  ok(t.cost >= 0 && t.cost <= 4, t.id + ' cost');
  ok(t.rank >= 1 && t.weight >= 1, t.id + ' rank and weight');
  ['title', 'have', 'who', 'when', 'why', 'done'].forEach(function (k) { ok(typeof t[k] === 'string' && t[k].length > 3, t.id + ' has ' + k); });
  ok(Array.isArray(t.steps) && t.steps.length >= 2 && t.steps.length <= 20, t.id + ' has 2 to 20 parts');
  ok(t.links.length >= 1 && t.links.every(function (k) { return RD.LINKS[k]; }), t.id + ' links exist');
  ok(t.hz.length && t.hz.every(function (h) { return h === 'all' || hzIds.indexOf(h) >= 0; }), t.id + ' disasters valid');
  (t.need || []).forEach(function (n) { ok(NEEDS.indexOf(n) >= 0 || (n.slice(0, 3) === 'hz:' && hzIds.indexOf(n.slice(3)) >= 0), t.id + ' need ' + n); });
  if (t.cost > 0) ok(!!t.costNote, t.id + ' paid step says about what it costs');
});
RD.TASKS.forEach(function (t) { if (t.after) ok(!!ids[t.after], t.id + ' after ' + t.after); });
RD.HAZARDS.forEach(function (h) {
  ok(!!RD.LINKS[h.link], h.id + ' has a link');
  if (!h.always) ok(RD.TASKS.some(function (t) { return (t.need || []).indexOf('hz:' + h.id) >= 0 || (h.id === 'heat' && (t.need || []).indexOf('hot') >= 0); }), h.id + ' has its own step');
});
RD.AREAS.forEach(function (a) { ok(RD.TASKS.filter(function (t) { return t.area === a.id && t.cost === 0; }).length >= 2, a.name + ' has free steps'); });

/* calm words, no stores, nothing about how it was made. The word list is kept encoded so the words do not show up in the repo. */
var words = fs.readFileSync(path.join(root, 'data/tasks.js'), 'utf8') + fs.readdirSync(root).filter(function (f) { return /\.(html|js|css|md)$/.test(f); }).map(function (f) { return fs.readFileSync(path.join(root, f), 'utf8'); }).join('\n') +
  ['js/engine.js', 'js/site.js', 'js/store.js', 'js/alerts.js', 'data/links.js', 'data/nws.js', 'supabase/functions/push/index.ts', 'supabase/schema.sql'].map(function (f) { return fs.readFileSync(path.join(root, f), 'utf8'); }).join('\n');
var BANNED = Buffer.from('XGJBSVxifGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlfFxiZG9vbXxhcG9jYWx5cHxcYlNIVEZcYnxjb2xsYXBzZSBvZnxlbmQgb2YgdGhlIHdvcmxkfFxicGFuaWNcYnxhbWF6b258d2FsbWFydHxob21lIGRlcG90fGNvc3Rjb3xsb3dlJ3N8aGFyYm9yIGZyZWlnaHR8YmFzcyBwcm98Y2hhdGdwdHxjbGF1ZGV8b3BlbmFpfGdwdC0=', 'base64').toString().split('|');
/* no group or community names anywhere in the app or README (also encoded) */
var everything = words + fs.readFileSync(path.join(root, 'README.md'), 'utf8') + fs.readFileSync(path.join(root, 'scripts/build_hazards.py'), 'utf8');
Buffer.from('YnJvdGhlcmhvb2R8XGJza29vbFxifG5vYm9keSBpcyBjb21pbmd8cHJvZHVjZVwuIHByb3ZpZGU=', 'base64').toString().split('|')
  .forEach(function (w, i) { ok(!new RegExp(w, 'i').test(everything), 'group reference ' + (i + 1) + ' not used'); });
BANNED.forEach(function (w, i) { var re = new RegExp(w, /[A-Z]{2}/.test(w) ? '' : 'i'); ok(!re.test(words), 'banned word ' + (i + 1) + ' not used'); });

/* ---------- the household ---------- */
var ctx = E.context({ adults: 2, kids: 2, babies: 1, pets: 1, water: 'well', home: 'house' });
eq([ctx.people, ctx.gal3, ctx.gal14], [5, 15, 70], 'five people need 15 and 70 gallons');
eq(E.fill('{gal3} gallons for {people}{petsLine}', ctx), '15 gallons for 5 people, plus extra for the pet', 'text fills in');
ok(ctx.flags.well && ctx.flags.kids && ctx.flags.babiesOrPets, 'flags from answers');
var solo = E.context({ adults: 0 });
eq(solo.people, 1, 'at least one person');
ok(E.tasksFor(solo).every(function (t) { return t.id !== 'skill-teach' && t.id !== 'plan-kids' && t.id !== 'water-well'; }), 'a man alone gets no family-only or well steps');
ok(E.tasksFor(ctx).some(function (t) { return t.id === 'water-well'; }), 'well step for a well');

/* ---------- the county disasters ---------- */
var H = JSON.parse(fs.readFileSync(path.join(root, 'data/hazards.json'), 'utf8'));
var P = JSON.parse(fs.readFileSync(path.join(root, 'data/places.json'), 'utf8'));
ok(Object.keys(H.counties).length > 3000, 'every county');
ok(H.version === 'December 2025', 'NRI December 2025');
function tiers(fips) { var o = {}; E.countyHazards(E.countyFrom(H, fips)).forEach(function (h) { o[h.id] = h.tier; }); return o; }
var moore = tiers('40027'), fresno = tiers('06019'), harris = tiers('48201'), miami = tiers('12086'), king = tiers('53033');
eq(moore.tornado, 'likely', 'tornado likely in Moore, OK');
eq(moore.hurricane === 'likely', false, 'no hurricane likely in Moore');
eq(fresno.earthquake, 'likely', 'earthquake likely in Fresno');
eq(fresno.wildfire, 'likely', 'wildfire likely in Fresno');
eq(fresno.volcano, 'less', 'volcano less likely in Fresno');
eq(harris.hurricane, 'likely', 'hurricane likely in Houston');
eq(harris.flood, 'likely', 'flood likely in Houston');
ok(harris.earthquake !== 'likely', 'earthquake not likely in Houston');
eq(miami.hurricane, 'likely', 'hurricane likely in Miami');
ok(miami.winter !== 'likely' && miami.avalanche === 'none', 'no winter or avalanche worry in Miami');
eq(king.earthquake, 'likely', 'earthquake likely in Seattle');
var mooreCtx = E.context({ adults: 1, county: E.countyFrom(H, '40027') });
ok(mooreCtx.flags['hz:tornado'] && E.tasksFor(mooreCtx).some(function (t) { return t.id === 'hz-tornado'; }), 'Moore plan has the tornado step');
ok(!E.tasksFor(mooreCtx).some(function (t) { return t.id === 'hz-tsunami'; }), 'Moore plan has no tsunami step');
var added = E.context({ adults: 1, county: E.countyFrom(H, '40027'), hz_add: ['earthquake'], hz_drop: ['tornado', 'fire'] });
ok(added.hazards.earthquake && !added.hazards.tornado && added.hazards.fire, 'add and take off disasters; every-home ones stay');

/* attacks: on for everyone, each can come off, and their steps follow */
function stepIds(c) { return E.tasksFor(c).map(function (t) { return t.id; }); }
var base = E.context({ adults: 1 });
ok(['cyber', 'nuclear', 'bio', 'chemical'].every(function (h) { return base.hazards[h]; }), 'attacks are on by default');
ok(['att-nuclear', 'att-clean', 'att-kit', 'att-bio', 'att-cyber-lock', 'att-cyber-offline', 'att-cyber-backup', 'hz-chemical'].every(function (id) { return stepIds(base).indexOf(id) >= 0; }), 'every attack step is in a default plan');
var noNuke = E.context({ adults: 1, hz_drop: ['nuclear'] });
ok(!noNuke.hazards.nuclear && stepIds(noNuke).indexOf('att-nuclear') < 0 && stepIds(noNuke).indexOf('att-clean') >= 0, 'taking off nuclear drops its step; the clean-up step stays for chemical and germs');
var noAttacks = E.context({ adults: 1, hz_drop: ['nuclear', 'chemical', 'bio', 'cyber'] });
ok(['att-nuclear', 'att-clean', 'att-kit', 'att-bio', 'att-cyber-lock', 'hz-chemical'].every(function (id) { return stepIds(noAttacks).indexOf(id) < 0; }), 'taking off every attack drops every attack step');
ok(E.context({ adults: 1, hz_drop: ['fire', 'outage'] }).hazards.fire, 'the every-home list cannot be taken off');
var sNo = E.scores(noAttacks, { have: [], progress: {} }), sYes = E.scores(base, { have: [], progress: {} });
ok(sYes.total > sNo.total && sYes.hazards.nuclear === 0, 'attacks add steps and a readiness number');
ok(E.nextSteps(base, { have: [], progress: {} })[0].cost === 0, 'attack steps do not push free steps aside');
ok(mooreCtx.flags.cold && mooreCtx.flags.hot, 'Oklahoma has hard winters and hot summers');
var miamiCtx = E.context({ adults: 1, county: E.countyFrom(H, '12086') });
ok(!miamiCtx.flags.cold && miamiCtx.flags.hot, 'Miami is hot, not cold');

/* ---------- town search ---------- */
eq(E.findTown(P, 'Moore, OK')[0], { label: 'Moore, OK', fips: '40027' }, 'Moore, OK');
eq(E.findTown(P, 'moore ok')[0].fips, '40027', 'moore ok');
eq(E.findTown(P, '73160')[0].fips, '40027', 'ZIP 73160');
eq(E.findTown(P, 'Houston')[0].label, 'Houston, TX', 'biggest Houston first');
ok(E.findTown(P, 'Paradise, CA').length >= 1, 'Paradise, CA');
eq(E.findTown(P, 'zzzz').length, 0, 'no town');

/* ---------- done, scores, next ---------- */
var t0 = '2026-11-01T12:00:00Z';
var st = { have: ['water-3day'], taken_at: t0, progress: {
  'comm-contact': { status: 'done', done_at: '2026-11-02T12:00:00Z' },
  'med-list': { status: 'done', done_at: '2026-10-01T12:00:00Z' },     // before the assessment: does not count
  'home-smoke': { status: 'later', later_until: '2026-11-20T00:00:00Z' } } };
ok(E.isDone(E.task('water-3day'), st), 'have counts');
ok(E.isDone(E.task('comm-contact'), st), 'done after assessment counts');
ok(!E.isDone(E.task('med-list'), st), 'done before the assessment does not count');
var c1 = E.context({ adults: 2, kids: 1 });
var s0 = E.scores(c1, { have: [], progress: {} });
eq(s0.overall, 0, 'nothing done is 0');
var all = E.tasksFor(c1).map(function (t) { return t.id; });
eq(E.scores(c1, { have: all, progress: {} }).overall, 100, 'everything done is 100');
var s1 = E.scores(c1, st);
ok(s1.overall > 0 && s1.areas.water.score > 0 && s1.areas.comms.score > 0, 'scores move with done steps');
var next = E.nextSteps(c1, st, null, '2026-11-10T00:00:00Z');
ok(next.length > 10, 'many open steps');
ok(next.every(function (t, i) { return !i || next[i - 1].cost <= t.cost; }), 'free first, then by cost');
eq(next[0].cost, 0, 'first step is free');
ok(next.every(function (t) { return t.id !== 'home-smoke'; }), 'put-off step hidden this week');
ok(E.nextSteps(c1, st, null, '2026-11-21T00:00:00Z').some(function (t) { return t.id === 'home-smoke'; }), 'put-off step back after its week');
ok(next.every(function (t) { return t.id !== 'comm-ham-test'; }), 'ham test waits until studying is done');
ok(next.some(function (t) { return t.id === 'comm-ham-learn'; }), 'ham study offered');
var firstFew = next.slice(0, 5).map(function (t) { return t.area; });
ok(new Set(firstFew).size >= 3, 'first steps spread across areas: ' + firstFew.join(','));
eq(E.band(0).word, 'Starting out', 'band 0'); eq(E.band(90).word, 'Ready', 'band 90');

/* ---------- the week ---------- */
eq(E.weekOf('2026-11-16T15:00:00'), '2026-11-16', 'Monday is its own week');
eq(E.weekOf('2026-11-22T15:00:00'), '2026-11-16', 'Sunday belongs to the Monday before');
ok(!E.checkinDue([], '2026-11-15T00:00:00', '2026-11-16T12:00:00'), 'no check-in the day after starting');
ok(E.checkinDue([], '2026-11-01T00:00:00', '2026-11-16T12:00:00'), 'check-in due after a week');
ok(!E.checkinDue([{ week_of: '2026-11-16' }], '2026-11-01T00:00:00', '2026-11-18T12:00:00'), 'one check-in a week');
eq(E.doneBetween(st, t0).sort(), ['comm-contact'], 'done since a date');

/* ---------- phone alerts: NWS warnings matched to his disasters ---------- */
require(path.join(root, 'data/nws.js'));
var NH = RD.NWS.hazards;
eq(NH('Tornado Warning'), ['tornado'], 'tornado warning');
eq(NH('Flash Flood Warning'), ['flood'], 'flash flood warning');
ok(NH('Hurricane Warning').indexOf('hurricane') >= 0 && NH('Tropical Storm Watch').indexOf('hurricane') >= 0, 'hurricane and tropical storm');
ok(NH('Storm Surge Warning').indexOf('flood') >= 0, 'storm surge brings the flood steps');
eq(NH('Severe Thunderstorm Watch'), ['storm'], 'thunderstorm watch');
eq(NH('High Wind Warning'), ['storm'], 'high wind');
eq(NH('Wind Chill Warning'), ['winter'], 'wind chill is winter, not a storm');
eq(NH('Extreme Cold Warning'), ['winter', 'outage'], 'extreme cold brings the outage steps');
eq(NH('Winter Storm Warning'), ['winter'], 'winter storm');
eq(NH('Ice Storm Warning'), ['winter', 'outage'], 'ice storm');
eq(NH('Extreme Heat Warning'), ['heat'], 'extreme heat');
eq(NH('Excessive Heat Watch'), ['heat'], 'the older heat name too');
eq(NH('Red Flag Warning'), ['wildfire'], 'red flag');
eq(NH('Fire Warning'), ['wildfire'], 'fire warning');
ok(NH('Tsunami Warning').indexOf('tsunami') >= 0, 'tsunami');
eq(NH('Avalanche Warning'), ['avalanche'], 'avalanche');
eq(NH('Ashfall Warning'), ['volcano'], 'ashfall');
eq(NH('Earthquake Warning'), ['earthquake'], 'earthquake');
eq(NH('Hazardous Materials Warning'), ['chemical'], 'hazardous materials');
eq(NH('Shelter In Place Warning'), ['chemical'], 'shelter in place');
eq(NH('Radiological Hazard Warning'), ['nuclear'], 'radiological');
eq(NH('Nuclear Power Plant Warning'), ['nuclear'], 'nuclear plant');
eq(NH('Evacuation Immediate'), ['evacuate'], 'evacuation');
eq(NH('Civil Emergency Message'), [], 'a general notice has no one disaster');
['Tornado Warning', 'Hurricane Warning', 'Storm Surge Warning', 'Flood Warning', 'Blizzard Warning', 'Red Flag Warning', 'Tsunami Warning',
  'Volcano Warning', 'Avalanche Warning', 'Debris Flow Warning', 'Hazardous Materials Warning', 'Radiological Hazard Warning', 'Evacuation Immediate']
  .forEach(function (ev) { ok(NH(ev).length && NH(ev).every(function (h) { return hzIds.indexOf(h) >= 0; }), ev + ' maps to real disasters'); });
/* every county disaster the Weather Service warns about has a match (drought has no warning) */
var covered = {};
['Tornado Warning', 'Hurricane Warning', 'Flood Warning', 'Severe Thunderstorm Warning', 'Winter Storm Warning', 'Extreme Heat Warning',
  'Red Flag Warning', 'Earthquake Warning', 'Debris Flow Warning', 'Tsunami Warning', 'Volcano Warning', 'Avalanche Warning']
  .forEach(function (ev) { NH(ev).forEach(function (h) { covered[h] = 1; }); });
RD.HAZARDS.forEach(function (h) { if (!h.always && h.id !== 'drought') ok(covered[h.id], h.id + ' has a weather warning that opens its steps'); });
var mooreState = { have: [], taken_at: null, progress: {} };
var tsteps = RD.NWS.steps('Tornado Warning', mooreCtx, mooreState, 6);
ok(tsteps.some(function (t) { return t.id === 'hz-tornado'; }), 'a tornado warning in Moore opens the tornado step');
ok(tsteps.length <= 6 && tsteps.every(function (t) { return E.applies(t, mooreCtx) && t.hz.indexOf('tornado') >= 0; }), 'the steps are his and fit the warning');
var doneOne = { have: [tsteps[0].id], taken_at: null, progress: {} };
var t2 = RD.NWS.steps('Tornado Warning', mooreCtx, doneOne, 50);
ok(!E.isDone(t2[0], doneOne) && E.isDone(t2[t2.length - 1], doneOne), 'steps not done come first');
ok(RD.NWS.steps('Civil Emergency Message', mooreCtx, mooreState).every(function (t) { return t.area === 'plan'; }), 'a general notice opens the family plan');

/* ---------- phone alerts: the sender's own logic (the pure part of supabase/functions/push/index.ts) ---------- */
var fnSrc = fs.readFileSync(path.join(root, 'supabase/functions/push/index.ts'), 'utf8');
var pure = fnSrc.slice(fnSrc.indexOf('// ---- pure: begin'), fnSrc.indexOf('// ---- pure: end'));
ok(pure.length > 1000, 'the sender has a pure part to test');
var F = new Function(pure + '\nreturn { allowedEndpoint: allowedEndpoint, nwsKind: nwsKind, countiesFrom: countiesFrom, nwsToAlerts: nwsToAlerts, vapidHeader: vapidHeader, importVapidKey: importVapidKey, NWS_URL: NWS_URL, NWS_HEADERS: NWS_HEADERS };')();
['https://fcm.googleapis.com/fcm/send/abc', 'https://web.push.apple.com/QGx', 'https://updates.push.services.mozilla.com/wpush/v2/x',
  'https://wns2-par02p.notify.windows.com/w/?token=x'].forEach(function (u) { ok(F.allowedEndpoint(u), 'push service allowed: ' + u.slice(8, 40)); });
['http://fcm.googleapis.com/x', 'https://fcm.googleapis.com.evil.example/x', 'https://evil.example/fcm.googleapis.com', 'https://fcm.googleapis.com:8443/x', 'not a url']
  .forEach(function (u) { ok(!F.allowedEndpoint(u), 'not a push service: ' + u); });
eq([F.nwsKind('Tornado Warning'), F.nwsKind('Tornado Watch'), F.nwsKind('Wind Advisory'), F.nwsKind('Special Weather Statement'),
  F.nwsKind('Evacuation Immediate'), F.nwsKind('Child Abduction Emergency'), F.nwsKind('')], ['warning', 'watch', null, null, 'warning', null, null], 'which NWS products become alerts');
eq(F.countiesFrom(['048201', '148201', '040027', '57450', 'x', '057450', '077250', '072127']), ['48201', '40027', '72127'], 'SAME codes to county FIPS, marine areas left out');
ok(/^https:\/\/api\.weather\.gov\/alerts\/active\?/.test(F.NWS_URL) && /status=actual/.test(F.NWS_URL), 'asks the Weather Service for real alerts only');
ok(/preparemeapp\.org/.test(F.NWS_HEADERS['User-Agent']) && !/@/.test(F.NWS_HEADERS['User-Agent']), 'names the site to the Weather Service, no email');
var NOW = Date.parse('2026-11-21T20:00:00Z');
function feat(p) { return { id: p.id, properties: Object.assign({ status: 'Actual', messageType: 'Alert', geocode: { SAME: ['048201'] } }, p) }; }
var geo = { features: [
  feat({ id: 'urn:a1', event: 'Tornado Warning', headline: 'Tornado Warning issued November 21 at 1:55PM CST until 2:30PM CST by NWS Houston/Galveston TX', areaDesc: 'Harris, TX', expires: '2026-11-21T20:30:00Z', description: 'At 155 PM CST, a storm was located near Katy.', instruction: 'Go to a room on the lowest floor.', senderName: 'NWS Houston/Galveston TX' }),
  feat({ id: 'urn:a2', event: 'Tornado Warning', messageType: 'Update', expires: '2026-11-21T20:45:00Z', references: [{ identifier: 'urn:a0', sent: '2026-11-21T19:00:00Z' }, { identifier: 'urn:a1', sent: '2026-11-21T19:55:00Z' }] }),
  feat({ id: 'urn:a3', event: 'Flood Watch', ends: '2026-11-22T06:00:00Z', geocode: { SAME: ['040027', '048201'] } }),
  feat({ id: 'urn:a4', event: 'Winter Storm Warning', expires: '2026-11-21T19:00:00Z' }),
  feat({ id: 'urn:a5', event: 'Wind Advisory', expires: '2026-11-22T00:00:00Z' }),
  feat({ id: 'urn:a6', event: 'Special Marine Warning', geocode: { SAME: ['077250'] }, expires: '2026-11-22T00:00:00Z' }),
  feat({ id: 'urn:a7', event: 'Tornado Warning', status: 'Test' }),
  feat({ id: 'urn:a8', event: 'Flood Warning', geocode: {}, expires: '2026-11-22T00:00:00Z' }),
  feat({ id: 'urn:a9', event: 'Heat Warning', headline: 'x'.repeat(300), expires: '2026-11-22T00:00:00Z' })
] };
var al = F.nwsToAlerts(geo, NOW);
eq(al.map(function (x) { return x.ref; }), ['Tornado Warning|urn:a1', 'Tornado Warning|urn:a0', 'Flood Watch|urn:a3', 'Heat Warning|urn:a9'], 'active warnings and watches, keyed by their first message');
eq([al[0].kind, al[0].title, al[0].fips, al[2].kind, al[2].fips], ['warning', 'Tornado Warning', ['48201'], 'watch', ['40027', '48201']], 'kind, title and counties');
ok(al[0].body.indexOf('Tornado Warning issued') === 0 && al[0].detail.instruction === 'Go to a room on the lowest floor.' && al[0].detail.sender === 'NWS Houston/Galveston TX', 'the Weather Service words are kept');
ok(al[3].body.length <= 160 && al[3].detail.headline.length <= 300, 'long text is cut');
ok(!F.nwsToAlerts({ features: [feat({ id: 'u', event: 'Tornado Warning', messageType: 'Cancel' })] }, NOW).length, 'a cancel sends nothing');
eq(F.nwsToAlerts(null, NOW), [], 'no answer, no alerts');

/* ---------- phone alerts: the pages, the service worker, the schema and the cron job agree ---------- */
var swSrc = fs.readFileSync(path.join(root, 'sw.js'), 'utf8'), alSrc = fs.readFileSync(path.join(root, 'js/alerts.js'), 'utf8');
var schema = fs.readFileSync(path.join(root, 'supabase/schema.sql'), 'utf8');
ok(/indexedDB\.open\('prepare-me-push', 1\)/.test(swSrc) && /indexedDB\.open\('prepare-me-push', 1\)/.test(alSrc) && /get\('push'\)/.test(swSrc) && /put\(v, 'push'\)/.test(alSrc), 'the page and the service worker share the read key store');
ok(/rpc\/push_latest/.test(swSrc) && /p_endpoint/.test(swSrc) && /p_read_key/.test(swSrc), 'the service worker reads alerts with its key');
ok(/function public\.push_latest\(p_endpoint text, p_read_key text\)/.test(schema), 'push_latest takes the endpoint and key');
ok(!/addEventListener\('fetch'/.test(swSrc), 'the service worker never stands between the pages and the network');
ok(/importScripts\('config\.js'\)/.test(swSrc), 'the service worker reads the project from config.js');
ok(/'\/functions\/v1\/push'/.test(alSrc) && fs.existsSync(path.join(root, 'supabase/functions/push/index.ts')), 'the page calls the push function that exists');
ok(/\[functions\.push\]\s*\nverify_jwt = false/.test(fs.readFileSync(path.join(root, 'supabase/config.toml'), 'utf8')), 'the push function takes no sign-in');
var cron = fs.readFileSync(path.join(root, 'supabase/cron.sql'), 'utf8');
var cfgSrc = fs.readFileSync(path.join(root, 'config.js'), 'utf8');
var projUrl = (cfgSrc.match(/supabaseUrl: '([^']+)'/) || [])[1];
ok(projUrl && cron.indexOf("url := '" + projUrl + "/functions/v1/push'") >= 0, 'the cron job calls this project push function');
ok(/'\* \* \* \* \*'/.test(cron) && /"action": "tick"/.test(cron), 'the cron job ticks each minute');
ok(!/service_role|secret|eyJ/i.test(cron), 'the cron job carries no key');
/* every table in schema.sql has row rules */
(schema.match(/create table if not exists public\.(\w+)/g) || []).forEach(function (m) {
  var t = m.split('.')[1];
  ok(new RegExp('alter table public\\.' + t + ' enable row level security').test(schema) ||
    schema.slice(schema.indexOf('foreach t in array'), schema.indexOf('end loop')).indexOf("'" + t + "'") >= 0, t + ' has row rules');
});
['push_subs', 'push_events', 'alert_prefs', 'push_state'].forEach(function (t) { ok(schema.indexOf('public.' + t) >= 0, 'schema has ' + t); });
['queue_push(uuid, text, text, text, text, text, uuid)', 'push_queue_weather(jsonb)', 'push_queue_checkins(timestamptz)', 'push_claim()', 'push_nws_due()', 'push_result(bigint[], bigint[])']
  .forEach(function (f) { ok(schema.indexOf("'public." + f + "'") >= 0, f + ' is for the server only'); });

/* the app can go on a Home Screen: manifest, icons, and every page points to them */
var man = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
eq([man.name, man.display, man.start_url], ['Prepare Me', 'standalone', 'index.html'], 'manifest');
function pngSize(f) { var b = fs.readFileSync(path.join(root, f)); return [b.readUInt32BE(16), b.readUInt32BE(20)]; }
man.icons.forEach(function (ic) { var n = +ic.sizes.split('x')[0]; eq(pngSize(ic.src), [n, n], ic.src + ' is ' + ic.sizes); });
eq(pngSize('apple-touch-icon.png'), [180, 180], 'apple-touch-icon is 180');
fs.readdirSync(root).filter(function (f) { return /\.html$/.test(f); }).forEach(function (f) {
  var html = fs.readFileSync(path.join(root, f), 'utf8');
  ok(/<link rel="manifest" href="manifest\.webmanifest">/.test(html) && /<link rel="apple-touch-icon" href="apple-touch-icon\.png">/.test(html), f + ' links the manifest and icon');
});
var acct = fs.readFileSync(path.join(root, 'account.html'), 'utf8');
ok(/id="alerts"/.test(acct) && /js\/alerts\.js/.test(acct) && /RD\.alerts\.panel/.test(acct), 'the account page has the alerts section');
ok(/Add to Home Screen/.test(alSrc) && /16\.4/.test(alSrc), 'iPhone steps say Add to Home Screen and iOS 16.4');

/* ---------- every page loads its own files with the same version tag, so browsers fetch new code after a change ---------- */
var tags = {}, untagged = [];
fs.readdirSync(root).filter(function (f) { return /\.html$/.test(f); }).forEach(function (f) {
  var html = fs.readFileSync(path.join(root, f), 'utf8');
  (html.match(/(?:src|href)="(?!https?:|#|mailto:)[^"]+\.(?:js|css)(?:\?[^"]*)?"/g) || []).forEach(function (ref) {
    var m = ref.match(/\?v=([\w.-]+)"/);
    if (m) tags[m[1]] = true; else untagged.push(f + ': ' + ref);
  });
});
eq(untagged, [], 'every page file reference carries a version tag');
eq(Object.keys(tags).length, 1, 'one version tag across all pages');

/* ---------- the local store keeps two men apart ---------- */
var mem = {};
globalThis.localStorage = { getItem: function (k) { return mem[k] || null; }, setItem: function (k, v) { mem[k] = String(v); }, removeItem: function (k) { delete mem[k]; } };
globalThis.location = { hostname: 'localhost' };
require(path.join(root, 'js/store.js'));
(async function () {
  var L = new RD.Local();
  await L.signIn('a@example.com');
  var a = await L.session();
  await L.saveAssessment(a.id, { answers: { adults: 1 }, have: ['water-3day'], overall: 5, areas: {}, hazards: {} });
  await L.setProgress(a.id, 'comm-contact', { status: 'done', done_at: new Date().toISOString() });
  await L.saveCheckin(a.id, { week_of: '2026-11-16', overall: 6, areas: {}, done_count: 1, answers: { how: 'done' } });
  await L.saveCheckin(a.id, { week_of: '2026-11-16', overall: 7, areas: {}, done_count: 1, answers: { how: 'done' } });
  await L.signIn('b@example.com');
  var b = await L.session();
  var bd = await L.loadAll();
  ok(a.id !== b.id, 'two men, two ids');
  eq([bd.assessments.length, bd.progress.length, bd.checkins.length], [0, 0, 0], 'the second man sees none of the first man\'s rows');
  await L.signIn('a@example.com');
  var ad = await L.loadAll();
  eq([ad.assessments.length, ad.progress.length, ad.checkins.length, ad.checkins[0].overall], [1, 1, 1, 7], 'the first man\'s rows are his, one check-in a week');
  await L.deleteMe();
  ok(!(await L.session()), 'deleted and signed out');
  await L.signIn('a@example.com');
  eq((await L.loadAll()).assessments.length, 0, 'deleting removes his rows');

  /* the VAPID signature the push services check */
  var kp = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  var jwk = await crypto.subtle.exportKey('jwk', kp.privateKey);
  var pubRaw = Buffer.from(await crypto.subtle.exportKey('raw', kp.publicKey)).toString('base64url');
  var hdr = await F.vapidHeader(await F.importVapidKey(JSON.stringify(jwk)), pubRaw, 'https://fcm.googleapis.com/fcm/send/abc', 1800000000);
  var hm = hdr.match(/^vapid t=([\w-]+)\.([\w-]+)\.([\w-]+), k=([\w-]+)$/);
  ok(!!hm && hm[4] === pubRaw, 'VAPID header shape');
  var claims = JSON.parse(Buffer.from(hm[2], 'base64url').toString());
  eq(claims, { aud: 'https://fcm.googleapis.com', exp: 1800000000 + 12 * 3600, sub: 'https://preparemeapp.org' }, 'VAPID claims');
  ok(await crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, kp.publicKey, Buffer.from(hm[3], 'base64url'), new TextEncoder().encode(hm[1] + '.' + hm[2])), 'VAPID signature checks out with the public key');

  console.log(pass + ' checks pass' + (fail ? ', ' + fail + ' fail' : '') + '.');
  process.exit(fail ? 1 : 0);
})();
