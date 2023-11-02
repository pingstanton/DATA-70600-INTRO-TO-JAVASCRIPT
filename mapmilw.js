let milwMap;
milwMap = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors'
}).addTo(milwMap);

milwMap.setView([43.03128531868154, -87.8994870185852], 16);

// summerfest icon
// https://leafletjs.com/reference.html#icon
var sfIcon = L.icon({
    iconUrl: 'https://chimaboo.com/coursework/DATA70600/wk11/smfsticon.png',
    iconSize: [100, 69],
    iconAnchor: [50, 35],
    popupAnchor: [-3, -20],
    shadowUrl: 'https://chimaboo.com/coursework/DATA70600/wk11/smfsticonshdw.png',
    shadowSize: [100, 69],
    shadowAnchor: [45, 30]
});

// create and place a marker icon
const summerfest = L.marker([43.03128531868154, -87.8994870185852], {icon: sfIcon}).addTo(milwMap);
summerfest.bindPopup("<b>Summerfest Grounds</b>");

milwMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});

// create and place a marker icon
const circle = L.circle([43.02714331770764, -87.8975558280945], {
    color: '#c00',
    fillColor: '#fc0',
    fillOpacity: 0.5,
    radius: 120
}).addTo(milwMap);


// add polyline, a type of path
const polyline = L.polyline([
    [43.027556550001236, -87.89742171764375], 
    [43.02805850339886, -87.89871454238893],
    [43.02911729788588, -87.8990149497986],
    [43.02912906216647, -87.89886474609375],
    [43.03249797469421, -87.89904398883667],
    [43.03413342827156, -87.89869012092822],
    [43.03550187927138, -87.89864720558398],
    [43.036659922517664, -87.89698521792162],
    [43.036695211015406, -87.89668481051194],
    [43.03678931357691, -87.89667408167588],
    [43.037059857637324, -87.89679209887255]
], {
    color: '#c00'
}).addTo(milwMap);

polyline.bindPopup("<b>from parking to concert seats</b>");