import React, { createContext, useContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyCraftCard from './MyCraftCard';
export const AssetContext = createContext(null)

const MyCraft = () => {

    const loderCraft = useLoaderData()
    // const [crafts, setCrafts] = useState(loderCraft)
    const { user } = useContext(AuthContext)
    const myCraft = loderCraft.filter(crft => crft.email === user.email)
    // console.log(myCraft);
    const [myCrafts, setMycrafts] = useState(myCraft)
    console.log(myCrafts, myCraft);
    const [selected, setSlected] = useState()
    const handelShortingBtn = (e) => {
        setSlected(e.target.value);
        // console.log(selected);
        // console.log(myCraft);
    }
    console.log(selected);
    if (selected === 'No') {
        const no = myCrafts.sort((a, b) => (a.customization < b.customization) ? -1 : (a.customization > b.customization) ? 1 : 0);
    }
    else if (selected === 'Yes') {
        const yes = myCrafts.sort((a, b) => (a.customization < b.customization) ? 1 : (a.customization > b.customization) ? -1 : 0);
    }
    return (
        <div className=' max-sm:mx-3 md:mx-5'>
            <div className="mt-5 flex justify-center">
                <select value={selected} onChange={handelShortingBtn} className=" font-work-sans select border-none text-white select-bordered w-full max-w-[200px] font-semibold text-lg bg-[#23BE0A]">
                    <option disabled selected>Sort By</option>
                    <option className="text-[#131313CC] bg-[#1313130D]">No</option>
                    <option className="text-[#131313CC] bg-[#1313130D]">Yes</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1170px] lg:mx-auto mt-16'>
                {
                    myCrafts.map((craft, idx) => <MyCraftCard myCrafts={myCrafts} setMycrafts={setMycrafts} craft={craft} key={idx}></MyCraftCard>)
                }
            </div>
        </div>
    );
};

export default MyCraft;