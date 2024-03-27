

const Reservation = () => {
    return (
        <div className="mt-16">
            <p className='text-[#F4A492] text-xl text-center  '>Unforgettable Events</p>

            <h3 className='text-5xl text-center font-bold'>Make Reservations</h3>
            <p className="text-xl text-center my-8  ">Lorem ipsum dolor sit amet consectetur adipiscing elit  Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit sed doeiusm tempor incididunt</p>

            <div className="max-w-7xl mx-auto">
                <div className=" gap-6 flex justify-center items-center">

                    <div>
                        <input type="text" placeholder='Name' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                        <input type="text" placeholder='Email' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                    </div>

                    <div>
                        <input type="text" placeholder='Phone' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                        <input type="text" placeholder='Event' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                    </div>


                </div>
                <textarea className='mt-4 rounded-3xl  ml-52  border-2 border-gray-300 p-2 ' name="" id="" cols="112" placeholder='Message' rows="5"></textarea>


            </div>


        </div>
    );
};

export default Reservation;