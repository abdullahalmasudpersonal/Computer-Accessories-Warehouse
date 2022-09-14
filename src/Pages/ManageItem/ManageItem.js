import React from 'react';
import { Link } from 'react-router-dom';
import UseInventories from '../../Hooks/UseInventories';
import './ManageItem.css';

const ManageItem = () => {
    const [inventories, setInventories] = UseInventories();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://computer-accessories-warehouse.herokuapp.com/inventories/${id}`;
            console.log('url', url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining);
                })
        }
    } 

    return (
        <div className='manageitem-bg'>
            <div className=' w-50 mx-auto manageinventories pt-5 mb-5'>
                <Link to='/add-item'>
                    <h4 className='text-center'> <button>Add new item</button></h4>
                </Link>
                 <h2 className='text-center mb-3'>Manage Inventories</h2>
                 {
                    inventories.map(inventory => 
                    <div key={inventory._id}>
                        <ul>
                            <li>
                                <h5>{inventory.name} <button
                                    className='bg-delete'
                                    onClick={() => handleDelete(inventory._id)}>Delete</button>
                                </h5>
                            </li>
                        </ul>
                    </div>)
                } 
            </div>
        </div>
    );
};

export default ManageItem;