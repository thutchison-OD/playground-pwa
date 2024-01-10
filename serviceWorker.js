const reactPwaCache = "react-pwa-cache"
const assets = [
  "/index.html",
  "/src/App.tsx",
  "/src/main.tsx",
  "/src/main.css",
  "/src/layers.css",
  "/src/utilities.global.css",
  "/src/variables.global.css",
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.svg",
  "/pwa-192x192.png",
  "/pwa-512x512.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(reactPwaCache).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
