import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

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
                fetch(`http://localhost:5000/addcraft/${id}`, {
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
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl font-inter rounded-xl">
                <figure><img src={craft.photo} alt="Shoes" className='h-[250px] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{craft.itemName}</h2>
                    <p className='text-lg'><span className='text-black font-semibold font-raleway'>Price:</span> ${craft.price} </p>
                    <p className='text-lg'><span className='text-black font-semibold font-raleway'>Rating:</span> {craft.rating}</p>
                    <p className='text-lg'><span className='text-black font-semibold font-raleway'>Customization:</span> {craft.customization}</p>
                    <p className='text-lg'><span className='text-black font-semibold font-raleway'>Stock Status:</span> {craft.stockStatus}</p>
                    <div className="card-actions justify-between ">
                        <Link to={`/updatecraft/${craft._id}`} className="btn btn-primary text-lg font-semibold">Update</Link>
                        <button onClick={() => handelDeleteCraft(craft._id)} className='btn text-lg font-semibold btn-secondary'>Delete</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftCard;