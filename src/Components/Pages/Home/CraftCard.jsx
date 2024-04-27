import React from 'react';
import { Link } from 'react-router-dom';

const CraftCard = ({ craft }) => {
    console.log(craft);
    const {subcategoryName,name,itemName,photo,_id,description} = craft
    return (
        <div>
            <div className="card card-compact rounded-lg w-96 bg-base-100 border-2 border-violet-500 font-raleway">
                <figure className='px-5 pt-5'><img className=' rounded-lg h-[200px] w-96' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>{description.slice(0,100)}...</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewdetails/${_id}`} className="btn border-2  hover:border-none hover:bg-violet-700 font-semibold hover:text-white text-lg">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;