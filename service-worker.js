const CACHE_NAME = 'feed-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // Aquí puedes agregar más recursos para cachear si los tienes
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
