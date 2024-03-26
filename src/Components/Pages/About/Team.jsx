import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import style from '../../../assets/images/Design_element.png'
import heart from '../../../assets/images/hearts.png'
import img1 from '../../../assets/images/team-img-1.jpg'
import img2 from '../../../assets/images/team-img-2.jpg'
import img3 from '../../../assets/images/team-img-3.jpg'
import img4 from '../../../assets/images/team-img-4.jpg'

const Team = () => {
    return (
        <div className='mx-12 mt-12 bg-blue-50 p-12'>
        <img   src={heart} alt="" />
          <div className="flex items-center ">
            
            <div className='space-y-8'>
               <div className="flex justify-center"> <img src={style} alt="" /></div>
                <h3 className='text-6xl font-bold'>Meet Our Creative <br /> Event Organizer</h3>
                <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed doeiusm tempor incididunt.</p>

                <div className='flex justify-center mt-8'>
<button className=' ml-16 bg-[#9ACCC9] duration-500 hover:bg-[#F4A492] px-5 text-xl rounded-3xl py-3  mt-4'>View all Services</button>

</div>

            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto gap-8 ">

                <div className='relative'>
                    <img className="border-8 border-white w-[350px] h-[300px] rounded-xl" src={img1} />
                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex  gap-4  justify-center items-center">
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaFacebook /></button>
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaTwitter /></button>
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaInstagram /></button>
                    </div>
                </div>


                <div className='relative'>
                    <img className="border-8 border-white w-[350px] h-[300px] rounded-xl" src={img2} />
                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex  gap-4  justify-center items-center">
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaFacebook /></button>
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaTwitter /></button>
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaInstagram /></button>
                    </div>
                </div>


                <div className='relative'>
                    <img className="border-8 border-white w-[350px] h-[300px] rounded-xl" src={img3} />
                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex  gap-4  justify-center items-center">
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaFacebook /></button>
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaTwitter /></button>
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaInstagram /></button>
                    </div>
                </div>


                <div className='relative'>
                    <img className="border-8 border-white w-[350px] h-[300px] rounded-xl" src={img4} />
                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex  gap-4  justify-center items-center">
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaFacebook /></button>
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaTwitter /></button>
                        <button className="px-3  py-2 bg-white text-center rounded-lg  text-xl text-[#F4A492]"><FaInstagram /></button>
                    </div>
                </div>



               

            </div>

            
        </div>
      </div>
    );
};

export default Team;