import React from 'react';

const TestimonialSlide = ({ data }) => {
    return (
        <div id={data?._id} className="carousel-item relative w-full h-[400px] bg-base-200">

            <div className='text-center flex justify-center items-center w-full'>
                <div className='mx-auto w-2/3'>
                    <div className='my-8'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                                <img src={data?.image} alt='user' />
                            </div>
                        </div>
                    </div>
                    <div className='my-8'>
                        <div>
                            <p>{data?.review}</p>
                        </div>
                    </div>
                    <div className='my-8'>
                        <div>
                            <h5 className='font-semibold text-xl text-primary'><em>{data?.name}</em></h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${data?.previousId}`} className="btn btn-circle text-primary border-primary bg-slate-200">❮</a>
                <a href={`#${data?.next}`} className="btn btn-circle text-primary border-primary bg-slate-200">❯</a>
            </div>
        </div>
    );
};

export default TestimonialSlide;