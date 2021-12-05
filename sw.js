//console.log('SW: Hola mundo');


self.addEventListener('install', (event) => {
    console.log("SW: instalado");
});

self.addEventListener('activate', (event) => {
    console.log("SW: activado y controlando la app");
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    if (event.request.url.includes('.jpg')) {

        let newResp = fetch('/MI_PRIMER_PWA/images/gato.jpg');
        console.log("Es una imagen");
        event.respondWith(newResp);
    }


    if (event.request.url.includes('pages.css')) {

        let newResponse = new Response(`
        body{
            background-color: black !important;
            color:  red !important;
        }`,
            {
                headers: {
                    'Content-Type': 'text/css'
                }
            });
        event.respondWith(newResponse);
    }
    
});