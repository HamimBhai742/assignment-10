import React from 'react';

const AddCraft = () => {
    const handelCraftAddBtn = () => {

    }
    return (
        <section className='max-w-[1170px] mx-auto  my-8'>
           
            <div className="p-6  bg-[#328EFF26] mt-5">
                <form onSubmit={handelCraftAddBtn} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="py-5 px-10">
                        <div className="text-center">
                            <p className="font-rancho text-5xl text-[#374151]">Add New Craft Item</p>
                            <p className="text-xs font-raleway max-w-[700px] mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mt-5 font-raleway">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Item Name</label>
                                <input id="firstname" type="text" placeholder="Enter craft name" className="w-full pl-3 h-12 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='name' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Subcategory Name</label>
                                <input id="lastname" type="text" placeholder="Enter subcategory_Name" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='chef' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Price</label>
                                <input id="firstname" type="text" placeholder="Enter Price" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='supplier' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Taste</label>
                                <input id="lastname" type="text" placeholder="Enter coffee taste" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='taste' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Processing Time</label>
                                <input id="firstname" type="text" placeholder="Enter coffee category" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='category' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Details</label>
                                <input id="lastname" type="text" placeholder="Enter coffee details" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='details' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">User Name</label>
                                <input id="firstname" type="text" placeholder="Enter coffee category" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='category' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">User Email</label>
                                <input id="lastname" type="text" placeholder="Enter coffee details" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='details' />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-xl font-semibold">Photo</label>
                                <input id="address" type="text" placeholder="Enter photo URL" className="w-full h-12   pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='photo' />
                            </div>
                            <div className="col-span-full mt-3">
                                <input id="address" type="submit" value="Add Cofffe" className="w-full text-2xl font-rachno h-12 btn bg-[#328EFF] border-2 border-[#331A15]" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default AddCraft;