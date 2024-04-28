import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';

const NavBar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const handelLogOutBtn = () => {
        console.log('click');
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to logout!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Logout!",
                    text: "You have successfuly logout.",
                    icon: "success"
                });
                LogOut()
            }
        });

        // .then(res => {
        //     console.log(res);
        // })
        // .catch(error => {
        //     console.log(error);
        // })

    }
    const [them, setThem] = useState(true)
    const hi = () => {
        setThem(!them)
        if (them) {
            document.querySelector('html').setAttribute('data-theme', 'dark')
            document.body.classList.add('dark')
        }
        else{
            document.querySelector('html').setAttribute('data-theme', 'light')
            document.body.classList.remove('dark')
        }
        // document.getElementsByTagName
    }
    return (
        <div className='px-3 mt-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dark:text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/allart'>All Art & craft Items</NavLink>
                            {user && <NavLink to='/addcraft'>Add Craft Item</NavLink>}
                            {user && <NavLink to='/myart'>My Art & Craft List</NavLink>}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src="/Screenshot_60-removebg-preview.png" alt="" className='w-16' />
                        <a className="btn btn-ghost text-4xl font-rancho">Artisanal Fabrics</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 text-lg font-raleway font-medium items-center text-[#131313CC]">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/allart'>All Art & craft Items</NavLink>
                        {user && <NavLink to='/addcraft'>Add Craft Item</NavLink>}
                        {user && <NavLink to='/myart'>My Art & Craft List</NavLink>}
                    </ul>
                </div>
                <div className="navbar-end gap-3 font-inter text-lg">
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" onChange={hi} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    {/* <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-800">
                        <span className="relative">
                            <input id="Toggle1"  type="checkbox" onChange={hi} className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner bg-gray-600 peer-checked:bg-violet-600"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                        </span>
                    </label>
                    <input type="checkbox" onChange={hi} value="synthwave" className="toggle theme-controller them"/> */}
                    {user ? <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="top"><img className='w-16 ' src="/public/Screenshot_60-removebg-preview.png" alt="" /> </a> : <Link to='/register' className="btn bg-[#59C6D2] text-white">Register</Link>}
                    {user ? <button onClick={handelLogOutBtn} className="btn bg-[#23BE0A] text-white">Logout</button> : <Link to='/login' className="btn bg-[#23BE0A] text-white">Login</Link>}
                </div>
            </div>
            <Tooltip className='mt-3' id="my-tooltip"></Tooltip>
        </div>
    );
};

export default NavBar;