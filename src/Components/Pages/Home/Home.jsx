import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade, Slide } from "react-awesome-reveal";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
import CraftCard from './CraftCard';
import ArtAndCraft from './ArtAndCraft';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const loderCraft = useLoaderData()
    const [text] = useTypewriter({
        words: ['Meet your new art advisor.'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [text2] = useTypewriter({
        words: ['Customized fabrics for demanding applications'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [text3] = useTypewriter({
        words: ['To get your favorite beadwork items'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [text4] = useTypewriter({
        words: ['Ready to create your custom embroidery order?'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [text5] = useTypewriter({
        words: ['Learn the Differences Between Knitting and Crocheting'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    console.log();

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className='max-w-[1170px] mx-3 md:mx-5 lg:mx-auto mt-5'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-lg z-20">
                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url("/sl1 (1).jpg")' }}>
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">  <span className='font-raleway'>{text}</span>
                                        <Cursor cursorColor='purple' /></h1>

                                    <button className="p-3 rounded-xl border-2 border-violet-600 text-white bg-none font-work-sans text-lg font-semibold">Explore</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url("/sl1 (6).jpg")' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">  <span className='font-raleway'>{text2}</span>
                                        <Cursor cursorColor='purple' /></h1>

                                    <button className="p-3 rounded-xl border-2 border-violet-600 text-white bg-none font-work-sans text-lg font-semibold">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url("/ssll (9).jpg")' }}>
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">  <span className='font-raleway'>{text3}</span>
                                        <Cursor cursorColor='purple' /></h1>

                                    <button className="p-3 rounded-xl border-2 border-violet-600 text-white bg-none font-work-sans text-lg font-semibold">Explore Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url("/sl1 (4).jpg")' }}>
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">  <span className='font-raleway'>{text4}</span>
                                        <Cursor cursorColor='purple' /></h1>

                                    <button className="p-3 rounded-xl border-2 border-violet-600 text-white bg-none font-work-sans text-lg font-semibold">SUBMIT INQUIRY</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url("/ssll (8).jpg")' }}>
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">  <span className='font-raleway'>{text5}</span>
                                        <Cursor cursorColor='purple' /></h1>

                                    <button className="p-3 rounded-xl border-2 border-violet-600 text-white bg-none font-work-sans text-lg font-semibold">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className='mt-10'>
                    <h3 className='text-4xl  text-center font-bold font-raleway'>Craft Items</h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5'>
                        {
                            loderCraft.map((craft, idx) => <CraftCard key={idx} craft={craft}></CraftCard>)
                        }
                    </div>
                </div>

                <div className='mt-8'>
                    <h3 className='text-4xl  text-center font-bold font-raleway'>Art & Craft </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5'>
                        {
                            loderCraft.map((artandcrft, idx) => <ArtAndCraft key={idx} artandcrft={artandcrft}></ArtAndCraft>)
                        }
                    </div>
                </div>
                <div className='mt-10'>
                    <h3 className='text-4xl  text-center font-bold font-raleway'>Arts & Craft Clloection</h3>
                </div>
                <div className='grid md:grid-cols-12 grid-cols-6 mt-5'>
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/sl1 (1).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/sl1 (3).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/sl1 (4).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/sl1 (6).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (10).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (11).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (12).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (13).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (14).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (15).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (2).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (3).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (4).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (5).jpg" alt="" />
                    <img className='md:col-span-4 col-span-3 h-[300px] zoom' src="/ssll (6).jpg" alt="" />
                </div>
            </div>


            {/* <div>
                <Fade cascade damping={0.1}>
                    <p>I enter first...</p>
                    <p>...then comes my turn...</p>
                    <p>...and finally you see me!</p>
                </Fade>
                <Slide triggerOnce>
                    <p>I will animate only the first time you see me</p>
                </Slide>
            </div> */}
        </div>
    );
};

export default Home;