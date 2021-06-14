// mapboxgl.accessToken = ; GENERATE YOUR OWN ACCESS TOKEN BY CREATING A MAPBOX ACCOUNT. Follow the tutorial for help.

mapboxgl.accessToken = 'pk.eyJ1IjoiZWxhbWVlbjM3IiwiYSI6ImNrcHQ1bWJmcjBoMnMycW8xbjJyYm54czUifQ.JlVo9tsyFPlCb2FSyJfJdA';

navigator.geolocation.getCurrentPosition( successLocation, errorLocation, {
enableHighAccuracy: true
});

function successLocation(position){
    setUpMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setUpMap([-2.28, 41.45])
}

function setUpMap(center){
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
});

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'


})




    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );
}

