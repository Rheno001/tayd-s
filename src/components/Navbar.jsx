import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-gray-700 to-gray-900 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold text-red-700">TAYD<span className='text-white'>'</span>S</div>
                    <div className="hidden md:flex space-x-4">
                    <Link onClick={handleClick} className='text-white hover:text-red-700 transform hover:scale-110 transition-transform duration-200' to={'/Home'}>
                    Home
                </Link>
                        <a href="#" className="text-white hover:text-red-700 transform hover:scale-110 transition-transform duration-200">Membership Plans</a>
                        <a href="#" className="text-white hover:text-red-700 transform hover:scale-110 transition-transform duration-200">Instructors</a>
                        <a href="#" className="text-white hover:text-red-700 transform hover:scale-110 transition-transform duration-200">Contact Us</a>
                        <a href="#" className="text-white hover:text-red-700 transform hover:scale-110 transition-transform duration-200">About Us</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white hover:text-red-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                <div className="flex flex-col space-y-2 p-4 bg-gradient-to-r from-gray-700 to-gray-900">
                <Link onClick={handleClick} className='text-white hover:text-red-700 transform hover:scale-110 transition-transform duration-200' to={'/Home'}>
                    Home
                </Link>
                    <a href="#" className="text-white hover:text-blue-200 transform hover:scale-110 transition-transform duration-200">Membership Plans</a>
                    <a href="#" className="text-white hover:text-blue-200 transform hover:scale-110 transition-transform duration-200">Instructors</a>
                    <a href="#" className="text-white hover:text-blue-200 transform hover:scale-110 transition-transform duration-200">Contact Us</a>
                    <a href="#" className="text-white hover:text-blue-200 transform hover:scale-110 transition-transform duration-200">About Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
