const locs = [
    { ville: "Toulouse", lat: 43.600000, long: 1.433333 }
]


const aside = document.querySelector('aside');


const tabMarker = [];


const map = L.map('map').setView([47, 2], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marqueur = L.marker([43.600000, 1.433333]).addTo(map)

marqueur.bindPopup('Chez la Pépée Rony');

