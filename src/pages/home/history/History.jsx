import React from 'react';

const History = () => {
    return (
        <section className='py-8 md:py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center mx-2 md:mx-6'>
                <div className='w-full md:w-1/2'>
                    <div className='flex justify-start items-center'>
                        <div className='mx-auto'>
                            <div>
                                <h2 className='text-3xl md:text-6xl py-8 md:py-12 text-primary text-center md:text-start'>Gilt Jewelry History</h2>
                            </div>
                            <div className='flex flex-col md:flex-row justify-between items-center'>
                                <div className='w-full text-center md:text-start my-3 md:my-0 md:w-48'>
                                    <h3 className='p-2 md:py-4 text-xl md:text-2xl text-primary'>Since. 1984</h3>
                                    <p className='p-2 md:py-4 '>The company was born out of a desire to create functional</p>
                                    <p className='p-2 md:py-4 font-medium'>START FOUNDATION</p>
                                </div>
                                <div className='w-full text-center md:text-start my-3 md:my-0 md:w-48'>
                                    <h3 className='mb-2 md:mb-4 text-xl md:text-2xl text-primary'>Since. 1984</h3>
                                    <p className='mb-2 md:mb-4 '>The company was born out of a desire to create functional</p>
                                    <p className='mb-2 md:mb-4 font-medium'>START FOUNDATION</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 my-6 md:my-0'>
                    <div className='relative h-64 md:h-96 w-60 md:w-96 mx-auto'>
                        <div className='absolute h-64 md:h-96 w-60 md:w-96 bg-primary'>

                        </div>
                        <div className='absolute border'>
                            <img className='h-64 md:h-96 w-60 md:w-96 translate-x-4 -translate-y-4' src="https://elizabeth-gage.com/wp-content/uploads/2019/09/custom-rings-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;