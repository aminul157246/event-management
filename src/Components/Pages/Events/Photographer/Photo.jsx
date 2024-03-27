import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

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
            <div key={item._id}>


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={portfolio} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p><small>{location}</small></p>
                            <h2 className="card-title">{name}</h2>
                            <p>{price}</p>
                            <p>{style}</p>
                            <p>{description}</p>
                            <div className="card-actions justify-end">
                                <button onClick={()=>handleAddToDatabase()} className="btn btn-accent">Book</button>
                            </div>
                        </div>
                    </div>


                </div>
        </div>
    );
};

export default Photo;