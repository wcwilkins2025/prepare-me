/* Prepare Me: the arithmetic. No page code here, so the same file runs in the browser and in the tests.
   A man's state is: his answers (household and town), the "have" list from his latest assessment, and his
   progress on steps since then. Scores, disasters and the next step all come from those three. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};
  var E = RD.engine = {};

  /* ---------- the disasters for his county ---------- */
  var WORD = { 5: 'very high', 4: 'relatively high', 3: 'moderate', 2: 'relatively low', 1: 'very low', 0: 'not rated', '-1': 'does not apply' };
  E.ratingWord = function (g) { return WORD[g]; };

  /* county: { ratings: {CODE: -1..5}, ranks: {CODE: 0..100} } from data/hazards.json.
     A hazard is "more likely" when it happens more often here than in at least half of US counties AND FEMA rates
     it moderate or higher. (A very high rating alone is not enough: FEMA's rating counts the homes and people in harm's way,
     so a big county can rate very high for a cold wave that rarely comes.) "Less likely" is anything else that happens here. */
  E.countyHazards = function (county) {
    var out = [];
    RD.HAZARDS.forEach(function (h) {
      if (h.always) return;
      var best = null;
      h.nri.forEach(function (code) {
        var g = county && county.ratings ? county.ratings[code] : undefined;
        var r = county && county.ranks ? county.ranks[code] : 0;
        if (g === undefined) g = -1;
        r = r || 0;
        var likely = r >= 50 && g >= 3;
        var happens = r > 0 || g >= 1;
        var key = (likely ? 1000 : 0) + r * Math.max(g, 0.5);
        if (!best || key > best.key) best = { code: code, rating: g, rank: r, likely: likely, happens: happens, key: key };
      });
      out.push({ id: h.id, name: h.name, link: h.link, code: best.code, rating: best.rating, rank: best.rank, key: best.key,
        tier: best.likely ? 'likely' : best.happens ? 'less' : 'none' });
    });
    out.sort(function (a, b) { return b.key - a.key; });
    return out;
  };

  /* every disaster his plan covers: the ones every home faces, his county's likely ones, plus any he added,
     minus any he took off */
  E.activeHazards = function (answers, county) {
    answers = answers || {};
    var add = answers.hz_add || [], drop = answers.hz_drop || [];
    var on = {};
    RD.HAZARDS.forEach(function (h) { if (h.always) on[h.id] = true; });
    if (county) E.countyHazards(county).forEach(function (h) { if (h.tier === 'likely') on[h.id] = true; });
    add.forEach(function (id) { on[id] = true; });
    /* the every-home list stays; county disasters and attacks can come off */
    drop.forEach(function (id) { if (!RD.HAZARDS.some(function (h) { return h.id === id && h.always && !h.attack; })) delete on[id]; });
    return on;
  };

  /* ---------- the household, turned into the facts the steps check ---------- */
  function n(v) { v = +v; return isFinite(v) && v > 0 ? Math.floor(v) : 0; }
  E.context = function (answers) {
    var a = answers || {};
    var county = a.county || null;
    var adults = n(a.adults), seniors = n(a.seniors), kids = n(a.kids), babies = n(a.babies), pets = n(a.pets);
    var people = adults + seniors + kids + babies;
    if (people < 1) { people = 1; adults = 1; }
    var hz = E.activeHazards(a, county);
    var jan = county ? county.jan_tmin_f : null, tavg = county ? county.tavg_f : null;
    var cold = !!(hz.winter || (jan != null && jan <= 25));
    var hot = !!(hz.heat || (tavg != null && tavg >= 57));
    if (!county) { cold = true; hot = true; }
    var f = {
      household: people > 1, kids: kids + babies > 0, babies: babies > 0, pets: pets > 0, babiesOrPets: babies + pets > 0,
      seniors: seniors > 0, meds: a.meds === 'yes', device: a.device === 'yes', well: a.water === 'well',
      notRv: a.home !== 'rv', notApartment: a.home !== 'apartment', mobile: a.home === 'mobile' || a.home === 'rv',
      vehicle: a.vehicle !== 'no', cold: cold, hot: hot
    };
    Object.keys(hz).forEach(function (id) { f['hz:' + id] = true; });
    return {
      people: people, adults: adults, seniors: seniors, kids: kids, babies: babies, pets: pets,
      gal3: people * 3, gal14: people * 14, flags: f, hazards: hz, county: county,
      text: {
        people: people === 1 ? '1 person' : people + ' people',
        gal3: String(people * 3), gal14: String(people * 14),
        petsLine: pets ? ', plus extra for the ' + (pets === 1 ? 'pet' : pets + ' pets') : ''
      }
    };
  };

  E.fill = function (s, ctx) {
    return String(s).replace(/\{(\w+)\}/g, function (m, k) { return ctx && ctx.text[k] != null ? ctx.text[k] : m; });
  };

  E.applies = function (task, ctx) {
    return (task.need || []).every(function (k) { return !!ctx.flags[k]; }) &&
      (!task.needAny || task.needAny.some(function (k) { return !!ctx.flags[k]; }));
  };
  E.tasksFor = function (ctx) { return RD.TASKS.filter(function (t) { return E.applies(t, ctx); }); };
  E.task = function (id) { for (var i = 0; i < RD.TASKS.length; i++) if (RD.TASKS[i].id === id) return RD.TASKS[i]; return null; };

  /* ---------- what is done ----------
     state: { have: [task ids], taken_at: ISO, progress: { id: { status, done_at, later_until, steps: [i] } } }
     A step counts when he said he had it at his latest assessment, or marked it done after that assessment. */
  E.isDone = function (task, state) {
    if (!state) return false;
    if ((state.have || []).indexOf(task.id) >= 0) return true;
    var p = state.progress && state.progress[task.id];
    if (!p || p.status !== 'done') return false;
    if (!state.taken_at || !p.done_at) return true;
    return new Date(p.done_at) >= new Date(state.taken_at);
  };
  E.doneSet = function (ctx, state) {
    var out = {};
    E.tasksFor(ctx).forEach(function (t) { if (E.isDone(t, state)) out[t.id] = true; });
    return out;
  };

  /* ---------- scores: each area is the share of its weighted steps done; overall is the average of the areas ---------- */
  /* Survival steps keep you alive and well through a disaster, and they make the score. Comfort steps
     (comfort: true in data/tasks.js) are his own choice: shown as extras, never counted. */
  E.isComfort = function (t) { return !!t.comfort; };
  E.survivalFor = function (ctx) { return E.tasksFor(ctx).filter(function (t) { return !t.comfort; }); };

  E.scores = function (ctx, state) {
    var tasks = E.survivalFor(ctx);
    var areas = {}, sum = 0;
    RD.AREAS.forEach(function (ar) { areas[ar.id] = { got: 0, of: 0, done: 0, total: 0 }; });
    tasks.forEach(function (t) {
      var a = areas[t.area], d = E.isDone(t, state);
      a.of += t.weight; a.total++;
      if (d) { a.got += t.weight; a.done++; }
    });
    RD.AREAS.forEach(function (ar) {
      var a = areas[ar.id];
      a.score = a.of ? Math.round(100 * a.got / a.of) : 100;
      sum += a.score;
    });
    var hz = {};
    Object.keys(ctx.hazards).forEach(function (id) {
      var got = 0, of = 0;
      tasks.forEach(function (t) {
        if (t.hz.indexOf(id) < 0 && t.hz.indexOf('all') < 0) return;
        of += t.weight; if (E.isDone(t, state)) got += t.weight;
      });
      hz[id] = of ? Math.round(100 * got / of) : 100;
    });
    var done = 0; tasks.forEach(function (t) { if (E.isDone(t, state)) done++; });
    return { overall: Math.round(sum / RD.AREAS.length), areas: areas, hazards: hz, done: done, total: tasks.length };
  };

  E.band = function (score) {
    if (score >= 85) return { word: 'Ready', line: 'You have the basics and then some. Keep it fresh and help a neighbor.' };
    if (score >= 60) return { word: 'Solid footing', line: 'Most of the basics are in place. The next steps fill the gaps.' };
    if (score >= 30) return { word: 'Getting there', line: 'A good start. A few free steps will move this fast.' };
    return { word: 'Starting out', line: 'Every man starts here. The first steps cost nothing and take an evening.' };
  };

  /* ---------- the next step: free first, then by cost; the most basic first; the weakest area first ---------- */
  E.nextSteps = function (ctx, state, count, now) {
    now = now ? new Date(now) : new Date();
    var sc = E.scores(ctx, state);
    var done = E.doneSet(ctx, state);
    var open = E.survivalFor(ctx).filter(function (t) {
      if (done[t.id]) return false;
      if (t.after && !done[t.after]) return false;
      var p = state && state.progress && state.progress[t.id];
      if (p && p.status === 'later' && p.later_until && new Date(p.later_until) > now) return false;
      return true;
    });
    open.sort(function (a, b) {
      return (a.cost - b.cost) || (a.rank - b.rank) || (sc.areas[a.area].score - sc.areas[b.area].score) || (b.weight - a.weight) ||
        (RD.TASKS.indexOf(a) - RD.TASKS.indexOf(b));
    });
    return count ? open.slice(0, count) : open;
  };

  /* the comfort extras he has not done yet, most basic first */
  E.extras = function (ctx, state) {
    var done = E.doneSet(ctx, state);
    return E.tasksFor(ctx).filter(function (t) { return t.comfort && !done[t.id] && (!t.after || done[t.after]); })
      .sort(function (a, b) { return (a.cost - b.cost) || (a.rank - b.rank) || (RD.TASKS.indexOf(a) - RD.TASKS.indexOf(b)); });
  };

  /* steps put off with "not now", soonest back first */
  E.later = function (ctx, state, now) {
    now = now ? new Date(now) : new Date();
    var done = E.doneSet(ctx, state);
    return E.tasksFor(ctx).filter(function (t) {
      var p = state && state.progress && state.progress[t.id];
      return !done[t.id] && p && p.status === 'later' && p.later_until && new Date(p.later_until) > now;
    });
  };

  /* ---------- the week, for check-ins: Monday of the week holding the date, as YYYY-MM-DD in local time ---------- */
  E.weekOf = function (d) {
    d = d ? new Date(d) : new Date();
    var x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var dow = (x.getDay() + 6) % 7;
    x.setDate(x.getDate() - dow);
    var m = x.getMonth() + 1, day = x.getDate();
    return x.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  };
  E.checkinDue = function (checkins, firstTaken, now) {
    now = now ? new Date(now) : new Date();
    var wk = E.weekOf(now);
    if ((checkins || []).some(function (c) { return c.week_of === wk; })) return false;
    if (firstTaken && (now - new Date(firstTaken)) < 5 * 864e5) return false;
    return true;
  };

  /* steps finished between two moments (for "since last check-in") */
  E.doneBetween = function (state, from, to) {
    var out = [];
    var prog = (state && state.progress) || {};
    Object.keys(prog).forEach(function (id) {
      var p = prog[id];
      if (p.status !== 'done' || !p.done_at) return;
      var t = new Date(p.done_at);
      if ((!from || t > new Date(from)) && (!to || t <= new Date(to))) out.push(id);
    });
    return out;
  };

  /* the history line: every assessment and check-in, oldest first */
  E.history = function (assessments, checkins) {
    var pts = [];
    (assessments || []).forEach(function (a) { pts.push({ at: a.taken_at, overall: a.overall, kind: 'assessment' }); });
    (checkins || []).forEach(function (c) { pts.push({ at: c.created_at, overall: c.overall, kind: 'checkin' }); });
    pts.sort(function (a, b) { return new Date(a.at) - new Date(b.at); });
    return pts;
  };

  /* the county row from hazards.json, in the shape the engine reads and the profile keeps */
  E.countyFrom = function (table, fips) {
    var r = table && table.counties && table.counties[fips];
    if (!r) return null;
    var ratings = {}, ranks = {};
    table.hazards.forEach(function (code, i) { ratings[code] = r[5][i]; ranks[code] = r[6][i]; });
    return { fips: fips, name: r[0], st: r[1], jan_tmin_f: r[2], tavg_f: r[3], density: r[4], ratings: ratings, ranks: ranks, nri: table.version };
  };

  /* town search: "Moore, OK", "moore ok", "Moore" or a ZIP. Biggest towns first. */
  E.findTown = function (places, q, limit) {
    q = String(q || '').trim();
    limit = limit || 8;
    if (!places || !q) return [];
    if (/^\d{5}$/.test(q)) {
      var f = places.zips[q];
      return f ? [{ label: 'ZIP ' + q, fips: f, zip: q }] : [];
    }
    var m = q.toLowerCase().replace(/\s+/g, ' ').match(/^(.*?)(?:,?\s+([a-z]{2}))?$/);
    var name = m[1].replace(/,$/, '').trim(), st = m[2] ? m[2].toUpperCase() : null;
    function search(nm, stt) {
      var exact = [], starts = [];
      places.towns.forEach(function (t) {
        if (stt && t[1] !== stt) return;
        var tn = t[0].toLowerCase();
        if (tn === nm) exact.push(t); else if (tn.indexOf(nm) === 0) starts.push(t);
      });
      var byPop = function (a, b) { return b[3] - a[3]; };
      return exact.sort(byPop).concat(starts.sort(byPop));
    }
    var hits = search(name, st);
    if (!hits.length && st) hits = search(q.toLowerCase().trim(), null);   // "Grand Is" was not a state after all
    return hits.slice(0, limit).map(function (t) { return { label: t[0] + ', ' + t[1], fips: t[2] }; });
  };
})(typeof window !== 'undefined' ? window : globalThis);
