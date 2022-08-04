
 var map = L.map('map').setView([48.97431, 8.4535], 13);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([48.97431, 8.4535]).addTo(map);
