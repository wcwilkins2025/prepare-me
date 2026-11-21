/* Prepare Me tests: node tests/run_tests.js
   The step library, the county disasters, the score, the next step, the week, and the local store keeping two men apart. */
'use strict';
var fs = require('fs'), path = require('path');
var root = path.join(__dirname, '..');
require(path.join(root, 'data/links.js'));
require(path.join(root, 'data/tasks.js'));
require(path.join(root, 'data/howto.js'));
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

/* how-to guides: each belongs to a real step, has parts, and cites links that exist */
Object.keys(RD.HOWTO).forEach(function (id) {
  var h = RD.HOWTO[id], t = E.task(id);
  ok(!!t, 'guide ' + id + ' belongs to a step');
  ok(typeof h.intro === 'string' && h.intro.length > 20, id + ' guide has an intro');
  ok(Array.isArray(h.parts) && h.parts.length >= 2, id + ' guide has parts');
  h.parts.forEach(function (p, i) {
    ok(typeof p.head === 'string' && p.head.length > 2, id + ' part ' + i + ' has a head');
    if (p.rows) ok(p.cols.length >= 2 && p.rows.every(function (r) { return r.length === p.cols.length; }), id + ' part ' + i + ' table rows fit the columns');
    else ok(Array.isArray(p.items) && p.items.length >= 1, id + ' part ' + i + ' has items');
  });
  ok(h.sources.length >= 1 && h.sources.every(function (k) { return RD.LINKS[k]; }), id + ' guide sources exist');
  ok(/^\d{4}-\d{2}-\d{2}$/.test(h.checked), id + ' guide has a checked date');
  ok(!/\{\w+\}/.test(JSON.stringify(h)), id + ' guide has no household numbers (it is read signed out)');
});

/* calm words, no stores, nothing about how it was made. The word list is kept encoded so the words do not show up in the repo. */
var words = fs.readFileSync(path.join(root, 'data/tasks.js'), 'utf8') + fs.readdirSync(root).filter(function (f) { return /\.(html|js|css|md)$/.test(f); }).map(function (f) { return fs.readFileSync(path.join(root, f), 'utf8'); }).join('\n') +
  ['js/engine.js', 'js/site.js', 'js/store.js', 'js/howto-view.js', 'data/links.js', 'data/howto.js'].map(function (f) { return fs.readFileSync(path.join(root, f), 'utf8'); }).join('\n');
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

  console.log(pass + ' checks pass' + (fail ? ', ' + fail + ' fail' : '') + '.');
  process.exit(fail ? 1 : 0);
})();
