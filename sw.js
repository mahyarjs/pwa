// const staticItems = ["/", "/users.html"];

// self.addEventListener("install", (e) => {
//   e.waitUntil(
//     caches.open("static").then((cache) => {
//       cache.addAll(staticItems);
//     })
//   );
// });
// self.addEventListener("fetch", (e) => {
//   e.respondWith(
//     caches.match(e.request).then(
//       (res) =>
//         res ||
//         fetch(e.request).then((fetchRes) =>
//           caches.open("dynamic").then((cache) => {
//             cache.put(e.request, fetchRes);
//           })
//         )
//     )
//   );
// });
