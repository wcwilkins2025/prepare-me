/* Prepare Me tests: node tests/run_tests.js
   The step library, the county disasters, the score, the next step, the week, and the local store keeping two men apart. */
'use strict';
var fs = require('fs'), path = require('path');
var root = path.join(__dirname, '..');
require(path.join(root, 'data/links.js'));
require(path.join(root, 'data/tasks.js'));
require(path.join(root, 'data/forum.js'));
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
  ['js/engine.js', 'js/site.js', 'js/store.js', 'data/links.js', 'data/forum.js'].map(function (f) { return fs.readFileSync(path.join(root, f), 'utf8'); }).join('\n');
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


/* ---------- the forum: boards, house rules, limits, and the links to it ---------- */
var FB = RD.FORUM.boards.map(function (b) { return b.id; });
eq(FB, ['start'].concat(areaIds, ['disasters']), 'boards: Start here, one per area, and disasters');
RD.FORUM.boards.forEach(function (b) { ok(b.name && b.about && b.about.length > 10, 'board ' + b.id + ' has a name and a line about it'); });
var schema = fs.readFileSync(path.join(root, 'supabase/schema.sql'), 'utf8');
var sqlBoards = (schema.match(/board in \(([^)]*)\)/) || [])[1];
eq((sqlBoards || '').split(',').map(function (x) { return x.trim().replace(/'/g, ''); }), FB, 'the server allows exactly the same boards');
var L = RD.FORUM.limits;
ok(schema.indexOf('char_length(btrim(title)) between ' + L.title[0] + ' and ' + L.title[1]) >= 0, 'title limit matches the server');
ok(schema.indexOf('char_length(btrim(body)) between 1 and ' + L.body) >= 0, 'topic length matches the server');
ok(schema.indexOf('char_length(btrim(body)) between 1 and ' + L.reply) >= 0, 'reply length matches the server');
ok(schema.indexOf('char_length(reason) <= ' + L.reason) >= 0, 'report length matches the server');
ok(schema.indexOf('recent >= ' + L.perMinute) >= 0 && schema.indexOf('today >= ' + L.perDay) >= 0, 'rate limits match the server');
ok(schema.indexOf('char_length(display_name) between ' + L.name[0] + ' and ' + L.name[1]) >= 0, 'name length matches the server');
var rules = RD.FORUM.rules.join(' ');
eq(RD.FORUM.rules.length, 5, 'five house rules');
ok(/calm and kind/i.test(rules) && /no selling/i.test(rules) && /personal details/i.test(rules) && /call 911/.test(rules), 'house rules: calm, kind, no selling, no personal details, call 911');
ok(RD.FORUM.nameOk('Dan B') && RD.FORUM.nameOk("O'Neil") && RD.FORUM.nameOk('ham_radio.joe'), 'plain display names are fine');
ok(!RD.FORUM.nameOk('d') && !RD.FORUM.nameOk('dan@example.com') && !RD.FORUM.nameOk('x'.repeat(31)) && !RD.FORUM.nameOk(' -dan') && !RD.FORUM.nameOk('Dan  B'), 'bad names and emails refused');
var forumHtml = fs.readFileSync(path.join(root, 'forum.html'), 'utf8');
ok(/'forum\.html', 'Forum'/.test(fs.readFileSync(path.join(root, 'js/site.js'), 'utf8')), 'the forum is in the nav');
ok(/forum\.html\?new=1&task=' \+ t\.id/.test(fs.readFileSync(path.join(root, 'coach.html'), 'utf8')) && /Ask about this step/.test(fs.readFileSync(path.join(root, 'coach.html'), 'utf8')), 'every coach step links to Ask about this step');
ok(!/\.email\b/.test(forumHtml), 'the forum page never touches an email');
ok(!/innerHTML/.test(forumHtml), 'posts are shown as plain text, never as page code');
ok(/House rules/.test(forumHtml) && /rulesList/.test(forumHtml), 'house rules are shown above the boards');
ok(/Report/.test(forumHtml), 'every post has a Report button');

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


  /* ---------- the forum in the local store: same rules as the server ---------- */
  Object.keys(mem).forEach(function (k) { delete mem[k]; });
  var F = new RD.Local();
  async function as(email) { await F.signIn(email); return (await F.session()).id; }
  async function refused(p, re, msg) { try { await p; ok(false, msg); } catch (e) { ok(re.test(e.message), msg + ' (' + e.message + ')'); } }
  var dan = await as('dan@example.com');
  await refused(F.newTopic(dan, { board: 'water', title: 'How much water?', body: 'For four.' }), /display name/, 'no post before a display name');
  await refused(F.setDisplayName(dan, 'dan@example.com'), /limits/, 'an email cannot be a name');
  await F.setDisplayName(dan, 'Dan B');
  eq((await F.forumMe()), { display_name: 'Dan B', moderator: false }, 'his name is kept, and he is not a moderator');
  await refused(F.newTopic(dan, { board: 'guns', title: 'Not a board', body: 'x' }), /limits/, 'unknown board refused');
  await refused(F.newTopic(dan, { board: 'water', title: 'Hi', body: 'x' }), /limits/, 'short title refused');
  var t1 = await F.newTopic(dan, { board: 'water', title: 'How much water for four?', body: 'We are four.', task_id: 'water-3day' });
  eq([t1.author_name, t1.board, t1.task_id, t1.hidden], ['Dan B', 'water', 'water-3day', false], 'a topic carries his name, board and step');
  var al = await as('al@example.com');
  await refused(F.setDisplayName(al, 'DAN b'), /taken/, 'names are unique, any case');
  await F.setDisplayName(al, 'Al');
  eq((await F.forumTopics('water')).length, 1, 'another man reads the topic');
  eq((await F.forumTopics('food')).length, 0, 'boards are kept apart');
  await F.newReply(al, t1.id, 'One gallon a person a day.');
  eq((await F.forumTopic(t1.id)).topic.reply_count, 1, 'the reply is counted');
  await F.report(al, 'topic', t1.id, 'selling');
  await refused(F.report(al, 'topic', t1.id, 'again'), /already/, 'one report per man per post');
  eq(await F.forumReports(), [], 'a member reads no reports');
  await refused(F.moderate('topic', t1.id, true), /Moderators only/, 'a member cannot hide a post');
  var mod = await as('moderator@example.com');
  await F.setDisplayName(mod, 'Sam');
  ok((await F.forumMe()).moderator, 'the local moderator is a moderator');
  var reps = await F.forumReports();
  eq([reps.length, reps[0].kind, reps[0].reason, reps[0].author_name], [1, 'topic', 'selling', 'Dan B'], 'the moderator reads the report');
  await F.moderate('topic', t1.id, true);
  eq((await F.forumReports()).length, 0, 'hiding clears its reports');
  await as('al@example.com');
  eq([(await F.forumTopics(null)).length, await F.forumTopic(t1.id)], [0, null], 'a hidden topic is gone for other men');
  await refused(F.newReply(al, t1.id, 'Hello?'), /closed/, 'no replies to a hidden topic');
  await as('dan@example.com');
  eq((await F.forumTopics(null)).length, 1, 'the author still sees his hidden topic');
  await as('moderator@example.com');
  await F.moderate('topic', t1.id, false);
  var rid = (await F.forumTopic(t1.id)).replies[0].id;
  await F.moderate('reply', rid, true);
  await as('dan@example.com');
  var seen = await F.forumTopic(t1.id);
  eq([seen.replies.length, seen.topic.reply_count], [0, 0], 'a hidden reply is gone and not counted');
  await F.newTopic(dan, { board: 'food', title: 'Rice or beans first?', body: 'Which keeps?' });
  await F.newTopic(dan, { board: 'food', title: 'Canned or dried?', body: 'Which keeps?' });
  await refused(F.newTopic(dan, { board: 'food', title: 'One more question', body: 'Fast.' }), /Slow down/, '3 posts a minute, then wait');
  await F.setDisplayName(dan, 'Dan Baker');
  ok((await F.forumTopics(null)).every(function (t) { return t.author_name === 'Dan Baker'; }), 'a new name shows on his posts');
  ok(JSON.stringify(await F.forumTopics(null)).indexOf('@') < 0, 'no email in what the forum returns');
  await F.deleteMe();
  await as('al@example.com');
  eq((await F.forumTopics(null)).length, 0, 'deleting an account removes his posts');

  console.log(pass + ' checks pass' + (fail ? ', ' + fail + ' fail' : '') + '.');
  process.exit(fail ? 1 : 0);
})();
