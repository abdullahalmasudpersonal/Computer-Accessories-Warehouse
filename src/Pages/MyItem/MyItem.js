import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItem.css';
import axiosPrivate from '../../API/axios.Private';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            const url = `https://computer-accessories-warehouse.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user]);

    const handleMyItemDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://computer-accessories-warehouse.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }

    return (
        <div className='myitem-bg'>
            <div className='container pt-5 mx-auto myitems'>
                <h3>My Items: {orders.length}</h3>
                {
                    orders.map(order => <div key={order._id}>
                        <h6>{order.email} : {order.inventories} <button onClick={() => handleMyItemDelete(order._id)} className='bg-delete'>Delete</button>
                        </h6>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItem;