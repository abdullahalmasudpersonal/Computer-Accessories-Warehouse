import React from 'react';
import Banner from './Banner/Banner';
import OurCollection from './OurCollection/OurCollection';
import OurService from './OurService/OurService';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurService />
            <OurCollection />
        </div>
    );
};

export default Home;