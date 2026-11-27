/* Prepare Me: flash cards. The decks (facts from the guides in data/cards.js, and questions from his own written plan),
   and the study schedule: a card he gets right moves up a box and comes back later; one he misses goes back to box 1
   and comes back tomorrow. No page code here, so the tests can run it in Node. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};
  var C = RD.cardsEngine = {};

  /* days until a card comes back, by box. Box 0 is a card never seen. */
  C.WAIT = [0, 1, 3, 7, 16, 35];
  C.LEARNED = 3;          // a card in box 3 or higher counts as learned
  C.SESSION = 20;         // cards in one sitting
  C.NEW_PER = 10;         // new cards in one sitting

  C.today = function (now) { var d = now || new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); };

  /* ---------- the decks ---------- */
  C.decks = function () {
    var out = [{ id: 'basics', name: 'Survival basics', line: 'Water, a toilet, food, heat, first aid and getting out.' }];
    RD.AREAS.forEach(function (a) { if (C.factDeck(a.id).length) out.push({ id: a.id, name: a.name }); });
    return out;
  };
  C.factDeck = function (deck) {
    var all = RD.CARDS || [];
    if (deck === 'all') return all.slice();
    if (deck === 'basics') return all.filter(function (c) { return RD.BASICS.indexOf(c.task) >= 0; });
    return all.filter(function (c) { var t = RD.engine.task(c.task); return t && t.area === deck; });
  };

  /* his own plan: one card for each spot he filled in. The ids name the spot, so a changed answer keeps its place. */
  C.planDeck = function (data, hazards) {
    var P = RD.PLAN, out = [];
    if (!data) return out;
    P.sections.forEach(function (s) {
      s.fields.forEach(function (f) {
        if (!f.ask || !data.f[f.id]) return;
        var a = data.f[f.id] + (f.with && data.f[f.with] ? ', ' + data.f[f.with] : '');
        out.push({ id: 'plan:' + f.id, q: f.ask, a: a, plan: true });
      });
    });
    (data.people || []).forEach(function (p, i) {
      if (!p.name) return;
      if (p.phone) out.push({ id: 'plan:phone:' + i, q: P.askPhone.replace('{name}', p.name), a: p.phone, plan: true });
      if (p.health) out.push({ id: 'plan:health:' + i, q: P.askHealth.replace('{name}', p.name), a: p.health, plan: true });
    });
    (hazards || []).forEach(function (h) {
      if (data.hz[h.id]) out.push({ id: 'plan:hz:' + h.id, q: P.askHz.replace('{hazard}', h.name), a: data.hz[h.id], plan: true });
    });
    return out;
  };

  /* ---------- the schedule. state = { v: 1, c: { cardId: [box, day it is due] } } ---------- */
  C.blank = function () { return { v: 1, c: {} }; };
  C.clean = function (s) {
    var out = C.blank();
    if (!s || typeof s !== 'object' || !s.c || typeof s.c !== 'object') return out;
    Object.keys(s.c).slice(0, 2000).forEach(function (id) {
      var x = s.c[id];
      if (String(id).length <= 60 && Array.isArray(x) && x.length === 2 && x[0] >= 0 && x[0] < C.WAIT.length && isFinite(x[1])) out.c[id] = [Math.floor(x[0]), Math.floor(x[1])];
    });
    return out;
  };
  C.isDue = function (state, id, day) { var x = state.c[id]; return !!x && x[1] <= day; };
  C.isNew = function (state, id) { return !state.c[id]; };

  /* what to study now: cards due, oldest first, then up to NEW_PER new cards, in deck order */
  C.session = function (cards, state, now) {
    var day = C.today(now);
    var due = cards.filter(function (c) { return C.isDue(state, c.id, day); })
      .sort(function (a, b) { return state.c[a.id][1] - state.c[b.id][1] || state.c[a.id][0] - state.c[b.id][0]; });
    var fresh = cards.filter(function (c) { return C.isNew(state, c.id); }).slice(0, C.NEW_PER);
    return due.concat(fresh).slice(0, C.SESSION);
  };

  /* he got it right (up a box) or not (back to box 1, due tomorrow) */
  C.grade = function (state, id, right, now) {
    var day = C.today(now), x = state.c[id] || [0, day];
    var box = right ? Math.min(x[0] + 1, C.WAIT.length - 1) : 1;
    state.c[id] = [box, day + (right ? C.WAIT[box] : 1)];
    return state;
  };

  C.summary = function (cards, state, now) {
    var day = C.today(now), s = { total: cards.length, due: 0, fresh: 0, learned: 0, next: null };
    cards.forEach(function (c) {
      var x = state.c[c.id];
      if (!x) { s.fresh++; return; }
      if (x[1] <= day) s.due++; else if (s.next === null || x[1] < s.next) s.next = x[1];
      if (x[0] >= C.LEARNED) s.learned++;
    });
    return s;
  };
  /* drop cards that are gone (a plan spot emptied, a card retired) so the saved state stays small */
  C.prune = function (state, keepIds) {
    var keep = {}; keepIds.forEach(function (id) { keep[id] = 1; });
    Object.keys(state.c).forEach(function (id) { if (!keep[id]) delete state.c[id]; });
    return state;
  };
})(typeof window !== 'undefined' ? window : globalThis);
