import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Home = () => {
    const { ref: ref10, inView: inView10 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('src/assets/gym-background.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
            <div className="flex flex-col items-center justify-center h-screen text-center text-white">
            <div><motion.div ref={ref10}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: inView10 ? 1 : 0,
                        y: inView10 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                    <h1 className='text-8xl font-bold relative'>TAYD'S GYM</h1>
                </motion.div>
                </div>
                <p className="mt-4 text-xl relative">Unleash Your Inner Strength!</p>
                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Search for locations..."
                        className="p-2 bg-white rounded-lg border border-gray-300 relative"
                    />
                </div>
            </div>

            <section className="py-16 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">Why Join TAYD'S?</h2>
                    <ul className="mt-6 space-y-4">
                        <li>✅ Access to top-notch equipment</li>
                        <li>✅ Personalized training plans</li>
                        <li>✅ Community support and motivation</li>
                        <li>✅ Flexible membership options</li>
                    </ul>
                </div>
            </section>

            <section className="py-16 bg-gray-100 text-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">Membership Plans</h2>
                    <div className="mt-6 flex justify-center space-x-4">
                        <div className="p-[50px] border rounded-lg">
                            <h3 className="text-2xl font-bold">Monthly</h3>
                            <p className="mt-2">$30/month</p>
                        </div>
                        <div className="p-[50px] border rounded-lg">
                            <h3 className="text-2xl font-bold">Quarterly</h3>
                            <p className="mt-2">$80/3 months</p>
                        </div>
                        <div className="p-[50px] border rounded-lg">
                            <h3 className="text-2xl font-bold">Yearly</h3>
                            <p className="mt-2">$300/year</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">What Our Clients Say</h2>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className="mt-6"
                    >
                        <SwiperSlide>
                            <div className="p-6 border rounded-lg shadow-lg">
                                <blockquote>"TAYD'S has transformed my fitness journey!"</blockquote>
                                <cite className="block mt-2 font-semibold">- Dave Blunts</cite>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-6 border rounded-lg shadow-lg">
                                <blockquote>"The trainers are incredibly supportive!"</blockquote>
                                <cite className="block mt-2 font-semibold">- Lizzo</cite>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-6 border rounded-lg shadow-lg">
                                <blockquote>"I love the community vibe at TAYD'S!"</blockquote>
                                <cite className="block mt-2 font-semibold">- Druski</cite>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Home;
