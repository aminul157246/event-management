import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const Catering = () => {


   const axiosPublic = useAxiosPublic()


        const {data : caterings = []} = useQuery({
            queryKey : ['catering'], 
            queryFn : async () => {
                const res =  await axiosPublic.get('/catering')
                console.log(res.data);
                return res.data
            }
        })


    return (
        <div className='grid grid-cols-3 mx-12'>
            {
                caterings.map(item => <div key={item._id}>


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p><small>{item.location}</small></p>
                            <h2 className="card-title">{item.name}</h2>
                            <p>Speciality : {item.specialty}</p>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-accent">Book</button>
                            </div>
                        </div>
                    </div>


                </div>)
            }
        </div>
    );
};

export default Catering;