import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const UserProfile = () => {

    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const { data: count = [] } = useQuery({
        queryKey: ['count'],
        queryFn: async () => {
            const res = await axiosPublic('/count')
            return res.data
        }
    })
    console.log(count);
    return (
        <div>
            <h3 className='text-4xl text-center font-extrabold my-6'>Profile </h3>
            <div className="flex justify-center items-center gap-12">
            <img className="rounded-full" src={user.photoURL} alt="" />
           <div>
           <h2 className="text-3xl">{user.displayName}</h2>
            <h2 className="text-3xl">{user.email}</h2>
           </div>
            </div>



           <div className="grid grid-cols-3 gap-8 text-center my-12">
           <div className="stats shadow p-4 bg-blue-50">
                <div className="stat">
                    <div className="stat-title text-2xl font-semibold">Total Venues</div>
                    <div className="stat-value text-center">{count.venues}</div>
                    <div className="stat-desc">Lets gain new experience with us </div>
                </div>
            </div>


            <div className="stats shadow p-4 bg-blue-50">
                <div className="stat">
                    <div className="stat-title text-2xl font-semibold">Total photographer</div>
                    <div className="stat-value text-center">{count.photographer}</div>
                    <div className="stat-desc">Lets gain new experience with us </div>
                </div>
            </div>


            <div className="stats shadow p-4 bg-blue-50">
                <div className="stat">
                    <div className="stat-title text-2xl font-semibold">Total catering</div>
                    <div className="stat-value text-center">{count.catering}</div>
                    <div className="stat-desc">Lets gain new experience with us </div>
                </div>
            </div>


            <div className="stats shadow p-4 bg-blue-50">
                <div className="stat">
                    <div className="stat-title text-2xl font-semibold">Total Entertainment</div>
                    <div className="stat-value text-center">{count.entertainment}</div>
                    <div className="stat-desc">Lets gain new experience with us </div>
                </div>
            </div>


            <div className="stats shadow p-4 bg-blue-50">
                <div className="stat">
                    <div className="stat-title text-2xl font-semibold">Total Dress</div>
                    <div className="stat-value text-center">{count.dress}</div>
                    <div className="stat-desc">Lets gain new experience with us </div>
                </div>
            </div>



         
           </div>

        </div>
    );
};

export default UserProfile;