import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Dres from './Dres';

const Dress = () => {

    const {isLoading  , data : dress = []} = useQuery({
        queryKey : ['dress'], 
        queryFn : async () => {
            const res =  await axios.get('http://localhost:3000/dress')
            // console.log(res.data);
            return res.data
        }
    })

    // console.log(dress);

    if (isLoading) {
        return <>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </>
    }


    return (
        <div className='grid gap-8 grid-cols-3 mt-12 mx-12'>
            {
                dress.map(item => <Dres item={item} key={item._id}></Dres>)
            }
        </div>
    );
};

export default Dress;