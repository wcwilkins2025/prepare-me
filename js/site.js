/* Prepare Me: the shell every page shares. Theme, nav, footer, the sign-in gate, and his state loaded once. */
(function () {
  'use strict';
  var RD = window.RD, E = RD.engine;
  var UI = RD.ui = {};

  UI.$ = function (id) { return document.getElementById(id); };
  /* el('p', {class: 'x'}, 'text' | node | [nodes]) */
  UI.el = function (tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    });
    (Array.isArray(kids) ? kids : kids == null ? [] : [kids]).forEach(function (c) {
      if (c == null || c === false) return;
      e.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
    });
    return e;
  };
  UI.clear = function (e) { while (e.firstChild) e.removeChild(e.firstChild); return e; };
  UI.date = function (d) { return new Date(d).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }); };
  UI.flash = function (id, msg) { var f = UI.$(id); if (f) f.textContent = msg; };

  /* ---------- theme (same as Groundwork) ---------- */
  function isDark() {
    var t = document.documentElement.getAttribute('data-theme');
    return t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  function setTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
    try { if (t) localStorage.setItem('theme', t); else localStorage.removeItem('theme'); } catch (e) {}
    var b = UI.$('themeBtn');
    if (b) { b.textContent = isDark() ? 'Light mode' : 'Dark mode'; b.setAttribute('aria-pressed', isDark() ? 'true' : 'false'); }
  }
  (function () { var saved = null; try { saved = localStorage.getItem('theme'); } catch (e) {} if (saved) document.documentElement.setAttribute('data-theme', saved); })();

  /* ---------- nav and footer ---------- */
  var PAGES = [['index.html', 'Home'], ['coach.html', 'Coach'], ['checkin.html', 'Check-in'], ['start.html', 'Assessment'], ['resources.html', 'Resources']];
  UI.chrome = function () {
    var here = location.pathname.split('/').pop() || 'index.html';
    var nav = UI.$('nav');
    if (nav) {
      UI.clear(nav);
      nav.appendChild(UI.el('a', { class: 'brand', href: 'index.html' }, 'Prepare Me'));
      PAGES.forEach(function (p) { nav.appendChild(UI.el('a', { href: p[0], 'aria-current': here === p[0] ? 'page' : null }, p[1])); });
      nav.appendChild(UI.el('a', { class: 'acct', id: 'acctLink', href: 'account.html', 'aria-current': here === 'account.html' ? 'page' : null }, 'Account'));
      nav.appendChild(UI.el('button', { class: 'theme', id: 'themeBtn', type: 'button', 'aria-pressed': 'false', onclick: function () { setTheme(isDark() ? 'light' : 'dark'); } }, 'Dark mode'));
      setTheme(document.documentElement.getAttribute('data-theme'));
    }
    var foot = UI.$('foot');
    if (foot) {
      UI.clear(foot);
      foot.appendChild(UI.el('p', { class: 'quote' }, 'Ready for what can reach your home.'));
      foot.appendChild(UI.el('p', null, 'Prepare Me is free. The steps follow Ready.gov, the American Red Cross, FEMA, the CDC and the USDA. Disasters by county come from the FEMA National Risk Index, December 2025.'));
      foot.appendChild(UI.el('p', null, [UI.el('a', { href: 'privacy.html' }, 'Privacy'), ' · ', UI.el('a', { href: 'resources.html' }, 'Every source'), ' · ',
        UI.el('a', { href: 'https://radioelmer.org', target: '_blank', rel: 'noopener' }, 'Radio Elmer'), ' · ',
        UI.el('a', { href: 'https://thelandfinder.org', target: '_blank', rel: 'noopener' }, 'Land Finder'), ' · ',
        UI.el('a', { href: 'https://groundworkpath.org', target: '_blank', rel: 'noopener' }, 'Groundwork')]));
      foot.appendChild(UI.el('p', null, 'This is a plain checklist, not medical, legal or money advice. In an emergency, call 911.'));
      /* the Homestead Ready family line: same words on every Homestead Ready tool */
      foot.appendChild(UI.el('p', { class: 'hr-family' }, ['Part of ', UI.el('a', { href: 'https://homesteadready.org/' }, 'Homestead Ready'),
        ', free tools for land, homesteading, health, readiness and radio. ',
        UI.el('a', { href: 'https://www.facebook.com/groups/homesteadready', rel: 'noopener' }, 'Join the Facebook group'), '.']));
    }
  };

  /* ---------- bits used on several pages ---------- */
  UI.areaName = function (id) { for (var i = 0; i < RD.AREAS.length; i++) if (RD.AREAS[i].id === id) return RD.AREAS[i].name; return id; };
  UI.hazardName = function (id) { for (var i = 0; i < RD.HAZARDS.length; i++) if (RD.HAZARDS[i].id === id) return RD.HAZARDS[i].name; return id; };
  UI.costChip = function (t) {
    var label = RD.COST[t.cost].label;
    return UI.el('span', { class: 'chip' + (t.cost === 0 ? ' free' : '') }, label);
  };
  UI.link = function (key) {
    var l = RD.LINKS[key];
    if (!l) return null;
    return UI.el('li', null, [UI.el('a', { href: l.url, target: '_blank', rel: 'noopener' }, l.title), ' ', UI.el('small', null, l.by)]);
  };
  UI.ring = function (score, label) {
    var r = 70, c = 2 * Math.PI * r;
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg'); svg.setAttribute('viewBox', '0 0 168 168'); svg.setAttribute('aria-hidden', 'true');
    [['trk', c], ['val', c * (1 - score / 100)]].forEach(function (x) {
      var ci = document.createElementNS(ns, 'circle');
      ci.setAttribute('cx', 84); ci.setAttribute('cy', 84); ci.setAttribute('r', r); ci.setAttribute('fill', 'none'); ci.setAttribute('stroke-width', 14);
      ci.setAttribute('class', x[0]);
      if (x[0] === 'val') { ci.setAttribute('stroke-dasharray', c); ci.setAttribute('stroke-dashoffset', x[1]); }
      svg.appendChild(ci);
    });
    return UI.el('div', { class: 'ring', role: 'img', 'aria-label': (label || 'Readiness') + ' ' + score + ' out of 100' },
      [svg, UI.el('div', { class: 'num' }, [UI.el('b', null, String(score)), UI.el('span', null, 'of 100')])]);
  };
  UI.fill = function (s, app) { return E.fill(s, app.ctx); };

  /* ---------- load his state ---------- */
  function build(app, data) {
    app.data = data;
    var list = data.assessments || [];
    app.latest = list.length ? list[list.length - 1] : null;
    app.first = list.length ? list[0] : null;
    app.answers = (data.profile && data.profile.answers) || (app.latest && app.latest.answers) || null;
    var prog = {};
    (data.progress || []).forEach(function (p) { prog[p.task_id] = p; });
    app.state = { have: app.latest ? app.latest.have : [], taken_at: app.latest ? app.latest.taken_at : null, progress: prog };
    app.ctx = E.context(app.answers || {});
    app.scores = E.scores(app.ctx, app.state);
    return app;
  }

  /* boot({ auth: true, assessment: true }): signs the page in, or sends him to the right page. */
  UI.boot = function (opts) {
    opts = opts || {};
    UI.chrome();
    var store = RD.store();
    var app = { store: store };
    if (!store) {
      var m = UI.$('main');
      if (m) { UI.clear(m); m.appendChild(UI.el('div', { class: 'card' }, UI.el('p', null, 'Accounts are not switched on yet on this copy of Prepare Me. Check back soon.'))); }
      return Promise.resolve(null);
    }
    if (store.kind === 'local') {
      var main = UI.$('main');
      if (main) main.insertBefore(UI.el('p', { class: 'localnote' }, 'Local preview: rows are kept in this browser only. Any email signs in.'), main.firstChild);
    }
    return store.session().then(function (s) {
      app.session = s;
      var a = UI.$('acctLink'); if (a) a.textContent = s ? 'Account' : 'Sign in';
      if (!s) {
        if (opts.auth) { location.replace('index.html'); return null; }
        return app;
      }
      return store.loadAll().then(function (data) {
        build(app, data);
        if (opts.assessment && !app.latest) { location.replace('start.html'); return null; }
        app.reload = function () { return store.loadAll().then(function (d) { return build(app, d); }); };
        return app;
      });
    }).catch(function (e) {
      var m = UI.$('main');
      if (m) m.appendChild(UI.el('div', { class: 'card' }, UI.el('p', null, 'Could not load your plan: ' + (e.message || e) + '. Try again in a minute.')));
      return null;
    });
  };

  /* mark a step done, put it off, or check one of its parts */
  UI.setProgress = function (app, taskId, patch) {
    return app.store.setProgress(app.session.id, taskId, patch).then(function () { return app.reload(); });
  };
})();
