/* Prepare Me service worker: phone alerts only. It does not keep pages for offline use.
   The push that wakes it is empty on purpose. It asks Prepare Me what is new, proving it is this phone with the read
   key the alerts switch saved here (js/alerts.js), and shows that. If it cannot find out, it shows a plain
   "something new" alert instead, since a push must always show one. */
'use strict';
self.window = self;              // config.js sets window.RD_CONFIG
importScripts('config.js');
var CFG = self.RD_CONFIG || {};

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

var GENERIC = { kind: 'generic', title: 'Prepare Me', body: 'Something new is waiting for you. Open to read it.', url: 'index.html' };

/* the read key, kept in this browser's own storage (the same store js/alerts.js writes) */
function readKey() {
  return new Promise(function (ok) {
    var rq;
    try { rq = indexedDB.open('prepare-me-push', 1); } catch (e) { ok(null); return; }
    rq.onupgradeneeded = function () { rq.result.createObjectStore('kv'); };
    rq.onerror = function () { ok(null); };
    rq.onsuccess = function () {
      try {
        var g = rq.result.transaction('kv', 'readonly').objectStore('kv').get('push');
        g.onsuccess = function () { ok(g.result || null); };
        g.onerror = function () { ok(null); };
      } catch (e) { ok(null); }
    };
  });
}

function show(ev) {
  var urgent = ev.kind === 'warning';
  return self.registration.showNotification(ev.title, {
    body: ev.body || '', icon: 'icon-192.png', badge: 'icon-192.png',
    tag: ev.id ? 'pm-' + ev.kind + '-' + ev.id : 'pm-' + ev.kind,
    renotify: true, requireInteraction: urgent,
    data: { url: ev.url || 'index.html' }
  });
}

self.addEventListener('push', function (e) {
  e.waitUntil(
    Promise.all([self.registration.pushManager.getSubscription(), readKey()])
      .then(function (r) {
        var sub = r[0], saved = r[1];
        if (!sub || !saved || !saved.key || !CFG.supabaseUrl) throw new Error('no key');
        return fetch(CFG.supabaseUrl + '/rest/v1/rpc/push_latest', {
          method: 'POST', cache: 'no-store', redirect: 'error',
          headers: { apikey: CFG.supabaseKey, 'Content-Type': 'application/json' },
          body: JSON.stringify({ p_endpoint: sub.endpoint, p_read_key: saved.key })
        });
      })
      .then(function (r) { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then(function (list) {
        list = list || [];
        if (!list.length) return show(GENERIC);
        if (list.length <= 3) return Promise.all(list.map(show));
        var last = list[list.length - 1];
        return show({ kind: 'many', title: list.length + ' new alerts', body: 'Latest: ' + last.title + '. ' + last.body, url: last.url });
      })
      .catch(function () { return show(GENERIC); })
  );
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var target = new URL((e.notification.data && e.notification.data.url) || 'index.html', self.registration.scope).href;
  if (target.indexOf(self.registration.scope) !== 0) target = self.registration.scope;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (wins) {
    for (var i = 0; i < wins.length; i++) {
      var w = wins[i];
      if (w.url.indexOf(self.registration.scope) === 0 && 'focus' in w) {
        return w.navigate(target).then(function (x) { return (x || w).focus(); }, function () { return w.focus(); });
      }
    }
    return self.clients.openWindow(target);
  }));
});
