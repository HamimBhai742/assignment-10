import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ArtandcraftDetails from './ArtandcraftDetails';

const ArtCraftData = () => {
    const subCategory = useLoaderData()
    console.log(subCategory);
    return (
        <div className='flex flex-col gap-8 mt-8'>
            {
                subCategory?.map((sub, idx) => <ArtandcraftDetails key={idx} sub={sub}></ArtandcraftDetails>)
            }
        </div>
    );
};

export default ArtCraftData;