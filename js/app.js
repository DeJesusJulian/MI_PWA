let url = window.location.href;
let swDirect = "/MI_PWA/sw.js"


console.log('hola desde el js');
if (navigator.serviceWorker) {
    console.log('Muy bien podemos jugar :v');
    if (url.includes('localhost')) {
        swDirect = "/sw.js";
    }
    navigator.serviceWorker.register('/sw.js')
} else {
    console.log('Lastima cambia de navegador');
}