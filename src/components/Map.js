import React from 'react';
import {MapContainer, TileLayer, Marker, useMap, Popup} from 'react-leaflet';
import Leaflet from "leaflet";

//icons
import MapIcon from "../icons/map-marker.png";

//css 
import 'leaflet/dist/leaflet.css';


const markerIcon = Leaflet.icon({
    iconUrl: MapIcon, iconSize: [128, 128]
});

function ChangeView({center, zoom}) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const Map = ({data}) => {
    const {address, lat, long} = data;
    return (<div>
        <MapContainer center={[lat, long]} zoom={16}
                      scrollWheelZoom={false} style={{width: "100%", height: "90vh", position: 'absolute'}}>
            <ChangeView center={[lat, long]}/>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[lat, long]}
                icon={markerIcon}>
                <Popup offset={[0, -30]}>
                    <div>
                        <h3>Address</h3>
                        <h4>{address}</h4>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    </div>);
}
export default Map;