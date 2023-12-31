let nycMap;
nycMap = L.map("map");

// create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(nycMap);

nycMap.setView([40.7128, -74.0060], 16);

L.geoJSON(nyc).addTo(nycMap);

// adds some fill color to the map
L.geoJSON(nyc, {
    style: function(feature) {
        return {
            color: "blue",
            fillColor: "gold",
            fillOpacity: 0.5
        };
    }
}).addTo(nycMap);

//adds popup info to each neighborhood
L.geoJSON(nyc, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.borough + "</h3> <hr> <h3>Police Precinct " + feature.properties.policePrecinct + "</h3>");
    }
}).addTo(nycMap);



