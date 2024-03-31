import img1 from '../../../assets/images/blog-img-1.jpg'
import img2 from '../../../assets/images/blog-img-2.jpg'
import img3 from '../../../assets/images/blog-img-3.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Service = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });
    
    }, [])


    return (
        <div className='mx-12 bg-blue-50 w-full p-12 mt-16'>
            <p className='text-[#F4A492] text-xl text-center  '              data-aos="fade-up" data-aos-duration="2000" >Bridely Services</p>
            <h3 className='text-3xl lg:text-5xl text-center  font-bold mb-8' data-aos="fade-up" data-aos-duration="2000" >Bringing Your Dream <br /> Event to Life</h3> 
            
            <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-3">
            <div className=" relative duration-300 hover:border-b-8   border-red-300 card card-compact  bg-base-100 shadow-xl" data-aos-duration="2000" data-aos="fade-up">
                <figure> <img src={img1} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Wedding Planning </h2>
                    <p>Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus maiores alias conseuatur aut Molestiae non…</p>
                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20 flex items-center justify-center">
                        <button className="btn text-[#F4A492]"><FaArrowRightLong/></button>
                    </div>
                </div>
            </div>
            <div className=" relative duration-300 hover:border-b-8   border-red-300 card card-compact  bg-base-100 shadow-xl" data-aos-duration="2000" data-aos="fade-up">
                <figure> <img src={img2} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Social Gatherings </h2>
                    <p>Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus maiores alias conseuatur aut Molestiae non…</p>
                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20 flex items-center justify-center">
                        <button className="btn text-[#F4A492]"><FaArrowRightLong/></button>
                    </div>
                </div>
            </div>
            <div className=" relative duration-300 hover:border-b-8   border-red-300 card card-compact  bg-base-100 shadow-xl" data-aos-duration="2000" data-aos="fade-up">
                <figure> <img src={img3} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Social Gatherings </h2>
                    <p>Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus maiores alias conseuatur aut Molestiae non…</p>
                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20 flex items-center justify-center">
                        <button className="btn text-[#F4A492]"><FaArrowRightLong/></button>
                    </div>
                </div>
            </div>
            </div>
<div className='flex justify-center mt-8'>
<button className='ml-0 lg:ml-16 bg-[#9ACCC9] duration-500 hover:bg-[#F4A492] px-5 text-xl rounded-3xl py-2 lg:py-3  mt-4'>View all Services</button>

</div>

        </div>
    );
};

export default Service;