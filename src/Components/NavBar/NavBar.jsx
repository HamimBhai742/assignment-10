import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

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
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
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
                        <NavLink to='/addcraft'>Add Craft Item</NavLink>
                        <NavLink to='/myart'>My Art & Craft List</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-3 font-inter text-lg">
                    {user ? <img className='w-16 ' src="/public/Screenshot_60-removebg-preview.png" alt="" /> : <Link to='/register' className="btn bg-[#59C6D2] text-white">Register</Link>}
                    {user ? <button onClick={handelLogOutBtn} className="btn bg-[#23BE0A] text-white">Logout</button> : <Link to='/login' className="btn bg-[#23BE0A] text-white">Login</Link>}


                </div>
            </div>
        </div>
    );
};

export default NavBar;