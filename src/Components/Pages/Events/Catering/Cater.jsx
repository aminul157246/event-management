import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { CiLocationOn } from "react-icons/ci";
const Cater = ({ item }) => {


    const { user } = useContext(AuthContext)
    const axiosPublic =  useAxiosPublic()

    const {image,location,price,name,specialty,description} = item;



    const handleAddToDatabase = () => {

        if (user && user.email) {

            const cartItem = { userName: user.name, profile: user.photoURL, email: user.email,price, image, location,name ,specialty, description }

            axiosPublic.post('/carts', { cartItem })
                .then(res => {

                    console.log(res.data);
                })

        }
    }



    return (
        <div>
            <div>


                <div className="card h-[600px]  bg-base-100 shadow-xl">
                    <figure><img className='w-3/4 h-80' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div ><small className='flex gap-1 items-center'><CiLocationOn/>{location}</small></div>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p> Specialty :<span className='font-semibold ml-1'>{specialty}</span> </p>
                        <p>Price : <span className='ml-1 font-semibold'>{price}</span></p>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleAddToDatabase} className="px-4 py-2 border-none bg-[#9ACCC9] hover:bg-[#F4A492]  rounded-lg">Book</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Cater;