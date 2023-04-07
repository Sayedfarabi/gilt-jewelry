import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <div className="group border border-primary w-64 h-72 md:w-72  md:h-96  image-full relative mx-auto my-4">
            <div className='absolute w-64 h-72  md:w-72  md:h-96 flex justify-center items-center'>
                <div>
                    <img className='w-20 h-20 md:w-24  md:h-24 group-hover:rotate-45 group-hover:scale-x-125 transition-transform duration-500 ' src={category?.image} alt="" />
                </div>
            </div>
            <div className='absolute w-64 h-72 md:w-72  md:h-96 flex flex-col justify-center items-center'>
                <h2 className="text-xl md:text-2xl font-semibold translate-y-20">{category?.title}</h2>
            </div>
            <div className="absolute w-64 h-72 md:w-72  md:h-96 flex flex-col justify-end items-center">
                <div className='translate-y-20 hidden group-hover:block group-hover:translate-y-3 transition-transform duration-500'>
                    <Link to={`/category/${category?._id}`}>
                        <button className="btn btn-accent btn-sm rounded-none">Collection</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;