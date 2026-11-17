/* Prepare Me: where a man's rows live.
   Online, every read and write goes to Supabase, and the row rules in supabase/schema.sql keep each man to his own rows.
   Opened from localhost with no project in config.js, the same calls run against the browser's own storage, so every
   page can be checked before a change goes out. Each email signed in locally is its own person, kept apart. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};

  function iso() { return new Date().toISOString(); }
  function err(e) { var x = new Error(e && e.message ? e.message : String(e)); x.code = e && e.code; return x; }
  function clean(o, keys) { var r = {}; keys.forEach(function (k) { if (o[k] !== undefined) r[k] = o[k]; }); return r; }
  var PROGRESS_KEYS = ['status', 'steps', 'done_at', 'later_until'];

  /* ======================= Supabase ======================= */
  function Online(cfg) {
    /* 'implicit': the emailed link carries the sign-in in the address, so it works in whatever browser opens it.
       ('pkce' ties the link to the browser that asked for it, which fails when a phone's mail or Facebook app
       opens links in its own built-in browser.) supabase-js reads the address and then clears it. */
    this.c = root.supabase.createClient(cfg.supabaseUrl, cfg.supabaseKey, { auth: { persistSession: true, detectSessionInUrl: true, flowType: 'implicit' } });
    this.kind = 'online';
  }
  Online.prototype.session = function () {
    return this.c.auth.getSession().then(function (r) { var s = r.data.session; return s ? { id: s.user.id, email: s.user.email } : null; });
  };
  Online.prototype.signIn = function (email, back) {
    return this.c.auth.signInWithOtp({ email: email, options: { emailRedirectTo: back } }).then(function (r) { if (r.error) throw err(r.error); return { sent: true }; });
  };
  Online.prototype.signOut = function () { return this.c.auth.signOut(); };
  Online.prototype.onAuth = function (cb) { this.c.auth.onAuthStateChange(function (ev, s) { cb(s ? { id: s.user.id, email: s.user.email } : null); }); };
  Online.prototype.deleteMe = function () {
    var c = this.c;
    return c.rpc('delete_me').then(function (r) { if (r.error) throw err(r.error); return c.auth.signOut(); });
  };
  Online.prototype.loadAll = function () {
    var c = this.c;
    function q(p) { return p.then(function (r) { if (r.error) throw err(r.error); return r.data; }); }
    return Promise.all([
      q(c.from('profiles').select('answers, created_at, updated_at').maybeSingle()),
      q(c.from('assessments').select('id, taken_at, answers, have, overall, areas, hazards').order('taken_at', { ascending: true })),
      q(c.from('progress').select('task_id, status, steps, done_at, later_until, updated_at')),
      q(c.from('checkins').select('id, week_of, created_at, overall, areas, done_count, answers').order('created_at', { ascending: true }))
    ]).then(function (r) { return { profile: r[0], assessments: r[1] || [], progress: r[2] || [], checkins: r[3] || [] }; });
  };
  Online.prototype.saveAssessment = function (userId, row) {
    var c = this.c;
    return c.from('assessments').insert(Object.assign({ user_id: userId }, row)).select().single().then(function (r) {
      if (r.error) throw err(r.error);
      return c.from('profiles').upsert({ user_id: userId, answers: row.answers }, { onConflict: 'user_id' }).then(function (r2) { if (r2.error) throw err(r2.error); return r.data; });
    });
  };
  Online.prototype.saveAnswers = function (userId, answers) {
    return this.c.from('profiles').upsert({ user_id: userId, answers: answers }, { onConflict: 'user_id' }).then(function (r) { if (r.error) throw err(r.error); });
  };
  Online.prototype.setProgress = function (userId, taskId, patch) {
    var row = Object.assign({ user_id: userId, task_id: taskId }, clean(patch, PROGRESS_KEYS));
    return this.c.from('progress').upsert(row, { onConflict: 'user_id,task_id' }).select().single().then(function (r) { if (r.error) throw err(r.error); return r.data; });
  };
  Online.prototype.saveCheckin = function (userId, row) {
    return this.c.from('checkins').upsert(Object.assign({ user_id: userId }, row), { onConflict: 'user_id,week_of' }).select().single().then(function (r) { if (r.error) throw err(r.error); return r.data; });
  };

  /* ======================= this browser only (local preview) ======================= */
  var KEY = 'prepare-me-local-v1';
  function Local() { this.kind = 'local'; this.listeners = []; }
  Local.prototype.read = function () { try { return JSON.parse(localStorage.getItem(KEY)) || { users: {}, session: null }; } catch (e) { return { users: {}, session: null }; } };
  Local.prototype.write = function (db) { localStorage.setItem(KEY, JSON.stringify(db)); };
  Local.prototype.me = function (db) { return db.session && db.users[db.session]; };
  Local.prototype.session = function () {
    var db = this.read(), u = this.me(db);
    return Promise.resolve(u ? { id: u.id, email: db.session } : null);
  };
  Local.prototype.signIn = function (email) {
    var db = this.read(); email = String(email).trim().toLowerCase();
    if (!db.users[email]) db.users[email] = { id: 'local-' + Math.random().toString(36).slice(2, 10), profile: null, assessments: [], progress: [], checkins: [], next: 1 };
    db.session = email; this.write(db);
    var s = { id: db.users[email].id, email: email };
    this.listeners.forEach(function (cb) { cb(s); });
    return Promise.resolve({ signedIn: true });
  };
  Local.prototype.signOut = function () { var db = this.read(); db.session = null; this.write(db); this.listeners.forEach(function (cb) { cb(null); }); return Promise.resolve(); };
  Local.prototype.onAuth = function (cb) { this.listeners.push(cb); };
  Local.prototype.deleteMe = function () { var db = this.read(); delete db.users[db.session]; db.session = null; this.write(db); return Promise.resolve(); };
  Local.prototype.loadAll = function () {
    var u = this.me(this.read());
    if (!u) return Promise.reject(new Error('not signed in'));
    return Promise.resolve(JSON.parse(JSON.stringify({ profile: u.profile, assessments: u.assessments, progress: u.progress, checkins: u.checkins })));
  };
  Local.prototype.change = function (fn) {
    var db = this.read(), u = this.me(db);
    if (!u) return Promise.reject(new Error('not signed in'));
    var out = fn(u); this.write(db);
    return Promise.resolve(JSON.parse(JSON.stringify(out === undefined ? null : out)));
  };
  Local.prototype.saveAssessment = function (userId, row) {
    return this.change(function (u) {
      var a = Object.assign({ id: u.next++, taken_at: iso() }, row);
      u.assessments.push(a);
      u.profile = { answers: row.answers, created_at: (u.profile && u.profile.created_at) || iso(), updated_at: iso() };
      return a;
    });
  };
  Local.prototype.saveAnswers = function (userId, answers) {
    return this.change(function (u) { u.profile = { answers: answers, created_at: (u.profile && u.profile.created_at) || iso(), updated_at: iso() }; });
  };
  Local.prototype.setProgress = function (userId, taskId, patch) {
    return this.change(function (u) {
      var p = u.progress.filter(function (x) { return x.task_id === taskId; })[0];
      if (!p) { p = { task_id: taskId, status: 'open', steps: [], done_at: null, later_until: null }; u.progress.push(p); }
      Object.assign(p, clean(patch, PROGRESS_KEYS), { updated_at: iso() });
      return p;
    });
  };
  Local.prototype.saveCheckin = function (userId, row) {
    return this.change(function (u) {
      var c = u.checkins.filter(function (x) { return x.week_of === row.week_of; })[0];
      if (c) Object.assign(c, row); else { c = Object.assign({ id: u.next++, created_at: iso() }, row); u.checkins.push(c); }
      return c;
    });
  };

  /* ======================= pick one ======================= */
  var chosen;
  RD.isLocalHost = function () { return /^(localhost|127\.0\.0\.1|\[::1\])$/.test(root.location ? root.location.hostname : ''); };
  RD.store = function () {
    if (chosen !== undefined) return chosen;
    var cfg = root.RD_CONFIG || {};
    if (cfg.supabaseUrl && cfg.supabaseKey && root.supabase) chosen = new Online(cfg);
    else if (RD.isLocalHost()) chosen = new Local();
    else chosen = null;
    return chosen;
  };
  RD.Local = Local;   // for the tests
})(typeof window !== 'undefined' ? window : globalThis);
