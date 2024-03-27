import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const UserProfile = () => {

    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const {data  : count = []} = useQuery({
        queryKey : ['count'], 
        queryFn : async () => {
            const res = await axiosPublic('/count')
            return res.data
        }
    })
console.log(count);
    return (
        <div>
            <h3 className='text-4xl'>Profile </h3>
            <img src={user.photoURL} alt="" />
            <h2 className="text-3xl">{user.displayName}</h2>
            <h2 className="text-3xl">{user.email}</h2>

            <h2>venues : {count.venues}</h2>
            <h2>dress : {count.dress}</h2>
            <h2>catering : {count.catering}</h2>
            <h2>entertainment : {count.entertainment}</h2>
            <h2>photographer : {count.photographer}</h2>

        </div>
    );
};

export default UserProfile;