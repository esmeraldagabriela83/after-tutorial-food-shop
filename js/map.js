console.log("hello from map.js");
//How To Use Mapbox To Create A Google Maps Clone Quickly
//https://www.youtube.com/watch?v=OySigNMXOZU

//https://account.mapbox.com/
//https://docs.mapbox.com/mapbox-gl-js/example/simple-map/

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoibWloYWVsYS1hODMiLCJhIjoiY2wyajVnZXh2MDBibDNvcGs0eDE4dGpneSJ9.wgTo_KSlpIRdJ3F41QhrGA';

navigator.geolocation.getCurrentPosition(successLocation , errorLocation ,
{enableHighAccuracy:true}
)


function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}



//
