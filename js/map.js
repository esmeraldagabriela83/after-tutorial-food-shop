console.log("hello from map.js");
//How To Use Mapbox To Create A Google Maps Clone Quickly
//https://www.youtube.com/watch?v=OySigNMXOZU

//https://account.mapbox.com/
//https://docs.mapbox.com/mapbox-gl-js/example/simple-map/

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoibWloYWVsYS1hODMiLCJhIjoiY2wyajVnZXh2MDBibDNvcGs0eDE4dGpneSJ9.wgTo_KSlpIRdJ3F41QhrGA';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});
















//
