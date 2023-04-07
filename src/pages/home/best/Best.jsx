import React from 'react';

const Best = () => {
    return (
        <section className='py-8 md:py-12'>
            <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="50"
            >
                <div className='flex flex-col md:flex-row w-4/5 mx-auto '>
                    <div className='mx-2 md:mx-4'>
                        <div className=''>
                            <img className='border-2 border-primary rounded-full w-full' src="https://images.skinnerinc.com/full/455/1131455.jpg" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center mx-2 md:mx-4'>
                        <div>
                            <div className='my-2 md:my-4'>
                                <h1 className='text-2xl md:text-4xl text-primary text-center md:text-start'>Our product are the best of best</h1>
                            </div>
                            <div className='my-2 md:my-4 text-center md:text-start'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum totam necessitatibus in aliquid quia. Minima, est tempore facilis obcaecati recusandae nulla atque facere aperiam ducimus. Modi amet animi dicta tempora!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Best;