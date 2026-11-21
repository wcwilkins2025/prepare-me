/* Make the key pair that signs phone alerts (VAPID). Run it yourself, once:
     node scripts/make_vapid.js
   It prints two values to paste into Supabase (Edge Functions > Secrets):
     VAPID_PUBLIC_KEY   the public key (safe to show; phones use it to subscribe)
     VAPID_PRIVATE_JWK  the private key (secret: paste it into Supabase and nowhere else)
   Nothing is saved to disk. Running it again makes a new pair, and every phone then has to turn alerts on again. */
'use strict';
(async function () {
  var kp = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  var pub = Buffer.from(await crypto.subtle.exportKey('raw', kp.publicKey)).toString('base64url');
  var jwk = await crypto.subtle.exportKey('jwk', kp.privateKey);
  console.log('VAPID_PUBLIC_KEY');
  console.log(pub);
  console.log('');
  console.log('VAPID_PRIVATE_JWK');
  console.log(JSON.stringify({ kty: jwk.kty, crv: jwk.crv, x: jwk.x, y: jwk.y, d: jwk.d }));
})();
