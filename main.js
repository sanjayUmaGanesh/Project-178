let latitude, longitude, destination;

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation();
})

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude

    // Initializing Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 16
    });

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

    map.on('click', function (e) {
        destination = e.lngLat;
    });

    //img references
    img1 = document.querySelector("#tajmahal");
    img2 = document.querySelector("#lotustemple")
    img3 = document.querySelector("#mysorepalace")
    img4 = document.querySelector("#qutubminar")
    img5 = document.querySelector("#victoria")
    img6 = document.querySelector("#gatwayofindia")
    img7 = document.querySelector("#charminar")
    img8 = document.querySelector("#shatrapati shivaji terminus")

    //markers
    var marker1 = new mapboxgl.Marker({element:img1}).setLngLat([ 78.042221,27.174818]).addTo(map)
    var marker2 = new mapboxgl.Marker({element:img2}).setLngLat([ 77.25881646322424, 28.55354598930586]).addTo(map)
    var marker3 = new mapboxgl.Marker({element:img3}).setLngLat([ 76.6552178132103, 12.30539360301729]).addTo(map)
    var marker4 = new mapboxgl.Marker({element:img4}).setLngLat([ 77.18543186738906, 28.524617126825554]).addTo(map)
    var marker5 = new mapboxgl.Marker({element:img5}).setLngLat([ 88.34260071332234, 22.545036090581103]).addTo(map)
    var marker6 = new mapboxgl.Marker({element:img6}).setLngLat([ 72.83458992491923, 18.92217691921152]).addTo(map)
    var marker7 = new mapboxgl.Marker({element:img7}).setLngLat([ 78.47460012490136, 17.361840068907313]).addTo(map)
    var marker8 = new mapboxgl.Marker({element:img8}).setLngLat([ 72.83541531161018, 18.940037398585634]).addTo(map)

  
}

