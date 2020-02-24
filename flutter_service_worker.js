'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "01a45ad01279c3c31e4917fcff9e44c8",
"/main.dart.js": "452a38149011344210ed6e950ac74b6d",
"/assets/LICENSE": "569a5a697ad2d4aea564742eadd9bee9",
"/assets/images/Mapa.png": "862e3a9adb1b1b5e67a2120ac9e62650",
"/assets/AssetManifest.json": "0909b319eee410f41269227417a21592",
"/assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
