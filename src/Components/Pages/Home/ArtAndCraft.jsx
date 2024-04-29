import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const ArtAndCraft = ({ artandcrft }) => {
    // const [subCategory, setSubCategory] = useState('hh')
    const navigate = useNavigate()
    const { photo, subcategoryName } = artandcrft
    console.log(photo);

    const handelCLickSubCategory = (subcategoryName) => {
        console.log(subcategoryName);
        fetch(`http://localhost:5000/craftarts/${subcategoryName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // navigate(`/craftarts/${subcategoryName}`)
            })
    }
    // console.log(subCategory);
    return (
        <Link to={`/craftarts/${subcategoryName}`}>
            <div className='mt-5' onClick={() => handelCLickSubCategory(subcategoryName)}>
                <div className="hero min-h-screen rounded-2xl hh" style={{ backgroundImage: `url(${photo})` }}>
                    <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold font-inter">{subcategoryName}</h1>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArtAndCraft;