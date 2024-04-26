import { FaCircle, FaCircleArrowRight } from 'react-icons/fa6';
import img from '../../../assets/images/about_image1.jpg'
import bird from '../../../assets/images/body_bird-e1658928223548-1.png'
import circle from '../../../assets/images/home-2-gallery-section-circle-shape.png'
const WhoWeAre = () => {
    return (
        <div className='flex justify-center bg-blue-50 mt-16 p-12 gap-16 items-center mx-12 '>
            
            <div className='space-y-5'>
                <div className="flex justify-between">
            <img src={circle} alt="" />
                <img className='' src={bird} alt="" />
                </div>

                <p className='text-[#F4A492] text-xl    '>Who We Are</p>

                <h2 className='text-3xl lg:text-6xl font-bold'>Planner for Your <br /> Perfect Wedding</h2>
                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed doeiusm tempor incididunt donec quam felis ultri <br /> cies nec, pellentesque eu, pretium quis sem.
                </p>

                <div className='space-y-2'>
                    <p className='flex gap-2 items-center '><FaCircleArrowRight />Yusto rhoncusut imperdiet a venenatis vitae.</p>
                    <p className='flex gap-2 items-center '><FaCircleArrowRight />Fringilla velealiquet nec vulputate eget arcu In eni</p>
                    <p className='flex gap-2 items-center '><FaCircleArrowRight />Quam felis ultricies nec pellentesque eu pretium</p>

                </div>

            </div>
            <div>
                <img className='h-[500px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default WhoWeAre;