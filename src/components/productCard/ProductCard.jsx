import React from 'react';


const ProductCard = ({ product }) => {
    const { image, title, price } = product;
    return (
        <div className='group border-2 h-96 w-56 p-2 mx-auto shadow-lg'>
            <img className='h-56 w-56 group-hover:scale-110 transition-transform duration-300' src={image} alt="Product" />
            <div className='h-32 text-center flex flex-col justify-center items-center'>
                <h3 className='mb-1 text-primary text-lg md:text-xl'>
                    {title}
                </h3>
                <p className='mb-1 text-orange-400'>
                    $<span className='italic text-gray-600'>{price}</span>
                </p>
                <div className='mb-1'>

                    <button className='capitalize btn btn-sm hover:scale-110 transition-transform duration-300'>Buy Now</button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;