import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Venue from './Venue';

const Venues = () => {


   const axiosPublic = useAxiosPublic()

        const {isLoading,data : venues = []} = useQuery({
            queryKey : ['venues'], 
            queryFn : async () => {
                const res =  await axiosPublic.get('/venues')
                // console.log(res.data);
                return res.data
            }
        })


        if (isLoading) {
            return <>
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
            </>
        }

    return (
        <div className='grid grid-cols-3 gap-8 m-12'>
            {
                venues.map(item => <Venue key={item._id} item={item}></Venue>)
            }
        </div>
    );
};

export default Venues;