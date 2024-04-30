import React, { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css'


const MyCraftCard = ({ craft, myCrafts, setMycrafts }) => {

    // console.log(craft);
    const handelDeleteCraft = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`https://assignment-10-server-side-ashen.vercel.app/addcraft/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const newCrafts = myCrafts.filter(crft => crft._id !== id)
                        setMycrafts(newCrafts)
                    })
            }
        });
    }

    useEffect(() => {
        AOS.init({
            disable:'mobile',
            duration:1000,
            offset:200
        });
    }, [])
    return (
        <div>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl font-inter rounded-xl" data-aos="fade-up">
                <figure><img src={craft.photo} alt="Shoes" className='h-[250px] w-full' /></figure>
                <Fade cascade duration={3000}>
                    <div className="card-body">
                        <h2  data-aos="fade-up"  className="card-title">{craft.itemName}</h2>
                        <p   data-aos="fade-up" className='text-lg'><span className='text-black font-semibold font-raleway'>Price:</span> ${craft.price} </p>
                        <p   data-aos="fade-up" className='text-lg'><span className='text-black font-semibold font-raleway'>Rating:</span> {craft.rating}</p>
                        <p   data-aos="fade-up" className='text-lg'><span className='text-black font-semibold font-raleway'>Customization:</span> {craft.customization}</p>
                        <p   data-aos="fade-up" className='text-lg'><span className='text-black font-semibold font-raleway'>Stock Status:</span> {craft.stockStatus}</p>
                        <div className="card-actions justify-between ">
                            <Link  data-aos="fade-right" to={`/updatecraft/${craft._id}`} className="btn btn-primary text-lg font-semibold">Update</Link>
                            <button  data-aos="fade-left" onClick={() => handelDeleteCraft(craft._id)} className='btn text-lg font-semibold btn-secondary'>Delete</button>

                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default MyCraftCard;