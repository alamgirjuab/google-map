import React from 'react';
import Header from '../Header/Header';
import Map from '../myMap/Map';
import './MainBody.css';

const MainBody = () => {
    return (
        <div className='main-body'>
            <Header />
            <Map />
        </div>
    );
};

export default MainBody;