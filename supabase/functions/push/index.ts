// @ts-nocheck
// Prepare Me phone alerts: the sender. A Supabase Edge Function, run each minute by pg_cron (supabase/cron.sql).
//
//   GET  .../functions/v1/push                 { ready, publicKey }: whether alerts are set up, and the public VAPID key
//   POST .../functions/v1/push {action:'tick'} every minute: asks the National Weather Service for active warnings and
//                                              watches (at most every 150 seconds), queues check-in reminders, then sends
//   POST .../functions/v1/push {action:'send'} sends whatever is waiting now (the test button calls this)
//
// Nobody needs to sign in to call it, and it takes no input that changes who gets what: it only does the work that is
// due anyway, and push_nws_due() stops anyone from making it ask the Weather Service more often.
//
// Alerts carry no text. The alert is recorded in push_events (supabase/schema.sql), then each phone gets an empty push
// signed with the site's VAPID key. The phone's service worker (sw.js) wakes, asks push_latest() what is new with its
// own read key, and shows it. Apple, Google and Mozilla only ever see that "something happened".
//
// Secrets (Edge Functions > Secrets): VAPID_PUBLIC_KEY and VAPID_PRIVATE_JWK (a P-256 private key as JWK).
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are provided by Supabase.
// Deploy with "Enforce JWT verification" OFF (supabase/config.toml says the same for the command line).
import { createClient } from 'jsr:@supabase/supabase-js@2';

// ---- pure: begin (tests/run_tests.js loads this part in Node) ----
const NWS_URL = 'https://api.weather.gov/alerts/active?status=actual&message_type=alert,update';
const NWS_HEADERS = { 'User-Agent': 'PrepareMe/1.0 (https://preparemeapp.org)', Accept: 'application/geo+json' };
const SUBJECT = 'https://preparemeapp.org';

// Only real browser push services, so a stored address can never point the sender somewhere else.
// (The push_subs table checks the same list.)
const PUSH_HOSTS = [/^fcm\.googleapis\.com$/, /^updates\.push\.services\.mozilla\.com$/, /\.push\.services\.mozilla\.com$/,
  /^web\.push\.apple\.com$/, /\.push\.apple\.com$/, /\.notify\.windows\.com$/];
function allowedEndpoint(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' && !u.port && PUSH_HOSTS.some((r) => r.test(u.hostname));
  } catch (e) { return false; }
}

// Which NWS products become alerts. Every warning and watch, plus a few official notices that ask people to act.
// Product names: https://www.weather.gov/help-map (and the CAP event list).
const EXTRA_WARNINGS = /^(Civil Emergency Message|Evacuation Immediate|Local Area Emergency|Shelter In Place Warning)$/;
const SKIP = /^(Child Abduction Emergency|Blue Alert|Administrative Message|Test)$/;
function nwsKind(event) {
  event = String(event || '').trim();
  if (!event || SKIP.test(event)) return null;
  if (/ Warning$/.test(event) || EXTRA_WARNINGS.test(event)) return 'warning';
  if (/ Watch$/.test(event)) return 'watch';
  return null;
}

// SAME codes are '0' + the county FIPS ('048201' is Harris County, Texas). A first digit other than 0 means part of
// the county, which still counts. Codes 57 to 77 that are not a state or territory are marine areas, with no homes.
const MARINE = ['57', '58', '59', '61', '65', '73', '74', '75', '77'];
function countiesFrom(same) {
  const out = [];
  (same || []).forEach((c) => {
    c = String(c);
    if (/^\d{6}$/.test(c) && MARINE.indexOf(c.slice(1, 3)) < 0 && out.indexOf(c.slice(1)) < 0) out.push(c.slice(1));
  });
  return out;
}

function cut(s, n) {
  s = String(s || '').replace(/\r/g, '').trim();
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

// The active-alerts GeoJSON from api.weather.gov, turned into what push_queue_weather() takes.
// An update keeps the first message's id as its ref, so a man hears about each warning once.
function nwsToAlerts(geo, now) {
  now = now || Date.now();
  const out = [];
  ((geo && geo.features) || []).forEach((f) => {
    const p = (f && f.properties) || {};
    const kind = nwsKind(p.event);
    if (!kind) return;
    if (p.status && p.status !== 'Actual') return;
    if (p.messageType === 'Cancel') return;
    const ends = p.ends || p.expires;
    if (ends && Date.parse(ends) < now) return;
    const fips = countiesFrom(p.geocode && p.geocode.SAME);
    if (!fips.length) return;
    const refs = (p.references || []).slice().sort((a, b) => Date.parse(a.sent) - Date.parse(b.sent));
    const first = refs.length && refs[0].identifier ? refs[0].identifier : (p.id || f.id);
    if (!first) return;
    const when = p.ends || p.expires;
    out.push({
      ref: cut(p.event + '|' + first, 300),
      kind,
      event: p.event,
      fips,
      title: cut(p.event, 80),
      body: cut(p.headline || p.areaDesc || '', 160),
      detail: {
        event: p.event, headline: cut(p.headline, 300), area: cut(p.areaDesc, 600),
        description: cut(p.description, 5000), instruction: cut(p.instruction, 2500),
        onset: p.onset || p.effective || null, ends: when || null, sender: cut(p.senderName, 120),
        severity: p.severity || null, urgency: p.urgency || null, certainty: p.certainty || null,
        nws_id: cut(p.id || f.id, 300)
      }
    });
  });
  return out;
}

function b64url(bytes) {
  let s = '';
  for (const b of new Uint8Array(bytes)) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
const enc = (o) => b64url(new TextEncoder().encode(JSON.stringify(o)));

async function importVapidKey(privateJwk) {
  const jwk = typeof privateJwk === 'string' ? JSON.parse(privateJwk) : privateJwk;
  return crypto.subtle.importKey('jwk', { kty: 'EC', crv: 'P-256', x: jwk.x, y: jwk.y, d: jwk.d, ext: true },
    { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
}

// One VAPID token per push service, good for 12 hours.
async function vapidHeader(key, publicKey, endpoint, nowSec) {
  const aud = new URL(endpoint).origin;
  const exp = (nowSec || Math.floor(Date.now() / 1000)) + 12 * 3600;
  const unsigned = enc({ typ: 'JWT', alg: 'ES256' }) + '.' + enc({ aud, exp, sub: SUBJECT });
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(unsigned));
  return 'vapid t=' + unsigned + '.' + b64url(sig) + ', k=' + publicKey;
}
// ---- pure: end ----

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type, apikey, authorization, x-client-info'
};
const json = (o, status) => new Response(JSON.stringify(o), { status: status || 200, headers: { ...CORS, 'Content-Type': 'application/json' } });

const PUBLIC_KEY = Deno.env.get('VAPID_PUBLIC_KEY') || '';
const PRIVATE_JWK = Deno.env.get('VAPID_PRIVATE_JWK') || '';
const ready = () => Boolean(PUBLIC_KEY && PRIVATE_JWK);

let keyCache = null;
async function signingKey() { return keyCache || (keyCache = await importVapidKey(PRIVATE_JWK)); }

function db() {
  return createClient(Deno.env.get('SUPABASE_URL'), Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'), { auth: { persistSession: false } });
}
async function rpc(c, name, args) {
  const r = await c.rpc(name, args || {});
  if (r.error) throw new Error(name + ': ' + r.error.message);
  return r.data;
}

// Ask the Weather Service what is active, and queue alerts for every man in a covered county.
async function weather(c) {
  if (!(await rpc(c, 'push_nws_due'))) return { asked: false };
  const res = await fetch(NWS_URL, { headers: NWS_HEADERS });
  if (!res.ok) return { asked: true, status: res.status };
  const alerts = nwsToAlerts(await res.json());
  let queued = 0;
  for (let i = 0; i < alerts.length; i += 100) queued += await rpc(c, 'push_queue_weather', { p_alerts: alerts.slice(i, i + 100) });
  return { asked: true, active: alerts.length, queued };
}

// Wake every phone that has something new. Phones the push service says are gone are removed.
async function send(c) {
  if (!ready()) return { sent: 0, gone: 0 };
  const subs = (await rpc(c, 'push_claim')) || [];
  const ok = [], gone = [];
  const key = await signingKey();
  await Promise.all(subs.map(async (s) => {
    if (!allowedEndpoint(s.endpoint)) { gone.push(s.sub_id); return; }
    try {
      const res = await fetch(s.endpoint, {
        method: 'POST',
        headers: { Authorization: await vapidHeader(key, PUBLIC_KEY, s.endpoint), TTL: '86400', Urgency: 'high', 'Content-Length': '0' }
      });
      if (res.status === 404 || res.status === 410) gone.push(s.sub_id);
      else if (res.ok) ok.push(s.sub_id);
    } catch (e) { /* try again next time the man has something new */ }
  }));
  if (ok.length || gone.length) await rpc(c, 'push_result', { p_ok: ok, p_gone: gone });
  return { sent: ok.length, gone: gone.length };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
  if (req.method === 'GET') return json({ ready: ready(), publicKey: PUBLIC_KEY || null });
  if (req.method !== 'POST') return json({ error: 'method' }, 405);
  let j = {};
  try { j = await req.json(); } catch (e) {}
  const c = db();
  try {
    if (j.action === 'tick') {
      const w = await weather(c).catch((e) => ({ error: String(e.message || e) }));
      const checkins = await rpc(c, 'push_queue_checkins');
      return json({ weather: w, checkins, ...(await send(c)) });
    }
    if (j.action === 'send') return json(await send(c));
    return json({ error: 'action' }, 400);
  } catch (e) {
    return json({ error: String(e.message || e) }, 500);
  }
});
