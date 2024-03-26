import { MdEventSeat } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

const Reservation = () => {
    return (
        <div className="mt-16">
        <p className='text-[#F4A492] text-xl text-center  '>Unforgettable Events</p>

            <h3 className='text-5xl text-center font-bold'>Make Reservations</h3>
            <p className="text-xl text-center mt-4 ">Lorem ipsum dolor sit amet consectetur adipiscing elit  Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit sed doeiusm tempor incididunt</p>

            <div className="max-w-5xl mx-auto ">

                <div>
                    <label className="input  mt-5 input-bordered flex items-center gap-2">
                        <FaUsers />
                        <input type="text" className="grow " placeholder="Username" />
                    </label>

                    <label className="input  mt-5 input-bordered flex items-center gap-2">
                        <MdOutlineMail />
                        <input type="text" className="grow rounded-3xl" placeholder="Email" />
                    </label>
                </div>



                <div>

                    <label className="input  mt-5 input-bordered flex items-center gap-2">
                        <CgCalendarDates />
                        <input type="text" className="grow " placeholder="Date" />
                    </label>


                    <label className="input  mt-5 input-bordered flex items-center gap-2">
                        <MdEventSeat />
                        <input type="text" className="grow " placeholder="Select Event" />
                    </label>
                </div>

            </div>
            <div className="flex justify-center">
            <button className=' ml-16 bg-[#9ACCC9] duration-500 hover:bg-[#F4A492] px-5 text-xl rounded-3xl py-3  mt-8'>Make Reservation</button>
            </div>


        </div>
    );
};

export default Reservation;