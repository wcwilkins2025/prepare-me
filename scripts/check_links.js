/* Check that every outside link in data/links.js loads. Run before every change goes out:
     node scripts/check_links.js
   A link passes when it ends on a 2xx page after redirects. Some sites refuse plain scripts, so the
   request looks like a normal browser. Exit code 1 if any link fails. */
'use strict';
require('../data/links.js');
var LINKS = globalThis.RD.LINKS;

/* Sites that refuse any script but load in a normal browser. Each was opened by hand in a browser on the date given. */
var BY_HAND = { 'redcross-class': '2026-11-16' };

var UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36';

async function check(key, link) {
  for (var attempt = 1; attempt <= 2; attempt++) {
    try {
      var ctl = new AbortController();
      var t = setTimeout(function () { ctl.abort(); }, 20000);
      var r = await fetch(link.url, { redirect: 'follow', signal: ctl.signal,
        headers: { 'User-Agent': UA, 'Accept': 'text/html,application/xhtml+xml,*/*;q=0.8', 'Accept-Language': 'en-US,en;q=0.9' } });
      clearTimeout(t);
      var body = await r.text();
      var title = (body.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '';
      title = title.replace(/\s+/g, ' ').trim().slice(0, 70);
      var soft = /not found|server error|apology|access denied|error 40|error 50/i.test(title + ' ' + r.url);
      if (r.ok && !soft) return { key: key, ok: true, status: r.status, final: r.url, title: title };
      if (attempt === 2) return { key: key, ok: false, status: soft ? 'soft' : r.status, final: r.url, title: title };
    } catch (e) {
      if (attempt === 2) return { key: key, ok: false, status: String(e.cause && e.cause.code || e.name || e) };
    }
  }
}

(async function () {
  var keys = Object.keys(LINKS);
  var results = [];
  for (var i = 0; i < keys.length; i += 6) {
    results = results.concat(await Promise.all(keys.slice(i, i + 6).map(function (k) { return check(k, LINKS[k]); })));
  }
  var bad = 0;
  results.forEach(function (r) {
    if (!r.ok && BY_HAND[r.key]) { console.log('hand ' + 'ok'.padEnd(4) + ' ' + r.key.padEnd(16) + ' refuses scripts; opened in a browser ' + BY_HAND[r.key]); return; }
    if (!r.ok) bad++;
    var moved = r.final && r.final.replace(/\/$/, '') !== LINKS[r.key].url.replace(/\/$/, '') ? '  -> ' + r.final : '';
    console.log((r.ok ? 'ok   ' : 'FAIL ') + String(r.status).padEnd(4) + ' ' + r.key.padEnd(16) + ' ' + (r.title || '') + moved);
  });
  console.log('\n' + (results.length - bad) + ' of ' + results.length + ' links load.');
  process.exit(bad ? 1 : 0);
})();
