import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Cater from './Cater';

const Catering = () => {


    const axiosPublic = useAxiosPublic()


    const { isLoading, data: caterings = [] } = useQuery({
        queryKey: ['catering'],
        queryFn: async () => {
            const res = await axiosPublic.get('/catering')
            console.log(res.data);
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
        <div className='grid grid-cols-3 gap-8 mt-12  mx-12'>
            {
                caterings.map(item => <Cater item={item} key={item._id}></Cater>)
            }
        </div>
    );
};

export default Catering;