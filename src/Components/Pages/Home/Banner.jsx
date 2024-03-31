
import ring from '../../../assets/images/Banner_ring.png'
import bannerImg from '../../../assets/images/home-2-banner-img.png'
import heart from '../../../assets/images/hearts.png'
import circle from '../../../assets/images/home-2-servicest-green-circle-shape.png'
import flower from '../../../assets/images/body_bird-e1658928223548-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {


  useEffect(() => {
    AOS.init({
         duration: "1000"
    });

}, [])

  return (
    <>
      <div className='lg:flex w-full justify-between bg-blue-50 mx-12 gap-12 pt-6 lg:pt-12'>
        <div>
          <img data-aos="fade-up"
     data-aos-duration="2000" className='ml-4  w-12  lg:w-24  lg:ml-96' src={flower} alt="" />

          <div className=' lg:mt-8'>
          <img className=' ml-16 w-24 lg:w-36' data-aos="fade-up"
     data-aos-duration="2000"  src={ring} alt="" />

          <h1 data-aos="fade-right"
     data-aos-duration="2000" className='ml-6 lg:ml-16 mt-4 text-3xl lg:text-6xl font-bold'>Creating <br /> <span className='mt-2'>Unforgettable</span> <br /> <span className='mt-2'>Moments</span></h1>
          <p className='ml-6 lg:ml-16 mt-4 text-xl' data-aos="fade-right"
     data-aos-duration="2000" >We specialize in creating unforgettable experiences that exceed your expectations</p>
          <button data-aos="fade-right"
     data-aos-duration="1000" className='ml-6 lg:ml-16 bg-[#F4A492] px-5 text-xl rounded-3xl py-3  mt-4'>Make Reservation</button>
          </div>
        </div>

        <div className='mt-4'>
          <img className='z-10 relative p-10' data-aos="fade-up"
     data-aos-duration="2000" src={bannerImg} alt="" />
          <img data-aos="fade-up"
     data-aos-duration="2000"  src={heart} className='   absolute   top-24 right-0 lg:right-96 ' alt="" />
          <img data-aos="flip-right" data-aos-duration="2000" src={circle} className='  absolute top-[540px]  w-[200px] lg:w-[500px]  lg:top-20 right-8 lg:right-32' alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
