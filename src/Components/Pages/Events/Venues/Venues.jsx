import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Venue from './Venue';

const Venues = () => {


   const axiosPublic = useAxiosPublic()
const {user} = useContext(AuthContext)

        const {data : venues = []} = useQuery({
            queryKey : ['venues'], 
            queryFn : async () => {
                const res =  await axiosPublic.get('/venues')
                // console.log(res.data);
                return res.data
            }
        })


        // const { refetch, data: cart } = useQuery({
        //     queryKey: ['cart', user?.email],
    
        //     queryFn: async () => {
        //         const res = await axiosPublic.get(`/carts?email=${user?.email}`)
        //         return res.data;
        //     },
    
        // })

    return (
        <div className='grid grid-cols-3 mx-12'>
            {
                venues.map(item => <Venue key={item._id} item={item}></Venue>)
            }
        </div>
    );
};

export default Venues;