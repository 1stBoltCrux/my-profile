"use strict";var precacheConfig=[["/my-profile/index.html","9c93826c348c376cbdf5b0c117ad7f69"],["/my-profile/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/my-profile/static/js/main.c3ffb611.js","6dbe3c2def344c57db8ae9aad8e976ab"],["/my-profile/static/media/App.604453da.scss","604453da97b812d4a660c97824c51e11"],["/my-profile/static/media/aboutme.51181f57.scss","51181f571feeb4f97431a65bf1bade52"],["/my-profile/static/media/arrow.2028990b.png","2028990b0aaf94c129e26148d8871d52"],["/my-profile/static/media/backcountry.636a8832.png","636a883291843dfd099a5a0957d64bc6"],["/my-profile/static/media/commongood.fe196d61.png","fe196d6116b928b941e95a43bf761b2b"],["/my-profile/static/media/footer.76ceae45.scss","76ceae45fcd99dda430ab81b50b1b7cc"],["/my-profile/static/media/nav.2eda2e8d.scss","2eda2e8dac1ea2a9c710157a9e8f03c1"],["/my-profile/static/media/navdropdown.6f144d44.scss","6f144d44e26ad424295ac338eb1a1271"],["/my-profile/static/media/ozone1.0319f743.png","0319f74352318cf509476bbc4dc99562"],["/my-profile/static/media/projectcard.4bf948b8.scss","4bf948b8da903b422d8a613d00bb0d5e"],["/my-profile/static/media/projects.f2f8aca6.scss","f2f8aca60f4f14c2f612c260fa8d2672"],["/my-profile/static/media/scratchbackground.f076b533.png","f076b533b8a97b059b0d7c6bab0fa9c1"],["/my-profile/static/media/taproom.6904cf04.png","6904cf0498ff99351f066822f7228392"],["/my-profile/static/media/titlecontainer.aa970533.scss","aa9705338c9b240f13a254e4144622e6"],["/my-profile/static/media/whiteline.c0dc8d07.png","c0dc8d07dac4d20bc4bf154a837116fc"],["/my-profile/static/media/whiteline2.decac300.png","decac300c052a9a0172f8f668202b4d6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/my-profile/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});