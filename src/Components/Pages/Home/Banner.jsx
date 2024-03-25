
import ring from '../../../assets/images/Banner_ring.png'
import bannerImg from '../../../assets/images/home-2-banner-img.png'
import heart from '../../../assets/images/hearts.png'
import circle from '../../../assets/images/home-2-servicest-green-circle-shape.png'
import flower from '../../../assets/images/body_bird-e1658928223548-1.png'
const Banner = () => {


  return (
    <>
      <div className='flex justify-between bg-blue-50 mx-12 gap-12 pt-12'>
        <div className=''>
          <img className='ml-96' src={flower} alt="" />
          <div className=' mt-8'>
          <img className='w-36'  src={ring} alt="" />
          <h1 className='ml-16 mt-4 text-6xl font-bold'>Creating <br /> <span className='mt-2'>Unforgettable</span> <br /> <span className='mt-2'>Moments</span></h1>
          <p className='ml-16 mt-4 text-xl'>We specialize in creating unforgettable experiences that exceed your expectations</p>
          <button className='ml-16 bg-[#F4A492] px-5 text-xl rounded-3xl py-3  mt-4'>Make Reservation</button>
          </div>
        </div>

        <div>
          <img className='z-10 relative' src={bannerImg} alt="" />
          <img src={heart} className='  absolute   top-24 right-96' alt="" />
          <img src={circle} className='  absolute w-[500px] top-16 right-48' alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
