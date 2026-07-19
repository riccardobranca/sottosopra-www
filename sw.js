/* Kill-switch service worker (cintura di sicurezza post-migrazione 2026-07-19).
 * Se un browser ha ancora registrato un service worker del VECCHIO sito a questo
 * path, al primo update-check scarica QUESTO file (i browser bypassano la cache
 * HTTP per lo script del SW e lo confrontano byte-per-byte, cap 24h) e:
 *   1) si attiva subito (skipWaiting),
 *   2) si DISINSTALLA (unregister),
 *   3) ricarica le pagine controllate → l'utente vede il nuovo sito.
 * Se nessun SW è registrato qui, il file resta inerte: nessuno lo scarica.
 * Pattern canonico NekR/self-destroying-sw, raccomandato da Google Workbox. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister()
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => clients.forEach((client) => client.navigate(client.url)))
  );
});
