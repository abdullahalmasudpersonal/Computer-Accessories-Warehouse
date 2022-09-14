import React from 'react';
import './AddItem.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const url = `https://computer-accessories-warehouse.herokuapp.com/inventories`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('add product')
                e.target.reset();
            })
    };

    return (
        <div className='additem-bg'>
            <div className='w-50 mx-auto additem pt-5'>
                <h2>Please add item</h2>
                <form className='d-flex flex-column'
                    onSubmit={handleSubmit(onSubmit)}>

                    <input className='mb-2' placeholder='Name' type='text' {...register("name", { required: true })} />

                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />

                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />

                    <input className='mb-2' placeholder='Seller' type='text' {...register("seller", { required: true })} />

                    <input className='mb-2' placeholder='Photo URL' type='text' {...register("img", { required: true })} />

                    <textarea className='mb-2' placeholder='Description' {...register("description")} />

                    <input type="submit" value='Add Item' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;