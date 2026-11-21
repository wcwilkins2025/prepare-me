/* Prepare Me: phone alerts. The switch on the account page that turns alerts on for this phone, the test button,
   his alert choices, and the iPhone note. The service worker that shows the alerts is sw.js; the server side is
   supabase/schema.sql (push_* tables and functions) and supabase/functions/push.
   Turning alerts on keeps a random read key in this browser; only its SHA-256 goes to Prepare Me. The phone shows
   an alert's text only after proving it holds that key, so the push services never see what an alert says. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};
  var A = RD.alerts = {};

  /* ---------- this browser's own storage for the read key (sw.js reads the same store) ---------- */
  function kv(mode, fn) {
    return new Promise(function (ok, no) {
      var rq = indexedDB.open('prepare-me-push', 1);
      rq.onupgradeneeded = function () { rq.result.createObjectStore('kv'); };
      rq.onerror = function () { no(rq.error); };
      rq.onsuccess = function () {
        var tx = rq.result.transaction('kv', mode), st = tx.objectStore('kv'), out;
        var r = fn(st);
        if (r) r.onsuccess = function () { out = r.result; };
        tx.oncomplete = function () { ok(out); };
        tx.onerror = function () { no(tx.error); };
      };
    });
  }
  A.loadKey = function () { return kv('readonly', function (s) { return s.get('push'); }).catch(function () { return null; }); };
  A.saveKey = function (v) { return kv('readwrite', function (s) { return s.put(v, 'push'); }); };
  A.dropKey = function () { return kv('readwrite', function (s) { return s.delete('push'); }).catch(function () {}); };

  function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return (b < 16 ? '0' : '') + b.toString(16); }).join(''); }
  A.newKey = function () { var b = new Uint8Array(32); crypto.getRandomValues(b); return hex(b); };
  A.sha256 = function (s) { return crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)).then(hex); };
  A.keyBytes = function (b64) {
    var s = b64.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '=';
    var bin = atob(s), out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  };

  /* ---------- the panel ---------- */
  A.panel = function (app, box) {
    var UI = RD.ui, el = UI.el;
    var cfg = root.RD_CONFIG || {};
    var fnUrl = cfg.supabaseUrl ? cfg.supabaseUrl + '/functions/v1/push' : null;
    var c = app.store.kind === 'online' ? app.store.c : null;

    var ua = navigator.userAgent || '';
    var isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var standalone = (root.matchMedia && root.matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
    var supported = 'serviceWorker' in navigator && 'PushManager' in root && 'Notification' in root && root.isSecureContext;

    UI.clear(box);
    box.appendChild(el('h3', null, 'Phone alerts'));
    box.appendChild(el('p', null, 'Get an alert on this phone when the National Weather Service puts out a warning for your county, when your weekly check-in is due, and when someone replies to you in the forum. Tap an alert to see what it says and the steps that fit it.'));
    var status = el('p', { class: 'flash', 'aria-live': 'polite' });
    function say(t) { status.textContent = t || ''; }

    var iphone = el('div', { class: 'note-ios' }, [
      el('h4', null, 'On iPhone or iPad'),
      el('ol', null, [
        el('li', null, 'Use iOS 16.4 or newer.'),
        el('li', null, 'Open preparemeapp.org in Safari. Tap Share, then Add to Home Screen.'),
        el('li', null, 'Open Prepare Me from the new icon, sign in, and come back to this page.'),
        el('li', null, 'Tap Turn on alerts, then Allow.')
      ]),
      el('p', { class: 'muted' }, 'Alerts on iPhone only work from the Home Screen icon, not from a Safari tab.')
    ]);

    if (!c) {
      box.appendChild(el('p', { class: 'muted' }, 'Alerts work on the live site, not in this local preview.'));
      return;
    }
    if (!supported) {
      box.appendChild(el('p', null, isIOS && !standalone
        ? 'On iPhone, alerts work once Prepare Me is on your Home Screen. The steps are below.'
        : 'This browser cannot get alerts. Chrome, Edge, Firefox, or Safari on a recent phone or computer can.'));
      if (isIOS) box.appendChild(iphone);
      return;
    }

    var toggle = el('button', { class: 'btn', type: 'button', id: 'pushToggle' }, 'Turn on alerts on this phone');
    var test = el('button', { class: 'btn ghost', type: 'button', id: 'pushTest', hidden: true }, 'Send a test alert');
    box.appendChild(el('div', { class: 'actions' }, [toggle, test]));
    box.appendChild(status);

    /* his choices: one row for him, on every phone */
    var CHOICES = [['warnings', 'Weather warnings for my county'], ['watches', 'Weather watches too (a warning is more urgent)'],
      ['checkin', 'My weekly check-in'], ['forum', 'Replies to me in the forum']];
    var prefs = { warnings: true, watches: false, checkin: true, forum: true };
    var boxes = {};
    var fs = el('fieldset', { class: 'prefs' }, [el('legend', null, 'Alert me about')]);
    CHOICES.forEach(function (ch) {
      var cb = el('input', { type: 'checkbox', id: 'pref-' + ch[0] });
      cb.addEventListener('change', function () {
        var row = { user_id: app.session.id }; row[ch[0]] = cb.checked;
        c.from('alert_prefs').upsert(row, { onConflict: 'user_id' }).then(function (r) {
          say(r.error ? 'Could not save that: ' + r.error.message : 'Saved.');
        });
      });
      boxes[ch[0]] = cb;
      fs.appendChild(el('label', { class: 'check' }, [cb, el('span', null, ch[1])]));
    });
    box.appendChild(fs);
    function paintPrefs() { Object.keys(boxes).forEach(function (k) { boxes[k].checked = !!prefs[k]; }); }
    paintPrefs();
    c.from('alert_prefs').select('warnings, watches, checkin, forum').maybeSingle().then(function (r) {
      if (r.data) { prefs = r.data; paintPrefs(); }
    });

    box.appendChild(el('p', { class: 'muted' }, ['Weather alerts come from the National Weather Service for the county in your assessment. Follow what local officials tell you. In an emergency, call 911. ',
      el('a', { href: 'alert.html' }, 'Your recent alerts.')]));
    if (isIOS) box.appendChild(iphone);

    var reg = null, publicKey = null;
    function paint(on) {
      toggle.textContent = on ? 'Turn off alerts on this phone' : 'Turn on alerts on this phone';
      toggle.className = on ? 'btn ghost' : 'btn';
      toggle.dataset.on = on ? '1' : '';
      test.hidden = !on;
    }
    function explain(e) {
      if (Notification.permission === 'denied') return 'Alerts are blocked for Prepare Me in this browser’s settings. Allow notifications for it there, then try again.';
      if (e && e.message === 'not_set_up') return 'Alerts are not switched on for Prepare Me yet. Check back soon.';
      if (e && e.message === 'permission') return 'Alerts stay off. You can turn them on any time.';
      return 'Could not change alerts here: ' + ((e && e.message) || e) + '.';
    }
    function rpc(name, args) { return c.rpc(name, args || {}).then(function (r) { if (r.error) throw new Error(r.error.message); return r.data; }); }

    /* tell Prepare Me about this phone, with a fresh read key */
    function register(sub) {
      var key = A.newKey(), tz = null;
      try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || null; } catch (e) {}
      return A.sha256(key).then(function (h) {
        return rpc('push_subscribe', { p_endpoint: sub.endpoint, p_read_hash: h, p_tz: tz });
      }).then(function () { return A.saveKey({ key: key, endpoint: sub.endpoint, user: app.session.id }); });
    }
    function turnOn() {
      say('Turning on.');
      return Notification.requestPermission().then(function (perm) {
        if (perm !== 'granted') throw new Error('permission');
        return reg.pushManager.getSubscription();
      }).then(function (sub) {
        return sub || reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: A.keyBytes(publicKey) });
      }).then(register).then(function () {
        paint(true);
        say('Alerts are on for this phone. Press Send a test alert to check.');
      });
    }
    function turnOff() {
      say('Turning off.');
      return reg.pushManager.getSubscription().then(function (sub) {
        if (!sub) return;
        var endpoint = sub.endpoint;
        return sub.unsubscribe().then(function () { return rpc('push_unsubscribe', { p_endpoint: endpoint }).catch(function () {}); });
      }).then(A.dropKey).then(function () { paint(false); say('Alerts are off for this phone.'); });
    }

    toggle.addEventListener('click', function () {
      toggle.disabled = true;
      (toggle.dataset.on ? turnOff() : turnOn())
        .catch(function (e) { paint(false); say(explain(e)); })
        .then(function () { toggle.disabled = false; });
    });
    test.addEventListener('click', function () {
      test.disabled = true;
      say('Sending a test.');
      rpc('push_test').then(function (queued) {
        if (!queued) { say('A test went out in the last minute. Wait a minute and try again.'); return; }
        /* send it now rather than at the next minute */
        return fetch(fnUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'send' }) })
          .then(function (r) { return r.json(); })
          .then(function (j) { say(j.sent ? 'Test sent. It should arrive in a few seconds.' : 'Test queued. It should arrive within a minute.'); },
            function () { say('Test queued. It should arrive within a minute.'); });
      }, function (e) { say(explain(e)); }).then(function () { test.disabled = false; });
    });

    paint(false);
    toggle.disabled = true;
    Promise.all([
      fetch(fnUrl, { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : {}; }, function () { return {}; }),
      navigator.serviceWorker.register('sw.js')
    ]).then(function (r) {
      reg = r[1];
      publicKey = r[0].ready && r[0].publicKey;
      if (!publicKey) { say(explain(new Error('not_set_up'))); return; }
      toggle.disabled = false;
      return Promise.all([reg.pushManager.getSubscription(), A.loadKey()]).then(function (x) {
        var sub = x[0], saved = x[1];
        var on = Boolean(sub) && Notification.permission === 'granted';
        paint(on);
        /* the browser can renew a phone's address, and a phone can change hands: keep Prepare Me's copy current */
        if (on && (!saved || saved.endpoint !== sub.endpoint || saved.user !== app.session.id)) register(sub).catch(function () {});
        if (!on && isIOS && !standalone) say('On iPhone, add Prepare Me to your Home Screen first and turn alerts on from that icon.');
      });
    }).catch(function (e) { say(explain(e)); });
  };
})(typeof window !== 'undefined' ? window : globalThis);
