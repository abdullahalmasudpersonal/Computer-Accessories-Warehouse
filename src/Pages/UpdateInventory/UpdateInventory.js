import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseInventoryDetail from '../../Hooks/UseUpdateInventoryDetail';
import './UpdateInventory.css';

const UpdateInventory = () => {
    const { inventoriesId } = useParams();
    const [inventories] = UseInventoryDetail(inventoriesId);

    return (
        <div className='updateinventory-bg py-5'>
            <div className='update-inventory updateinventory'>
                <img className='w-100 rounded p-2' height='180px' src={inventories.img} alt='' />
                <div className='px-3'>
                    <h5 className='brandname'>{inventories.name}</h5>
                    <h6>Price: ${inventories.price}</h6>
                    <p className='mb-1'>quantity: {inventories.quantity}</p>
                    <p className='mb-1 fw-bold'> Id: {inventoriesId}</p>
                    <strong>
                        <p className='mb-1'>Seller: {inventories.seller}</p>
                    </strong>
                    <small>
                        <p className='mb-0'>{inventories.description}</p>
                    </small>
                </div>
                <div className='addtocart'>
                    <Link to={`/checkout/${inventoriesId}`}>
                        <button>Add to cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;