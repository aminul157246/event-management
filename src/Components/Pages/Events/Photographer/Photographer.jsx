import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Photo from './Photo';

const Photographer = () => {


   const axiosPublic = useAxiosPublic()


        const {data : photographer = []} = useQuery({
            queryKey : ['photographer'], 
            queryFn : async () => {
                const res =  await axiosPublic.get('/photographer')
                console.log(res.data);
                return res.data
            }
        })


    return (
        <div className='grid grid-cols-3 mx-12'>
            {
                photographer.map(item => <Photo key={item._id} item={item}></Photo>)
            }
        </div>
    );
};

export default Photographer;