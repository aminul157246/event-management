import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Photo from './Photo';

const Photographer = () => {


   const axiosPublic = useAxiosPublic()


        const {isLoading, data : photographer = []} = useQuery({
            queryKey : ['photographer'], 
            queryFn : async () => {
                const res =  await axiosPublic.get('/photographer')
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
        <div className='grid grid-cols-3 gap-8 m-12'>
            {
                photographer.map(item => <Photo key={item._id} item={item}></Photo>)
            }
        </div>
    );
};

export default Photographer;