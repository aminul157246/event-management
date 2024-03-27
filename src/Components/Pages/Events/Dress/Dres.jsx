import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { CiLocationOn } from "react-icons/ci";

const Dres = ({ item }) => {
    const {
        image,
        brand,
        price,
        color,
        description
    } = item;

const {user } = useContext(AuthContext)
const axiosPublic = useAxiosPublic()

    const handleAddToDatabase = () => {

        if(user && user.email){

            const cartItem = {userName : user.name  , profile : user.photoURL , color , email: user.email,  image :image, location, brand, price, description}

            axiosPublic.post('/carts', { cartItem })
                .then(res => {

                    console.log(res.data); 
                })

        }
    }

    return (
        <div>
            <div >


                <div className="card h-[600px]  bg-base-100 shadow-xl">
                    <figure><img className="w-4/5 h-80" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        
                        <h2 className="text-2xl font-bold">{brand}</h2>
                        <p>Price : <span className="font-semibold">{price}</span></p>
                        <p>Color : <span className="font-semibold">{color}</span></p>
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

export default Dres;