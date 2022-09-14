import React from 'react';
import UseInventories from '../../Hooks/UseInventories';
import Inventory from '../Inventories/Inventory/Inventory';
import Banner from './Banner/Banner';
import OurCollection from './OurCollection/OurCollection';
import OurService from './OurService/OurService';

const Home = () => {
    const [inventories, setInventories] = UseInventories([]);

    return (
        <div>
            <Banner />
            {/* home inventories start */}
            <div className='inventories-bg pt-5'>
                <hr className='w-50 hr-service mx-auto m-0 pb-3' />
                <h3 className='text-center mb-0'>Inventories ({inventories.length})</h3>
                <hr className='w-50 hr-service mx-auto m-0 mt-3' />
                <div className='container-xxl inventories py-5'>
                    {
                        inventories.slice(0, 8).map(inventory => <Inventory key={inventory._id} inventory={inventory} />)
                    }
                </div>
            </div>
            {/* home inventories end */}
            <OurService />
            <OurCollection />
        </div>
    );
};

export default Home;