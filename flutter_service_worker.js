'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "73915909e3e781a272a47f0079ef5f01",
"assets/AssetManifest.smcbin": "6f85886c2ba1d8237d7cd8045fc23141",
"assets/assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/icons/Authentication.svg": "68cd55c50d54b70a0af39e50e58f67c8",
"assets/assets/icons/bell.svg": "bb571db2c3721bc4eb8dfe7321dcf361",
"assets/assets/icons/blackhat.svg": "7f3c9d73ad32953c87a99d1dd1d3ebf2",
"assets/assets/icons/calendar.svg": "5bc07513fe6df266ee66f1c5003970e1",
"assets/assets/icons/chat.svg": "2e1ba1b634234a893636a5b8c39b313e",
"assets/assets/icons/circleprofile.png": "29fbdced8fa1fb1ab1b97b3f189a7bdc",
"assets/assets/icons/containerTask.svg": "1ced457bef8b5e9bdf8690cf0dd94768",
"assets/assets/icons/ellipseProfile.svg": "916e30b291d96936fa116b6f8d6f5ce6",
"assets/assets/icons/email.svg": "3654b1b1eb19fb5ec058cc1bc2eeadd6",
"assets/assets/icons/employeeContainer.svg": "2bc9f1a138b12e6e1c7d954807e2c70e",
"assets/assets/icons/extrapages.svg": "27cf7dd1be4fd9e1d0f85a6273143872",
"assets/assets/icons/form.svg": "635fe1ba39d150a00043dd5c6483f1ab",
"assets/assets/icons/graph.svg": "bf9aca8a00479671caea9facb9aba66b",
"assets/assets/icons/home.svg": "9aedcaeddedd06e0420042e8a5a34d62",
"assets/assets/icons/map.svg": "0156a3eabdc92ab65ea6ee2c3a90d63f",
"assets/assets/icons/media.svg": "641d28d1efe7b802299f0f57a78e7f86",
"assets/assets/icons/menu.svg": "9a8e648c3e84fd548405a5e197a79a25",
"assets/assets/icons/moneybag.svg": "774346daf30382e61d94b36d17516e57",
"assets/assets/icons/multimenu.svg": "6e62f7b42dc6fb74e40ba8861ae6c1e8",
"assets/assets/icons/others.svg": "2a69309576f86600012ce5655653b0c3",
"assets/assets/icons/pdf.svg": "8a9ca3b613452207862ee39734874dc6",
"assets/assets/icons/portfoliyo.svg": "83d233866a65e834edcb4fe433413615",
"assets/assets/icons/projectContainer.svg": "82b23e43c196042087fc7c502a4426a9",
"assets/assets/icons/scan.svg": "d73c2382998bdb403c8e1bf7607bbe69",
"assets/assets/icons/setting.svg": "8a3f90d2140fe88eb6f79728edeff50e",
"assets/assets/icons/tables.svg": "a38654a820e9dd05ece4abcb6047d891",
"assets/assets/icons/taskbar.svg": "871df1914ab038d73e426932ff2f6dc7",
"assets/assets/icons/threeDots.svg": "8163ca41956bb10021bb42a48ec7cb6e",
"assets/assets/icons/timeline.svg": "b5fbb13d6007b6822f267c5ace9896c6",
"assets/assets/images/book.svg": "a3c2f72c323891562e57623afa2ee9e8",
"assets/assets/images/box.svg": "fc5817db09195f231790b5342b6a0f1c",
"assets/assets/images/brifecase.svg": "ae6145be396a644a183388c25bcfd7ac",
"assets/assets/images/department.svg": "07e1ca5a98f3349387595214e0c91a05",
"assets/assets/images/dollar.svg": "0c30d84b9aeec1c4f33a9c1ca2c53ae1",
"assets/assets/images/employes.svg": "c1b607f0250dc8444e5285acb85d3599",
"assets/assets/images/headphone.svg": "36d713f626aafe20f0bf4ae9ed32a817",
"assets/assets/images/icons.svg": "099fbfc55dc061a2b2fb440fbb12daeb",
"assets/assets/images/jobs.svg": "d2b80419ca66418e3cd212c5609a5bfe",
"assets/assets/images/levae.svg": "c4a978f045da9218550a3eac014bac8d",
"assets/assets/images/plus.svg": "b2e1ea2ac49a3c0b9a8fc7f491416365",
"assets/assets/images/profile.png": "ec022168c71f1440c99ac711113dcec7",
"assets/assets/images/projectgroup.png": "151a7b0624c6b15258eef6268cdfcec6",
"assets/assets/images/screen.svg": "aab6fba15c803347c649803753259ad0",
"assets/assets/images/UI.svg": "4bf3497c657779c6e88645b79619c430",
"assets/assets/images/user.svg": "d858cf52e31b0f9a3066fa3c5192ddca",
"assets/assets/images/web.png": "659b22c0e5bec735dd08691f7f9e0bca",
"assets/assets/images/widget.svg": "574cf33ed0b62ef75b2301fce64b1dde",
"assets/FontManifest.json": "c8a4c446d86fbb06f35bcc264decff0d",
"assets/fonts/MaterialIcons-Regular.otf": "04a44fa177065074146576f4b7cf08ae",
"assets/NOTICES": "2cc335316846ce3284c02ee5d6419b1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c5e2075992b7ebe214a3b2b6e3f2c843",
"/": "c5e2075992b7ebe214a3b2b6e3f2c843",
"main.dart.js": "fc7f028d226ceb11892ccca4523d7575",
"manifest.json": "e0d838137226b361c9903d30391cf42c",
"version.json": "777c132226cff39ffcf7d16a72d78e7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
