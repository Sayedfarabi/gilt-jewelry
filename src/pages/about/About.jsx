import React from 'react';

const About = () => {
    return (
        <section>
            <div className='flex justify-center items-center'>
                <div className='w-full md:w-2/3 py-10 md:py-12'>
                    <div>
                        <h1 className='text-xl md:text-3xl text-primary'>About Us</h1>
                        <p className='py-4 md:py-6'>
                            Gilt Jewelry the place to find the best Jewelry for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.
                        </p>
                        <p className='py-4 md:py-6'>
                            We at Gilt Jewelry believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;