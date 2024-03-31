import { FaArrowRightLong } from "react-icons/fa6";


const Reservation = () => {
    return (
        <div className="mt-16 mx-12">
            <p className='text-[#F4A492] text-xl text-center  '>Unforgettable Events</p>

            <h3 className='text-3xl lg:text-5xl text-center font-bold'>Make Reservations</h3>
            <p className="text-xl text-center px-6 my-8  ">Lorem ipsum dolor sit amet consectetur adipiscing elit  Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit sed doeiusm tempor incididunt</p>

            <div className="max-w-7xl mx-auto p-4">
                <div className=" gap-6 lg:flex justify-center items-center">

                    <div>
                        <input type="text" placeholder='Name' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                        <input type="text" placeholder='Email' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                    </div>

                    <div>
                        <input type="text" placeholder='Phone' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                        <input type="text" placeholder='Event' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                    </div>


                </div>
                <div className="">
                    <textarea className='mt-4 rounded-3xl  lg:ml-52 w-72 lg:w-2/3 border-2 border-gray-300 p-2' name="" id="" cols="50" placeholder='Message' rows="3"></textarea>
                    <div className="flex items-center justify-center mt-4">
                        <button className="btn px-8 text-[#F4A492]"><span className="flex gap-2 items-center">Reserve<FaArrowRightLong/></span></button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Reservation;