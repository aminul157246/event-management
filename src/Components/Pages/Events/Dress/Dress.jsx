import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Dress = () => {

    const {data : dress = []} = useQuery({
        queryKey : ['dress'], 
        queryFn : async () => {
            const res =  await axios.get('http://localhost:3000/dress')
            // console.log(res.data);
            return res.data
        }
    })

    // console.log(dress);


    return (
        <div className='grid grid-cols-3 mx-12'>
            {
                dress.map(item => <div key={item._id}>


                    <div className="card h-[500px] w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.brand}</h2>
                            <p>Price : {item.price}</p>
                            <p>Color : {item.color}</p>
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

export default Dress;