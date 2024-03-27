import { useContext } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const Venue = ({ item }) => {

    const {user } = useContext(AuthContext)
const axiosPublic = useAxiosPublic()
    const { image, location, name, capacity, description } = item;


    const handleAddToDatabase = () => {

        if(user && user.email){

            const cartItem = {userName : user.name , profile : user.photoURL , email: user.email,  image, location, name, capacity, description}

            axiosPublic.post('/carts', { cartItem })
                .then(res => {

                    console.log(res.data); 
                })

        }
    }



    return (
        <div>
            <div >


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p><small>{location}</small></p>
                        <h2 className="card-title">{name}</h2>
                        <p>{capacity}</p>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleAddToDatabase()} className="btn btn-accent">Book</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Venue;