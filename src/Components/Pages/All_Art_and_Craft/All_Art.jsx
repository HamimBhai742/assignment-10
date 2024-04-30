import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const All_Art = () => {
    const allArtsAndCrafts = useLoaderData()
    console.log(allArtsAndCrafts);
    return (
        <div className='max-w-[1170px] mx-auto font-raleway'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='lg:text-xl'>
                        <tr>
                            <th>Sl No.</th>
                            <th>Item Name</th>
                            <th>Subcategory Name</th>
                            <th>Stock Status</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            allArtsAndCrafts.map((craft, idx) => <tr className='lg:text-lg' key={idx}>
                                <th>{idx + 1}</th>
                                <td>{craft.itemName}</td>
                                <td>{craft.subcategoryName}</td>
                                <td>{craft.stockStatus}</td>
                                <td>${craft.price}</td>
                                <td><Link to={`/viewdetails/${craft._id}`} className='btn bg-violet-700 text-white text-sm lg:text-lg hover:bg-violet-800 md:font-semibold'>View Details</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default All_Art;