import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <section>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[85vh] bg-base-200'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </section>
    );
};

export default Root;