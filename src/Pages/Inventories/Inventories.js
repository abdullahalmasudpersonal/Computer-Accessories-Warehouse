import React from 'react';
import './Inventories.css';
import useInventories from '../../Hooks/UseInventories';
import Inventory from './Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useInventories([]);
    return (
        <div className='inventories-bg'>
            <div className='container-xxl inventories py-5'>
                {
                    inventories.map(inventory => <Inventory key={inventory._id} inventory={inventory} />)
                }
            </div>
        </div>
    );
};

export default Inventories;