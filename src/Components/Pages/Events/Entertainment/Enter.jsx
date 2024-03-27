import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { CiLocationOn } from "react-icons/ci"
const Enter = ({item}) => {

const {user} = useContext(AuthContext)
const axiosPublic = useAxiosPublic()

    const {
        image,
        location,
        name,price,
        type,
        description,} = item;

        const handleAddToDatabase = () => {

            if(user && user.email){
    
                const cartItem = {userName : user.name ,price, profile : user.photoURL , email: user.email,  image :image, location, name, type, description}
    
                axiosPublic.post('/carts', { cartItem })
                    .then(res => {
    
                        console.log(res.data); 
                    })
    
            }
        }


        

    return (
        <div>


                    <div className="card h-[600px]  bg-base-100 shadow-xl">
                        <figure><img className='h-80 w-3/4' src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p><small  className='flex gap-1'><CiLocationOn/>{location}</small></p>
                            <h2 className="text-2xl font-bold">{name}</h2>
                            <p>Type :  <span className='font-semibold ml-1'>{type}</span></p>
                            <p>Price : <span className='font-semibold ml-1'>{price}</span></p>
                            <p>{description}</p>
                            <div className="card-actions justify-end">
                            <button onClick={handleAddToDatabase} className="px-4 py-2 border-none bg-[#9ACCC9] hover:bg-[#F4A492]  rounded-lg">Book</button>
                        </div>
                        </div>
                    </div>


                </div>
    );
};

export default Enter;