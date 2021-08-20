import React from 'react';
import '../css/components/Mapp.css'
// import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

const Mapp = () => {
    const defaultPosition = [45.421532, -75.697189];
    return ( 
            <div className="map-width-cont margin-map">
                <MapContainer
                    center={defaultPosition}
                    zoom={13}
                    id="mapid"
                >
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
                
     );
}
 
export default Mapp;