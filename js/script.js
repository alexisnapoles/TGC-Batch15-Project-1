/* MAIN FILE FOR BOTH VIEW AND DATA JS */
let philippines = [14.5546732,120.99817];
let map = L.map('map').setView(philippines, 13);

// TILE LAYER
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGlzLWRlbGF0b3JyZSIsImEiOiJja3cwOWloOWhhZm5nMzFxMWRwam80a2RxIn0.8ktIyvaWh0aHXl_cfPNQnw'
}).addTo(map);