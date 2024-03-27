import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Enter from './Enter';

const Entertainment = () => {


   const axiosPublic = useAxiosPublic()


        const {isLoading , data : entertainments = []} = useQuery({
            queryKey : ['entertainment'], 
            queryFn : async () => {
                const res =  await axiosPublic.get('/entertainment')
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
                entertainments.map(item => <Enter key={item._id} item={item}></Enter>)
            }
        </div>
    );
};

export default Entertainment;