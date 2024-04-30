import React from 'react';
import { Link } from 'react-router-dom';

const ArtandcraftDetails = ({ sub }) => {
    const { itemName, subcategoryName, photo, description, price, rating, time, _id } = sub
    console.log(sub);
    // console.log(subcategoryName, itemName, photo, description);
    return (
        <div className='max-w-[1170px] md:mx-auto mx-3'>
            <div className="card lg:card-side bg-[#328EFF26] shadow-xl font-work-sans">
                <figure><img className='w-96 md:h-[360px] max-sm:h-[250px] max-sm:mt-5 max-sm:rounded-xl' src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{itemName}</h2>
                    <h4 className='text-lg font-semibold text-gray-600'>#{subcategoryName}</h4>
                    <p className='md:w-[550px] font-inter'>{description}</p>
                    <div>
                        <div>
                            <p className='text-lg'><span className='font-semibold'>Price:</span> ${price}</p>
                            <p className='text-lg'><span className='font-semibold'>Rating:</span> {rating}</p>
                            <p className='text-lg'><span className='font-semibold'>Processing Time:</span> {time} Day</p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/viewdetails/${_id}`} className='btn bg-green-600 text-white text-sm lg:text-lg hover:bg-green-700 md:font-semibold'>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtandcraftDetails;