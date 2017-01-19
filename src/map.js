import L from 'leaflet';
import {REGION_ALIASES, REGIONS, REGION_GEOJSONS, BLACK_SQUARE_JSON} from './constants';
import '../node_modules/leaflet/dist/leaflet.css';
import './static/css/main.scss';
const mapAO = new L.map('mapid', { zoomControl:false }).setView([47.1617112, 46.2098558], 8);

const osmLink = '<a href=\'http://www.openstreetmap.org\'>OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; ' + osmLink,
        maxZoom: 18
    }).addTo(mapAO);

mapAO.AORegionPolygons = [];

REGION_GEOJSONS.forEach(function (item, idx) {
    // L.geoJSON(item, {style: REGIONS[REGION_ALIASES[idx]].regStyle}).addTo(mapAO);
    mapAO.AORegionPolygons[idx] = (L.geoJSON(item, {style: REGIONS[REGION_ALIASES[idx]].regStyle}));
    mapAO.AORegionPolygons[idx].addTo(mapAO);
});

L.geoJSON(BLACK_SQUARE_JSON, {
    style: {
        'color': '#000000',
        'fillColor': '#000000',
        'fillOpacity': 0.5,
        'weight': 1,
        'opacity': 0.5
    }
}).addTo(mapAO);

export default mapAO;