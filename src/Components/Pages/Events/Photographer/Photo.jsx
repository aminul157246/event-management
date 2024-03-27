import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { CiLocationOn } from "react-icons/ci"
const Photo = ({item}) => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
const {portfolio,
    location,
    name,
    price,
    style,
    description} = item;

    const handleAddToDatabase = () => {

        if(user && user.email){

            const cartItem = {userName : user.name , profile : user.photoURL , email: user.email,  image :portfolio, location, name, price, style, description}

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
                        <figure><img className='h-80 w-3/4' src={portfolio} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className='flex gap-1'><CiLocationOn/><small>{location}</small></p>
                            <h2 className="card-title">{name}</h2>
                            <p>Price : <span className='font-semibold'>{price}</span></p>
                            <p>Style : <span className='font-semibold'>{style}</span></p>
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

export default Photo;