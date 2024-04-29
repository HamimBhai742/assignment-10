import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
import CraftCard from './CraftCard';
import ArtAndCraft from './ArtAndCraft';


const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const loderCraft = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className='max-w-[1170px] mx-3 md:mx-5 lg:mx-auto mt-5'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-lg z-20">
                    <SwiperSlide><img className='md:h-[500px] h-[300px] md:w-[1170px]' src="/sl1 (1).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[500px] h-[300px] md:w-[1170px]' src="/sl1 (2).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[500px] h-[300px] md:w-[1170px]' src="/sl1 (3).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[500px] h-[300px] md:w-[1170px]' src="/sl1 (4).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[500px] h-[300px] md:w-[1170px]' src="/sl1 (5).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[500px] h-[300px] md:w-[1170px]' src="/sl1 (6).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[500px] h-[300px] md:w-[1170px]' src="/sl1 (7).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='md:h-[500px] h-[300px] md:w-[1170px]' src="/sl1 (8).jpg" alt="" /></SwiperSlide>
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
                            loderCraft.map((artandcrft,idx) => <ArtAndCraft key={idx} artandcrft={artandcrft}></ArtAndCraft>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;