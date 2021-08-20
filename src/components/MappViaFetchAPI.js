import React from 'react';
import '../css/components/Mapp.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const MappViaFetchAPI = () => {
    const url = 
        "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    
    const [crimes, setCrimes] = React.useState([]);

    React.useEffect(() => {
        const getData = async () => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                const dataSlice = data.slice(0,50);
                setCrimes(dataSlice);
            }
            catch(e){
                console.log(e)
            }
        };
         getData();
        }, []);

    const defaultPosition = [52.629835, -1.133005];

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

                    {crimes.map(crime => (
                        <Marker key={crime.id} 
                                position={[
                                    crime.location.latitude,
                                    crime.location.longitude,
                                ]}
                        >
                            <Popup>
                                <h2>{crime.category}</h2>
                                <p>{crime.location.street.name}</p>
                            </Popup>
                        </Marker>
                            
                    ))}

                </MapContainer>
            </div>
                
     );
}
 
export default MappViaFetchAPI;