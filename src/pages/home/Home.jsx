import React from 'react';
import Banner from './banner/Banner';
import Categories from './categories/Categories';
import History from './history/History';
import Best from './best/Best';
import Testimonials from './testimonial/Testimonials';
import ContactUs from './contact-us/ContactUs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Best></Best>
            <Categories></Categories>
            <History></History>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;