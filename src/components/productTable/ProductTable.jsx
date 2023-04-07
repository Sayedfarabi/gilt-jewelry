import React from 'react';
import { toast } from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';
import { MdPayments } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductTable = ({ product, serial }) => {
    const { image, title, price } = product;

    const deleteHandler = () => {
        toast.error("This feature is updating...")
    }
    const paymentHandler = () => {
        toast.error("This feature is updating...")
    }

    return (
        <tr className='hover text-sm md:text-md'>
            <td>
                <div>
                    <p>{serial + 1}</p>
                </div>
            </td>
            <td>
                <div>
                    <div className="avatar">
                        <div className="w-6 md:w-8 rounded-full ring ring-blue-300 ring-offset-base-100 ring-offset-2">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </td>

            <td >
                <div>
                    <p>{title}</p>
                </div>
            </td>
            <td >
                <div>
                    <p> $<span className='italic'>{price}</span></p>
                </div>
            </td>




            <td className='text-xl md:text-2xl text-green-600'>
                <Link to={"/"}>
                    <button onClick={paymentHandler}>
                        <MdPayments></MdPayments>
                    </button>
                </Link>
            </td>


            <td className='text-xl md:text-2xl text-red-600'>
                <button onClick={deleteHandler}>
                    <MdDeleteForever></MdDeleteForever>
                </button>
            </td>
        </tr>
    );
};

export default ProductTable;