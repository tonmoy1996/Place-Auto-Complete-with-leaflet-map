import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, useMap, Popup} from 'react-leaflet';
import Leaflet from "leaflet";
import MapIcon from "../../icons/map-marker.png";
import 'leaflet/dist/leaflet.css';

const markerIcon = Leaflet.icon({
    iconUrl: MapIcon, iconSize: [128, 128]
});


const Index = ({data}) => {
    const [map, setMap] = useState(null);
    const {address, lat, long} = data;

    useEffect(() => {
        if (map !== null) {
            map.flyTo([lat, long], 15);
        }

    }, [lat, long])

    return (<div>
        <MapContainer
            center={[lat, long]}
            zoom={16}
            scrollWheelZoom={false}
            style={{width: "100%", height: "90vh", position: 'absolute'}}
            ref={e => setMap(e)}

        >
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
export default Index;