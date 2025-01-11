'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8a305fb1a3d9e8d9690d78c51b7f1f82",
"assets/AssetManifest.bin.json": "96be1518b00dbe76a8315789585861f0",
"assets/AssetManifest.json": "1e041b3cfb0ad0844feebc2d500d28dd",
"assets/assets/1.png": "8b4dd438f58929f9b6d038af1116f4ca",
"assets/assets/10.png": "e1c19440be40738e651ceb001cea1221",
"assets/assets/11.png": "cb2f13f8cbf2728a40a3658cde462d20",
"assets/assets/12.jpg": "4bdde590147e955f7000b244e5a37775",
"assets/assets/13.jpg": "8945d12c483699d73ea1e37260baebb2",
"assets/assets/14.webp": "9ab688af7d92527899c7e7baad1921be",
"assets/assets/15.jpg": "45f4508f88afc733452e6d576d1e784c",
"assets/assets/16.jpg": "ce084d4d058d0f4d3b880aa8ea1900ea",
"assets/assets/17.jpg": "d82330ae69a776510a14af3e3c2efd64",
"assets/assets/18.jpg": "0f570b5089299b4e4d817948bf454b60",
"assets/assets/19.jpg": "0720c00e6d623f128240f65bbdb62a4b",
"assets/assets/2.png": "14236e76b3492a29390e2edc5ed640f3",
"assets/assets/20.avif": "ab97f8d6cc4e5fa90a54f22c1a875314",
"assets/assets/20.webp": "69a5adbf5e43454da260bfbe053cb9d5",
"assets/assets/21.jpg": "16c80b8151eedba6f2d5fa4acd8ab14b",
"assets/assets/22.jpg": "f5fd43de02d4d07951cc7ed9917a9459",
"assets/assets/23.jpg": "234bc513847770a00b107c2322837145",
"assets/assets/24.jpg": "72f072294fbac7df250ec9cb2baa3798",
"assets/assets/25.png": "47f813c170964cf7f4c7d5cd0d0313a4",
"assets/assets/26.png": "449e8503493a9f345ea1c5ebeb6291fd",
"assets/assets/27.jpg": "2449ae96dc67270636a0f1ee03442f99",
"assets/assets/28.jpg": "11117f845d2437d387ff1db383e26c50",
"assets/assets/29.jpg": "4155feac06717ca0e03fecec12d8bf61",
"assets/assets/3.png": "a5eccd679c539ef15cc1a0b8570232f4",
"assets/assets/30.jpg": "a34b113b323bc98245b59c605d3dbaa9",
"assets/assets/31.jpg": "2a69d4a277f7aa215d899cb2e60c86d4",
"assets/assets/32.jpg": "0ef95ba6753a1c05a3eed9321333f9e2",
"assets/assets/4.png": "63c6507ad20ceccbf864c3ee6a6a3a1e",
"assets/assets/5.png": "58668b8e9bf3d63df24281e01d0ccef7",
"assets/assets/6.png": "c2fe4179d3d7dc71231c7eff87d6e252",
"assets/assets/7.png": "6fe365f7338f20501f8c52371e02a2d7",
"assets/assets/8.png": "36fca0de4f9adb1afda6cc2fcdf4f72e",
"assets/assets/9.png": "4a54feb7fe781e8dd92ecf4210c3eaad",
"assets/assets/bg.png": "574f52b747ee7b20e22ebddc73387c04",
"assets/assets/istockphoto-1138504603-2048x2048.jpg": "8f4e8dda28b56d3008a57f9d290e737b",
"assets/assets/WhatsApp%2520Image%25202025-01-03%2520at%252012.07.03_9f3ce1d6.jpg": "28b39a5d46053a8b4a185f824c49ee41",
"assets/assets/WhatsApp%2520Image%25202025-01-03%2520at%252012.07.04_0cca074d.jpg": "a1af0c6b0c2f315849b0f7eca8cd2ba4",
"assets/assets/WhatsApp%2520Image%25202025-01-03%2520at%252012.07.04_6138630e.jpg": "80667f7fde6df544790dff467051dac9",
"assets/assets/WhatsApp%2520Image%25202025-01-07%2520at%252009.16.56_08360408.jpg": "050ccbe489bd8233d96eea0ba4d577e2",
"assets/assets/WhatsApp%2520Image%25202025-01-07%2520at%252010.40.50_6a4a616c.jpg": "1468b5040cfb22871ab4b49901d46171",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ce53090539a35c64e9c6abb2c46143b",
"assets/NOTICES": "f074adf9a88b370d13e6e3f2addad135",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "beb367f4c7e6cf7d0b0db41a18cf74f5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d41d6287d51d2ba03a5df56b66c36e38",
"/": "d41d6287d51d2ba03a5df56b66c36e38",
"main.dart.js": "81b3490671e9ccee3f7df93a9cb2e0a0",
"manifest.json": "1e53168f029b914e060f70585bdb3dd5",
"version.json": "7821d009bdb283aae3fd3417a98edc63"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
