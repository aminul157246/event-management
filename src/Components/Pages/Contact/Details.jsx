import { FaAddressBook } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Details = () => {
    return (
        <div>
            <div className="bg-blue-50 h-96   p-12">
                <p className="text-center text-[#F4A492]">Contact with us</p>
                <h3 className='text-center text-6xl font-bold'>Contact Details</h3>
                <div>




                    <div className="flex gap-6 justify-center mt-8">

                        <div className='flex gap-4 bg-white item p-8 items-center rounded-tr-3xl'>
                            <div className='p-3 text-2xl rounded-full bg-[#9ACCC9] text-white'>
                                <IoCallOutline />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">Call Us</p>
                                <p className='text-lg'>(123) 456 - 789 - 00</p>
                                <p className="text-xl">+(321) 111 456 789</p>

                            </div>
                        </div>

                        <div className='flex p-8  bg-white gap-4 items-center rounded-tr-3xl'>
                            <div className='p-3 text-2xl rounded-full bg-[#9ACCC9] text-white'>
                                <FaAddressBook />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">Address </p>
                                <p className='text-lg'>121 King Street Melbourne, <br /> 3000, Australia</p>



                            </div>
                        </div>

                        <div className='flex p-8  bg-white gap-4 items-center rounded-tr-3xl'>
                            <div className='p-3 text-2xl rounded-full bg-[#9ACCC9] text-white'>
                                <TfiEmail />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">Email Us </p>
                                <p className='text-lg'>help@Bridely.com</p>
                                <p className='text-lg'>support@bridely.com
                                </p>

                            </div>
                        </div>
                    </div>




                </div>
            </div>


        </div>
    );
};

export default Details;