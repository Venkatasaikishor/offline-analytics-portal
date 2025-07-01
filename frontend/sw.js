const CACHE_NAME = 'analytics-portal-v1';
const urlsToCache = [
  '/',
  '/page2',
  '/page3',
  '/page4',
  '/page5',
  '/admin',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('sync', event => {
  if (event.tag === 'sync-events') {
    event.waitUntil(syncEvents());
  }
});

async function syncEvents() {
  // Note: In a real implementation, you would sync events from localForage to the backend
  // This requires the syncEvents function to be available in the service worker scope
}
