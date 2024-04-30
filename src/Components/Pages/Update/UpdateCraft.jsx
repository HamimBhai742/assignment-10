import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateCraft = () => {
    const loderCraft = useLoaderData()
    console.log(loderCraft);
    const handelCraftUpdateBtn = (e) => {
        e.preventDefault()
        const form = e.target
        const itemName = form.itemName.value
        const subcategoryName = form.subcategoryName.value
        const price = form.price.value
        const description = form.description.value
        const time = form.time.value
        const rating = form.rating.value
        const photo = form.photo.value
        const customization = form.art.value
        const stockStatus = form.stock.value
        const updateItem = { itemName, subcategoryName, price, description, time, rating, photo, customization, stockStatus }
        console.log(updateItem);
        fetch(`https://assignment-10-server-side-ashen.vercel.app/updatecraft/${loderCraft._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Update!",
                        text: "You have successfully update!",
                        icon: "success"
                    });
                }
                form.reset()
            })
    }
    return (
        <section className='max-w-[1170px] mx-auto  my-8 max-sm:mx-3'>

            <div className="p-6  bg-[#328EFF26] mt-5 rounded-xl">
                <form onSubmit={handelCraftUpdateBtn} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="py-5 px-10">

                        <div className="text-center">
                            <p className="font-rancho text-3xl md:text-5xl text-[#374151]">Update My Craft Item</p>
                        
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mt-5 font-raleway">
                            {/* <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Name</label>
                                <input id="firstname" type="text" placeholder="Enter your name" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='name' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Email</label>
                                <input id="lastname" type="email" placeholder="Enter your email" className="w-full  pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='email' />
                            </div> */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Item Name</label>
                                <input id="firstname" type="text" placeholder="Enter item name" className="w-full pl-3 h-12 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.itemName} name='itemName' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Subcategory Name</label>
                                <input id="lastname" type="text" placeholder="Enter subcategory name" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.subcategoryName} name='subcategoryName' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Price</label>
                                <input id="firstname" type="number" placeholder="Enter Price" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.price} name='price' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Photo URL</label>
                                <input id="lastname" type="text" placeholder="Enter short description" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.photo} name='photo' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Processing Time</label>
                                <input id="firstname" type="text" placeholder="Enter processing time" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.time} name='time' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Rating</label>
                                <input id="lastname" type="text" placeholder="Enter rating" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.rating} name='rating' />
                            </div>

                            <div>
                                <label htmlFor="address" className="text-xl font-semibold">Customization</label>
                                <div className='flex gap-5 mt-1'>
                                    <div className='flex items-center  gap-2' > <input type="radio" name="art" value='Yes' defaultValue={loderCraft?.customization} /> <span>Yes</span></div>
                                    <div className='flex items-center  gap-2' > <input type="radio" name="art" defaultValue={loderCraft?.customization} value='No' /> <span>No</span></div>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="address" className="text-xl font-semibold">Stock Status</label>
                                    <div className='flex gap-5 mt-1 w-[300px]'>
                                        <div className='flex items-center  gap-2' > <input type="radio" name="stock" value='In stock' /> <span>In stock</span></div>
                                        <div className='flex items-center  gap-2' > <input type="radio" name="stock" value='Made to Order' /> <span>Made to Order</span></div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-xl font-semibold">Short Description</label>
                                {/* <input id="address" type="url" placeholder="Enter photo URL" className="w-full h-12  pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.photo} name='photo' /> */}
                                <textarea id="description" name="description" rows="4" cols="50" className="w-full mt-2 pt-1   pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft.description}></textarea>
                            </div>

                            <div className="col-span-full mt-3">
                                <input id="address" type="submit" value="Update" className="w-full text-2xl font-rachno h-12 btn bg-[#328EFF] border-2 border-[#331A15]" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default UpdateCraft;