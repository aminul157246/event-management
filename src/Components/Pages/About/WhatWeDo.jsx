
import bird from '../../../assets/images/body_bird-e1658928223548-1.png'
import img1 from '../../../assets/images/better_togather.jpg'
import img2 from '../../../assets/images/roses.jpg'
import img3 from '../../../assets/images/wine.jpg'

const WhatWeDo = () => {
    return (
        <div className='pt-12 w-full pb-40 gap-48 bg-blue-50 lg:flex mx-12 justify-center my-16 items-center'>

            <div className='relative px-12'>
                <div className='' ><img className='w-72 lg:w-full h-full rounded-bl-[70px] border-8 border-white rounded-tr-[70px] ' src={img1} alt="" /></div>
                <div className=' absolute w-44 lg:w-96 ml-36 lg:ml-72 top-40 lg:top-56'><img className=' rounded-bl-[70px] border-8 border-white rounded-tr-[70px]' src={img2} alt="" /></div>
                <div className=' lg:absolute top-96'><img className='w-44 lg:w-full h-full rounded-bl-[70px] border-8 border-white rounded-tr-[70px]' src={img3} alt="" /></div>
            </div>

            <div className='space-y-4'>
                <img className='lg:ml-80 ml-12 mt-12 lg:mt-0' src={bird} alt="" />

                <p className='text-[#F4A492] px-12 text-xl'>About Bridely</p>
                <h2 className='text-3xl  px-12  lg:text-6xl font-bold'>What We do, <br /> We do With Passion</h2>
                <p className="text-xl px-12 ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed doeiusm tempor incididunt donec quam felis ultri <br /> cies nec, pellentesque eu, pretium quis sem.
                </p>

            </div>
        </div>
    );
};

export default WhatWeDo;