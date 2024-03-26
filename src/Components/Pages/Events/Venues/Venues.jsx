import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Venues = () => {


   


        const {data : venues = []} = useQuery({
            queryKey : ['venues'], 
            queryFn : async () => {
                const res =  await axios.get('http://localhost:3000/venues')
                // console.log(res.data);
                return res.data
            }
        })


    return (
        <div className='grid grid-cols-3 mx-12'>
            {
                venues.map(item => <div key={item._id}>


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p><small>{item.location}</small></p>
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.capacity}</p>
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

export default Venues;