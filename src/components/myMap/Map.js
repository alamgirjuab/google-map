import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import myPosition from '../../img/google-maps-marker-for-residencelamontagne-hi.png';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 24.642451,
    lng: 89.644159
};
const center1 = {
    lat: 24.642150,
    lng: 89.643700
}

const Map = () => {
    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <Marker
                        icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png"}
                        position={center}
                    />
                    <Marker
                        icon={myPosition}
                        position={center1}
                    >
                        <popup>
                            <b>My Home</b>
                        </popup>
                    </Marker>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;