const CACHE = 'awc-v1';
const FILES = [
  './angelic-warfare-prayer-app.html',
  './manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request);
    })
  );
});
