/* Prepare Me: checks that no guide or step copies wording from its sources.
   Downloads every source page (data/links.js) used by a step or a guide, and reports any run of 8 or more words in a row
   that matches a source page word for word. Facts belong to everyone; the wording in Prepare Me must be its own.
     node scripts/check_copying.js [cache folder]
   PDF sources: put their text next to the cache as <link id>.txt to include them (any PDF-to-text tool works).
   Run it after adding or changing guides, before they go live. Exit code 1 when anything matches. */
'use strict';
var fs = require('fs'), path = require('path'), os = require('os');
var root = path.join(__dirname, '..');
['data/links.js', 'data/tasks.js', 'data/howto.js', 'data/cards.js'].forEach(function (f) { require(path.join(root, f)); });
var RD = globalThis.RD, N = 8;
var cache = process.argv[2] || path.join(os.tmpdir(), 'prepare-me-sources');
fs.mkdirSync(cache, { recursive: true });

/* the names of the groups we credit, and official program and book titles, are names, not copied wording: leave them out */
var TITLES = ['emergency assistance for livestock, honeybees, and farm-raised fish', 'usda complete guide to home canning', 'low income home energy assistance program'];
var NAMES = Object.keys(RD.LINKS).map(function (k) { return RD.LINKS[k].by.toLowerCase(); }).concat(TITLES).filter(function (v, i, a) { return a.indexOf(v) === i && / /.test(v); }).sort(function (a, b) { return b.length - a.length; });
function words(s) { s = s.toLowerCase(); NAMES.forEach(function (n) { s = s.split(n).join(' '); }); return s.replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean); }
function text(h) {
  return h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>/gi, ' ').replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/&#8217;|&rsquo;|&#39;/g, "'").replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ');
}

var keys = {};
Object.keys(RD.HOWTO).forEach(function (id) { RD.HOWTO[id].sources.forEach(function (k) { keys[k] = 1; }); });
RD.TASKS.forEach(function (t) { t.links.forEach(function (k) { keys[k] = 1; }); });
keys = Object.keys(keys);

async function fetchAll() {
  var i = 0, missed = [];
  async function one(k) {
    var f = path.join(cache, k + '.txt');
    if (fs.existsSync(f)) return;
    try {
      var c = new AbortController(), timer = setTimeout(function () { c.abort(); }, 25000);
      var r = await fetch(RD.LINKS[k].url, { signal: c.signal, headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131 Safari/537.36' } });
      clearTimeout(timer);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      if (/pdf/.test(r.headers.get('content-type') || '')) throw new Error('PDF: add its text as ' + k + '.txt');
      fs.writeFileSync(f, text(await r.text()));
    } catch (e) { missed.push(k + ' (' + (e.message || e) + ')'); }
  }
  await Promise.all([0, 1, 2, 3, 4, 5, 6, 7].map(async function () { while (i < keys.length) await one(keys[i++]); }));
  return missed;
}

(async function () {
  var missed = await fetchAll();
  var idx = new Map();
  fs.readdirSync(cache).filter(function (f) { return /\.txt$/.test(f); }).forEach(function (f) {
    var w = words(fs.readFileSync(path.join(cache, f), 'utf8'));
    for (var i = 0; i + N <= w.length; i++) { var g = w.slice(i, i + N).join(' '); if (!idx.has(g)) idx.set(g, f.slice(0, -4)); }
  });
  var units = [];
  Object.keys(RD.HOWTO).forEach(function (id) {
    var h = RD.HOWTO[id];
    units.push([id, h.intro]);
    h.parts.forEach(function (p) { (p.items || []).forEach(function (x) { units.push([id, x]); }); (p.rows || []).forEach(function (r) { r.forEach(function (c) { units.push([id, c]); }); }); if (p.note) units.push([id, p.note]); });
    (h.mistakes || []).forEach(function (x) { units.push([id, x]); });
  });
  RD.TASKS.forEach(function (t) { ['title', 'have', 'who', 'when', 'why', 'done'].forEach(function (k) { units.push([t.id, t[k]]); }); t.steps.forEach(function (x) { units.push([t.id, x]); }); });
  (RD.CARDS || []).forEach(function (c) { units.push(['card ' + c.id, c.q + ' ' + c.a]); });
  var hits = 0;
  units.forEach(function (u) {
    var w = words(u[1]);
    for (var i = 0; i + N <= w.length; i++) {
      var g = w.slice(i, i + N).join(' ');
      if (idx.has(g)) { hits++; console.log('COPIED  ' + u[0] + '  [' + idx.get(g) + ']  "' + g + '…"  in: ' + u[1]); break; }
    }
  });
  console.log(keys.length - missed.length + ' of ' + keys.length + ' sources read' + (missed.length ? '. Not read: ' + missed.join('; ') : '') + '.');
  console.log(hits ? hits + ' lines share 8 or more words in a row with a source. Reword them.' : 'No line shares 8 or more words in a row with any source that was read.');
  process.exit(hits ? 1 : 0);
})();
