var map = L.map('map').setView([21.54238, 39.19797], 8);
let circle; // Declare this variable at the top of your script
let radius = 1000;  // 1 km radius

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

document.getElementById('locateBtn').addEventListener('click', function() {
    map.locate({setView: true, maxZoom: 16});
});

function onLocationFound(e) {
    if (circle) {
        circle.remove();
    }
    circle = L.circle(e.latlng, radius).addTo(map); 

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    document.getElementById('longitude').textContent = e.latlng.lng.toFixed(4);
    document.getElementById('latitude').textContent = e.latlng.lat.toFixed(4);
}


map.on('locationfound', onLocationFound);
