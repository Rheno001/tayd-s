import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Slider from '../../components/slider';
import { CgGym } from "react-icons/cg";

const BackgroundShape = ({ className, style }) => (
    <div className={`background-shape ${className}`} style={style}></div>
);

const Home = () => {
    const { ref: ref9, inView: inView9 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref10, inView: inView10 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref11, inView: inView11 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref12, inView: inView12 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref13, inView: inView13 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref14, inView: inView14 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
        return (
        <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('src/assets/gym-background.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
          <div className="flex flex-col items-center justify-center h-screen text-center text-white">
            <div>
                <motion.div ref={ref10}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: inView10 ? 1 : 0,
                        y: inView10 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                    <h1 className='text-5xl lg:text-8xl font-bold relative text-center'><span className='text-red-700'>HARD WORK</span> IS FOR EVERY SUCCESS</h1>
                </motion.div>
            </div>
                <motion.div ref={ref9}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: inView9 ? 1 : 0,
                        x: inView9 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-start'>
                   <p className="mt-4 text-2xl font-semibold relative">Unleash Your Inner <span className='text-red-700'>Strength!</span></p>
                </motion.div>

                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Search for locations..."
                        className="p-2 text-center bg-white rounded-lg border border-gray-300 relative"
                    />
                </div>
          </div>
          <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('src/assets/backgrey.jpg')" }}>

            <section className="reason py-8 text-gray-800">
                <div className="flex flex-col px-16 py-16 items-center justify-center">
                <motion.div ref={ref11}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: inView11 ? 1 : 0,
                        x: inView11 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-start'>
                   <h2 className="text-6xl font-bold text-red-700">ABOUT US</h2>
                </motion.div>
                <motion.div ref={ref12}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                        opacity: inView12 ? 1 : 0,
                        x: inView12 ? 0 : -100,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-start'>
                   <div className='lg:px-[100px] mt-[20px]'><p className='text-xl text-white lg:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum nemo, ut, eius assumenda impedit officiis beatae fugiat asperiores dolore qui cumque architecto eligendi quibusdam, adipisci veritatis possimus dolor nesciunt dolorem amet. Iure facilis in quis quas iste maiores praesentium.</p></div>
                </motion.div>


                </div>
                <section className="py-16 text-gray-800" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div ref={ref13}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: inView13 ? 1 : 0,
                        y: inView13 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                    <h2 className="text-6xl font-bold text-red-700">MEMBERSHIP PLANS</h2>
                </motion.div>
                    <div className="mt-6 flex flex-wrap gap-4 lg:gap-2 justify-center space-x-4">
                        <div className="p-[50px] border rounded-lg hover:scale-105 transition-all" style={{ backgroundImage: "url('src/assets/greyback.jpg')" }}>
                            <h3 className="text-2xl font-bold">Standard</h3>
                            <ul className='list-disc text-left font-semibold'>
                                <li>Includes Membership</li>
                                <li>Diet Plan Included</li>
                                <li>Health and Fitness Tips</li>
                                <li>2 days Gym Access</li>
                                <li>No Additional Ammenities</li>
                            </ul>
                            <p className="mt-2 text-red-700 font-medium">$20/month</p>
                        </div>
                        <div className="p-[50px] border rounded-lg hover:scale-105 transition-all" style={{ backgroundImage: "url('src/assets/greyback.jpg')" }}>
                            <h3 className="text-2xl font-bold">Ultimate</h3>
                            <ul className='list-disc text-left font-semibold'>
                                <li>Includes Membership</li>
                                <li>Access to all gym Facilities</li>
                                <li>Diet Plan Included</li>
                                <li>Health and Fitness Tips</li>
                                <li>Monday-Friday Gym Access</li>
                                <li>No Additional Ammenities</li>
                            </ul>
                            <p className="mt-2 text-red-700 font-medium">$50/month</p>
                        </div>
                        <div className="p-[50px] border rounded-lg hover:scale-105 transition-all" style={{ backgroundImage: "url('src/assets/greyback.jpg')" }}>
                            <h3 className="text-2xl font-bold">Professional</h3>
                            <ul className='list-disc text-left font-semibold'>
                                <li>Includes Membership</li>
                                <li>Access to all gym Facilities</li>
                                <li>Diet Plan Included</li>
                                <li>Health and Fitness Tips</li>
                                <li>Monday-Friday Gym Access</li>
                                <li>No Additional Ammenities</li>
                            </ul>
                            <p className="mt-2 text-red-700 font-medium">$100/month</p>
                        </div>
                    </div>
                </div>
            </section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className='lg:pt-[20px]'>
                         <Slider />
                    </div>
                </div>
            </section>

            

            

            <section className="py-16 text-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div ref={ref14}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: inView14 ? 1 : 0,
                        y: inView14 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                    <h2 className="text-4xl lg:text-6xl font-bold text-red-700">WHAT OUR CLIENTS HAVE TO SAY</h2>
                </motion.div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className="mt-6"
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        
                    >
                        <SwiperSlide>
                            <div className="p-6 rounded-lg shadow-lg">
                                <blockquote className='text-white text-xl font-bold'>"TAYD'S has transformed my fitness journey!"</blockquote>
                                <cite className="block mt-2 text-red-700 text-xl font-semibold">- Dave Blunts</cite>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-6 rounded-lg shadow-lg">
                                <blockquote className='text-white text-xl font-bold'>"The trainers are incredibly supportive!"</blockquote>
                                <cite className="block mt-2 text-red-700 text-xl font-semibold">- Lizzo</cite>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-6 rounded-lg shadow-lg">
                                <blockquote className='text-white text-xl font-bold'>"I love the community vibe at TAYD'S!"</blockquote>
                                <cite className="block mt-2 text-red-700 text-xl font-semibold">- Druski</cite>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="custom-pagination relative z-[100000000]"></div>
                </div>
            </section>
           </div>
        </div>
    );
};

export default Home;
