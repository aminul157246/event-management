// import axios from "axios";
// import { useForm } from "react-hook-form";
import venues from '../../../assets/images/venue-bg.jpg'
import dress from '../../../assets/images/dress-bg.jpg'
import photographer from '../../../assets/images/photo-bg.jpg'
import catering from '../../../assets/images/catering.jpg'
import entertainment from '../../../assets/images/enter-bg.jpg'

import { NavLink } from "react-router-dom";
import EventBanner from './EventBanner/EventBanner'


const Events = () => {

    // const { register, handleSubmit } = useForm()
    // const onSubmit = async (data) => {
    //     console.log(data)
    //     const item = {
    //         first: data.first
    //     }

    //     const res = await axios.post('http://localhost:3000/events', item)
    //         console.log(res.data) 
    // }



    return (
        <div className='mx-12'>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("first", { required: true })} type="text" placeholder="" className="border input input-bordered w-full " />
                <button className='btn'>Add Item</button>
            </form> */}

            <EventBanner/>

           <div className='grid grid-cols-2 max-w-5xl mx-auto mb-16 gap-8'>
           <NavLink to={'/venues'}>
                <div
                    className="relative h-[250px] w-[500px]"
                    style={{
                        backgroundImage: `url(${venues})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-28 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding Venues</h2>
                    </div>
                </div>
            </NavLink>
            <NavLink to={'/dress'}>
            <div
                    className="relative h-[250px] w-[500px]"
                    style={{
                        backgroundImage: `url(${dress})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-28 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding Dress</h2>
                    </div>
                </div>
            </NavLink>


            <NavLink to={'/photographer'}>
            <div
                    className="relative h-[250px] w-[500px]"
                    style={{
                        backgroundImage: `url(${photographer})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-28 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding Photography</h2>
                    </div>
                </div>
            </NavLink>


            <NavLink to={'/catering'}>
            <div
                    className="relative h-[250px] w-[500px]"
                    style={{
                        backgroundImage: `url(${catering})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-28 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding catering</h2>
                    </div>
                </div>
            </NavLink>


            <NavLink to={'/entertainment'}>
            <div
                    className="relative h-[250px] w-[500px]"
                    style={{
                        backgroundImage: `url(${entertainment})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-28 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding entertainment</h2>
                    </div>
                </div>
            </NavLink>


           </div>


<div>

</div>



        </div>
    );
};

export default Events;