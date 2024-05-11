import gallery1 from '../../../assets/images/home-2-gallery-img-1.jpg'
import gallery2 from '../../../assets/images/home-2-gallery-img-2.jpg'
import gallery3 from '../../../assets/images/home-2-gallery-img-3.jpg'
import gallery4 from '../../../assets/images/home-2-gallery-img-4.jpg'
import gallery5 from '../../../assets/images/home-2-gallery-img-5.jpg'
import gallery6 from '../../../assets/images/home-2-gallery-img-6.jpg'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Gallery = () => {

  useEffect(() => {
    AOS.init({
      duration: "1000"
    });

  }, [])


  return (
    <div>

      {/* gallery  */}
      <div className='mt-16 px-12' >
        <p className='text-[#F4A492] text-xl text-center  '              >  Unforgettable Events</p>
        <h3 className='text-2xl lg:text-5xl text-center  font-bold mb-8' >Capturing Love and Celebration <br /> in Visual Showcase</h3>


        <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8 " data-aos="fade-up">
          <img className="w-[350px] h-[300px] rounded-xl" src={gallery1} />
          <img className="w-[350px] h-[300px] rounded-xl" src={gallery2} />
          <img className="w-[350px] h-[300px] rounded-xl" src={gallery3} />
          <img className="w-[350px] h-[300px] rounded-xl" src={gallery4} />
          <img className="w-[350px] h-[300px] rounded-xl" src={gallery5} />
          <img className="w-[350px] h-[300px] rounded-xl" src={gallery6} />
        </div>
        <div className='flex-row md:flex-col lg:flex-col justify-center items-center mt-4 gap-4 '>
          <div className='flex md:justify-center'>
            <button className=' ml-16 bg-[#9ACCC9] duration-500 hover:bg-[#F4A492] px-5 text-xl text-gray-800 rounded-3xl py-3  mt-4'>View Galary</button>

          </div>
        </div>
      </div>
      <hr className='mt-5' />
    </div>
  );
};

export default Gallery;