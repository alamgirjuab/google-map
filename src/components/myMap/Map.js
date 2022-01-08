import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import myPosition from '../../img/google-maps-marker-for-residencelamontagne-hi.png';
import centerImg from '../../img/center-img.png';
import './Map.css';

/*---------------------------- 
 | Google Map size on window |
 ---------------------------*/
const containerStyle = {
    width: '60vw',
    height: '60vh'
};
/*-------------------------------------------------- 
 | Custom Markers Latitude and Longitude info here |
 -------------------------------------------------*/
const center = {
    lat: 24.642450,
    lng: 89.644240
};
const myHome = {
    lat: 24.642150,
    lng: 89.643700
}
const mySchool = {
    lat: 24.642500,
    lng: 89.645600
}
const hospital = {
    lat: 24.640683,
    lng: 89.644000
}
const busStand = {
    lat: 24.641850,
    lng: 89.644100
}
const bazar = {
    lat: 24.641500,
    lng: 89.644500
}

const Map = () => {
    return (
        <div className='map-container'>
            <LoadScript
                /*---------------------- 
                 | Google API Key here |
                 ---------------------*/
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={17}
                >
                    {/*---------------------------- 
                      | Custom Marker Integration |
                      ----------------------------*/}
                    <Marker
                        icon={centerImg}
                        position={center}
                        title={'Center Point'}
                    />
                    <Marker
                        icon={myPosition}
                        position={myHome}
                        title={'My Home'}
                    />
                    <Marker
                        icon={myPosition}
                        position={mySchool}
                        title={'My School'}
                    />
                    <Marker
                        icon={myPosition}
                        position={hospital}
                        title={'Hospital'}
                    />
                    <Marker
                        icon={myPosition}
                        position={busStand}
                        title={'Bus Stand'}
                    />
                    <Marker
                        icon={myPosition}
                        position={bazar}
                        title={'Bazar'}
                    />


                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;