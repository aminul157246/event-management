import about from '../../../assets/images/home-2-about-img.jpg'
import flower from '../../../assets/images/body_bird-e1658928223548-1.png'
import circle from '../../../assets/images/home-2-gallery-section-circle-shape.png'

const About = () => {
    return (
        <div className='flex mx-12 items-center  bg-blue-50 p-12 gap-16 mt-16 '>
            <div className='relative'>
                <img className='absolute -top-16 z-0' src={circle} alt="" />
                <img className='rounded-2xl z-10' src={about} alt="" />
            </div>
            <div>
                <div className='flex justify-end'>
                <img  src={flower} alt="" />
                </div>
                <p className='text-[#F4A492] text-xl'>About Bridely</p>
                <h3 className='text-6xl font-bold'>We Specialize In <br /> <span className='mt-3'>Creating Unforgettable</span> <br /> <span className='mt-3'>Experiences</span>!</h3>
                <p className='mt-4 text-xl'>Whether You’re Planning A Wedding, Corporate Event, <br /> Or Social Gathering, We’re Here To Make Your Dreams <br /> A Reality.</p>
                <button className='btn mt-4'>Learn More</button>
            </div>
        </div>
    );
};

export default About;