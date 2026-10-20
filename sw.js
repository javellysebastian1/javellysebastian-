/* AUXO: funciona sin conexión con la última edición descargada. */
var VERSION='auxo-v2';
var BASE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(BASE);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==VERSION;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  var url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==self.location.origin)return;
  var datos=/\/(editions|meta)\//.test(url.pathname)||url.pathname.endsWith('index.html')||url.pathname.endsWith('/');
  if(datos){
    // Primero la red (para recibir la edición nueva); si no hay conexión, lo guardado.
    e.respondWith(fetch(e.request).then(function(r){var copia=r.clone();caches.open(VERSION).then(function(c){c.put(e.request,copia);});return r;}).catch(function(){return caches.match(e.request);}));
  }else{
    e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));
  }
});
