const CACHE_ELEMENTS = [
  "./",
  "https://unpkg.com/react@17/umd/react.production.min.js",
  "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "./style.css",
  "./components/Contador.js",
];

const CACHE_NAME = "v1_cache_contador_react";

// Con esto ya no hace peticiones a internet a cada rato
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        cache
          .addAll(CACHE_ELEMENTS)
          .then(() => {
            self.skipWaiting();
          })
          .catch(console.log);
      })
      .then(() => {
        self.clients.claim();
      })
  );
});

const cacheWhitelist = [CACHE_NAME];

// Actualiza al caché más reciente
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cachesNames) => {
      return Promise.all(
        cachesNames.map((cacheName) => {
          return (
            cacheWhitelist.indexOf(cacheName) === -1 && caches.delete(cacheName)
          );
        })
      );
    })
  );
});

// Se activará cada que entremos a network all
// En caso de que no exista caché, lo atrapa con e.request
self.addEventListener("fetch", (e) => {
  e.respondWith(() => {
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request);
    });
  });
});
