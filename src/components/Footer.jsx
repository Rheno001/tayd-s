import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl">
                    {/* Left Navigation Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-200">Home</a>
                        <a href="#" className="hover:text-blue-200">Membership Plans</a>
                    </div>

                    {/* Logo */}
                    <div className="text-3xl font-bold my-[15px] sm:my-[0]">TAYD'S</div>

                    {/* Right Navigation Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-200">About Us</a>
                        <a href="#" className="hover:text-blue-200">Contact Us</a>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
                    <div className="flex mt-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-l-lg border border-gray-300"
                        />
                        <button className="bg-black text-white p-2 rounded-r-lg hover:bg-gray-800">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="hover:text-blue-200">
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className="hover:text-blue-200">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className="hover:text-blue-200">
                        <FaTiktok size={24} />
                    </a>
                </div>

                {/* Copyright Notice */}
                <div className="mt-4 text-sm">
                    &copy; TAYD'S 2024
                </div>
            </div>
        </footer>
    );
};

export default Footer;
