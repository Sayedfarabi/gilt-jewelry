import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/products"}>Products</Link></li>
                            <li><Link to={"/bookings"}>Bookings</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                            <li><Link to={"/about"}>About</Link></li>

                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost normal-case">
                        <div className='text-left leading-none'>
                            <h1 className='text-2xl leading-none'>GILT</h1>
                            <p className='text-sm leading-none'>Jewelry</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <div>
                        <ul className="menu menu-horizontal px-1">
                            <li className='mx-2'><Link to={"/"}>Home</Link></li>
                            <li className='mx-2'><Link to={"/products"}>Products</Link></li>
                            <li className='mx-2'><Link to={"/bookings"}>Bookings</Link></li>
                            <li className='mx-2'><Link to={"/contact"}>Contact</Link></li>
                            <li className='mx-2'><Link to={"/about"}>About</Link></li>
                        </ul>
                    </div>
                    <div>
                        <a href='#categories' className="btn bg-white border-2 border-primary hover:bg-white text-gray-500 hover:scale-110 rounded-none">Get started</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Navbar;