const philippines = [14.5546732, 120.9981701];
let map = L.map('map').setView(philippines, 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGlzLWRlbGF0b3JyZSIsImEiOiJja3cwOWloOWhhZm5nMzFxMWRwam80a2RxIn0.8ktIyvaWh0aHXl_cfPNQnw'
}).addTo(map);

let marker = L.marker([14.5546732, 120.9981701]).addTo(map);

let circle = L.circle([14.5546732, 120.9981701], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

window.addEventListener('DOMContentLoaded', async function () {
    console.log('DOM loaded');
    const covidCases = await axios.get("https://corona.lmao.ninja/v2/countries?yesterday&sort");
    console.log(covidCases);
    const covidLocation = covidCases.data[0].countryInfo;
    let markerClusterLayer = L.markerClusterGroup();
    for (let i = 0; i < covidLocation.length; i++) {
        let point = covidLocation[i];
        L.marker(point).bindPopup(`lat: ${point}`).addTo(markerClusterLayer);
    }
    markerClusterLayer.addTo(map);

    /* function bikeRackLatlng(map) {
        // get the boundaries of the map
        let bounds = map.getBounds();
        let southWest = bounds.getSouthWest();
        let northEast = bounds.getNorthEast();
        let lngSpan = northEast.lng - southWest.lng;
        let latSpan = northEast.lat - southWest.lat;

        let randomLng = Math.random() * lngSpan + southWest.lng;
        let randomLat = Math.random() * latSpan + southWest.lat;

        return [randomLat, randomLng,];
    } */

    // let group = L.layerGroup();
    //     L.marker(covidLatlng(map)).addTo(group);
    //     L.marker(covidLatlng(map)).addTo(group);
    //     L.marker(covidLatlng(map)).addTo(group);
    // group.addTo(map);

    // let group2 = L.layerGroup();
    // for (let i = 0; i < 300; i++) {
    //     L.circle(covidLatlng(map), {
    //         color: 'red',
    //         fillColor: "orange",
    //         fillOpacity: 0.5,
    //         radius: 500
    //     }).addTo(group2);
    // }

    // let group3 = L.layerGroup();
    // for (let i = 0; i < 50; i++) {
    //     L.circle(covidLatlng(map), {
    //         color: 'red',
    //         fillColor: "green",
    //         fillOpacity: 0.5,
    //         radius: 250
    //     }).addTo(group3);
    // }

    // let baseLayers = {
    //     'Markers': group,
    //     'Circles': group2
    // }

    // let overlays = {
    //     'Green Circle': group3
    // }

    // L.control.layers(baseLayers, overlays).addTo(map);

});

// GeoLocator Plugin via Leaflet
const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
let osm = new L.TileLayer(osmUrl, { attribution: osmAttrib });

let osmGeocoder = new L.Control.OSMGeocoder({ placeholder: 'Search location...' });

map.addControl(osmGeocoder);

// let options = {
//     collapsed: true, /* Whether its collapsed or not */
//     position: 'topright', /* The position of the control */
//     text: 'Locate', /* The text of the submit button */
//     placeholder: '', /* The text of the search input placeholder */
//     bounds: null, /* a L.LatLngBounds object to limit the results to */
//     email: null, /* an email string with a contact to provide to Nominatim. Useful if you are doing lots of queries */
//     callback: function (results) {
//         var bbox = results[0].boundingbox,
//             first = new L.LatLng(bbox[0], bbox[2]),
//             second = new L.LatLng(bbox[1], bbox[3]),
//             bounds = new L.LatLngBounds([first, second]);
//         this._map.fitBounds(bounds);
//     }
// };

// map.load(function () {
//     setTimeout(function () {
//         map.map.flyTo({ speed: 0.5, zoom: 15, pitch: 60, bearing: 180, center: [-122.3989808, 37.7517676] })
//     }, 2000);
// });

// API Websites:
// https://developer.mapquest.com/documentation/search-api/v2/
// https://github.com/perliedman/leaflet-control-geocoder
// https://developer.what3words.com/public-api