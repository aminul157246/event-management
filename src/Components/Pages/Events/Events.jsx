// import axios from "axios";
// import { useForm } from "react-hook-form";

import EventBanner from './EventBanner/EventBanner'
import Navlink from './Navlink/Navlink'


const Events = () => {

    // const { register, handleSubmit } = useForm()
    // const onSubmit = async (data) => {
    //     console.log(data)
    //     const item = {
    //         first: data.first
    //     }

    //     const res = await axios.post('https://event-management-server-lovat.vercel.app/events', item)
    //         console.log(res.data) 
    // }

    return (
        <div className='mx-12'>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("first", { required: true })} type="text" placeholder="" className="border input input-bordered w-full " />
                <button className='btn'>Add Item</button>
            </form> */}

            <EventBanner />

            <Navlink />
            <div>
            </div>
        </div>
    );
};

export default Events;