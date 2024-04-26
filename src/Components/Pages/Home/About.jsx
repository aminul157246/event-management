import about from '../../../assets/images/home-2-about-img.jpg'
import flower from '../../../assets/images/body_bird-e1658928223548-1.png'
import circle from '../../../assets/images/home-2-gallery-section-circle-shape.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const About = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });
    
    }, [])


    return (
        <div className='lg:flex  mx-12 items-center  bg-blue-50 p-12 gap-16 mt-16 '>
            <div className='relative'>
                <img data-aos="fade-right"
     data-aos-duration="2000" className='absolute w-12 lg:w-36  -top-6 lg:-top-16 z-0' src={circle} alt="" />
                <img data-aos="fade-up"
     data-aos-duration="2000" className='rounded-2xl z-10' src={about} alt="" />
            </div>
            <div>
                <div className='flex mt-12 lg:mt-2 justify-normal w-12 lg:w-full lg:justify-end'>
                <img data-aos="fade-left"
     data-aos-duration="2000"  src={flower} alt="" />
                </div>
                <p className='text-[#F4A492]  text-xl' data-aos="fade-left"
     data-aos-duration="2000">About Bridely</p>
                <h3 className='text-3xl lg:text-6xl font-bold' data-aos="fade-left"
     data-aos-duration="2000">We Specialize <br />  <span className='mt-3'>In Creating  <br /> Unforgettable</span> <br /> <span className='mt-3'>Experiences</span>!</h3>
                <p className='mt-4 text-xl' data-aos="fade-left"
     data-aos-duration="2000">Whether You’re Planning A Wedding, Corporate Event,  Or Social <br /> Gathering,  We’re Here To Make Your Dreams  A Reality.</p>
              <div data-aos="fade-left"
     data-aos-duration="2000">
              <button className='btn mt-4' >Learn More</button>
              </div>
            </div>
        </div>
    );
};

export default About;