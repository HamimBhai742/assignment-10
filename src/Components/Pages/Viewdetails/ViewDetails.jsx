import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const craft = useLoaderData()
    console.log(craft);
    return (
        <div className='flex max-w-[1170px] mx-auto gap-7 items-center mt-8'>
            <div>
                <img className='w-[650px] h-[500px] rounded-lg' src={craft.photo} alt="" />
            </div>
            <div>
                <div className='flex gap-3 items-center '>
                    <div className='indicator relative'>
                        <img src="/public/sl1 (6).jpg" className='w-16 rounded-full h-16' alt="" />
                        <div className='bg-green-500 w-4 h-4 rounded-full absolute border-2 border-white'>
                        </div>
                    </div>
                    <div className='font-raleway '>
                        <h3 className='text-lg font-semibold'>{craft.name}</h3>
                        <h5>{craft.email}</h5>
                    </div>
                </div>
                <div className='border border-dashed border-gray-500 my-3'></div>
                <div className='mt-5 font-raleway'>
                    <h3 className='text-3xl font-bold'>{craft.itemName}</h3>
                    <div className='border border-dashed border-gray-500 my-2'></div>
                    <h4 className='font-inter text-xl font-semibold'>#{craft.subcategoryName}</h4>
                    <div className='border border-dashed border-gray-500 my-2'></div>
                    <div className='font-inter mt-3'>
                        <p className='max-w-[650px]'>{craft.description}</p>
                        <p className='mt-3'><span className='font-semibold'>Price:</span> ${craft.price}</p>
                        <p><span className='font-semibold'>Rating:</span> {craft.rating}</p>
                        <p><span className='font-semibold'>Process Time:</span> {craft.time} Day</p>
                        <p><span className='font-semibold'>Customization:</span> {craft.customization}</p>
                        <p><span className='font-semibold'>Stock Status:</span> {craft.stockStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;