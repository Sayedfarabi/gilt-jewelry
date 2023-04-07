import React from 'react';
import user1 from '../../../assets/images/testimonial-users/user-1.jpg';
import user2 from '../../../assets/images/testimonial-users/user-2.jpg';
import user3 from '../../../assets/images/testimonial-users/user-3.jpg';
import user4 from '../../../assets/images/testimonial-users/user-4.jpg';
import user5 from '../../../assets/images/testimonial-users/user-5.jpg';
import user6 from '../../../assets/images/testimonial-users/user-6.jpg';
import TestimonialSlide from './testimonial-slide/TestimonialSlide';

const Testimonials = () => {
    const testimonialsData = [
        {
            _id: "testimonial001",
            image: user1,
            name: "Steven Kelly",
            review: "Happy customers are gold for your business, not just because they buy but also because they add value to your marketing strategy.",
            previousId: "testimonial006",
            next: "testimonial002"
        },
        {
            _id: "testimonial002",
            image: user2,
            name: "Edward Lee",
            review: "This article will guide you through what a testimonial is and the best practices for getting testimonials from your customers, complete with 15 inspirational examples.",
            previousId: "testimonial001",
            next: "testimonial003"
        },
        {
            _id: "testimonial003",
            image: user3,
            name: "Benjamin Brown",
            review: "Happy customers are gold for your business, not just because they buy but also because they add value to your marketing strategy.",
            previousId: "testimonial002",
            next: "testimonial004"
        },
        {
            _id: "testimonial004",
            image: user4,
            name: "Jacob Ward",
            review: "This article will guide you through what a testimonial is and the best practices for getting testimonials from your customers, complete with 15 inspirational examples.",
            previousId: "testimonial003",
            next: "testimonial005"
        },
        {
            _id: "testimonial005",
            image: user5,
            name: "Julie Hill",
            review: "Happy customers are gold for your business, not just because they buy but also because they add value to your marketing strategy.",
            previousId: "testimonial004",
            next: "testimonial006"
        },
        {
            _id: "testimonial006",
            image: user6,
            name: "Emily Green",
            review: "But after reading the words of satisfied customers, they might just be convinced to buy. Glowing customer reviews provide your audience with social proof - the idea that if so many people are loving your product, it must actually be good.",
            previousId: "testimonial005",
            next: "testimonial001"
        },
    ]
    return (
        <section className='py-8 md:py-12'>
            <div>
                <h1 className='text-3xl md:text-5xl text-center my-8 md:my-12 text-primary'>TESTIMONIALS</h1>
            </div>
            <div className="carousel w-full">
                {
                    testimonialsData &&
                    testimonialsData.map(data => {
                        return <TestimonialSlide
                            key={data?._id}
                            data={data}
                        >
                        </TestimonialSlide>
                    })
                }
            </div>
        </section>
    );
};

export default Testimonials;