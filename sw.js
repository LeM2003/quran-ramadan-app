var CACHE_NAME = 'muslim-app-v2';
var STATIC_ASSETS = [
  '/',
  '/index.html',
  '/quran.html',
  '/duas.html',
  '/adhkar.html',
  '/style.css',
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap'
];

// Install
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Fetch
self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // API & Audio — network first, cache fallback
  if (url.hostname === 'api.alquran.cloud' || url.hostname === 'cdn.islamic.network') {
    event.respondWith(
      fetch(event.request).then(function(response) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(function() {
        return caches.match(event.request);
      })
    );
    return;
  }

  // Static — cache first, network fallback
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request);
    })
  );
});
