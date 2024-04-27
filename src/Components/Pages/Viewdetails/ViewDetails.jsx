import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const craft = useLoaderData()
    console.log(craft);
    return (
        <div>

        </div>
    );
};

export default ViewDetails;