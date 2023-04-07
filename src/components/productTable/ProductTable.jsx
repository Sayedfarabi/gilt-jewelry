import React from 'react';

const ProductTable = ({ product, serial }) => {
    const { image, title, price } = product;

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


            {

                <td className='text-xl md:text-2xl text-green-600'>

                    <button>
                        pay
                    </button>

                </td>
            }

            <td className='text-xl md:text-2xl text-red-600'>
                <button>
                    delete
                </button>
            </td>
        </tr>
    );
};

export default ProductTable;