import React, { useContext } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const ManageItem = () => {

const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

const {data : carts=[]} = useQuery({
    queryKey : ['cartss', user?.email],
    queryFn : async () => {
     const res = await axiosPublic.get(`/carts?email=${user.email}`)
    //  console.log(res.data);
     return res.data
    }
})
console.log( "database", carts);



    return (
        <div>
        <h2 className="text-4xl text-center pt-12 font-bold">All Apartments</h2>
        <h3 className="text-3xl pl-12 font-semibold">Total Items : {carts.length}</h3>


        <div className="overflow-x-auto p-12">
            <table className="table p-12">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Apartment</th>
                        <th>Price($)</th>
                        <th>Address</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        carts.map((cart, idx) => <tr key={cart._id}>
                            <th>
                                {idx + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cart.cartItem.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{cart.cartItem.name}</td>
                            <td>{cart.cartItem.price}</td>
                            <td>{cart.cartItem.location}</td>
                            {/* <td>
                                <Link to={`/dashboard/updateApartment/${apartment._id}`}><button className="  text-2xl font-bold btn btn-ghost"
                                // onClick={() => handleUpdateItem(apartment._id)}
                                > <FaEdit /></button></Link>
                            </td> */}
                            {/* <td><button className="text-red-500 text-2xl font-bold btn btn-ghost" onClick={() => handleDeleteItem(apartment._id)}><RiDeleteBin6Line/></button></td> */}
                        </tr>)
                    }

                </tbody>


            </table>
        </div>

    </div>
    );
};

export default ManageItem;