import React from 'react';
import image from '../../../assets/images/banner/banner3.png';


const Banner = () => {
    return (
        <div className="hero min-h-[65vh]" style={{ backgroundImage: `url(${image})`, height: "100%" }}
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="50"
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold text-gray-300">Stylish Women that is your big deal</h1>
                    <p className="mb-5 text-gray-300">Add More Glamour To Your style With Our Gorgeous Jewelry Collection</p>
                    <button className="btn btn-primary text-gray-300">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;