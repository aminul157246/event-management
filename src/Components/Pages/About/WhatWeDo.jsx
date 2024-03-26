
import bird from '../../../assets/images/body_bird-e1658928223548-1.png'
import img1 from '../../../assets/images/better_togather.jpg'
import img2 from '../../../assets/images/roses.jpg'
import img3 from '../../../assets/images/wine.jpg'

const WhatWeDo = () => {
    return (
        <div className='pt-12 pb-40 gap-48 bg-blue-50 flex mx-12 justify-center my-16 items-center'>

<div className='relative'>
<div className='' ><img className='w-full h-full rounded-bl-[70px] border-8 border-white rounded-tr-[70px] ' src={img1} alt="" /></div>
<div className=' absolute w-96 ml-72 top-56'><img className=' rounded-bl-[70px] border-8 border-white rounded-tr-[70px]' src={img2} alt="" /></div>
<div className=' absolute top-96'><img className='w-full h-full rounded-bl-[70px] border-8 border-white rounded-tr-[70px]' src={img3} alt="" /></div>
</div>

                <div className='space-y-4'>
                <img className='ml-80' src={bird} alt="" />

                <p className='text-[#F4A492] text-xl'>About Bridely</p>
                <h2 className='text-6xl font-bold'>What We do, <br /> We do With Passion</h2>
                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed doeiusm tempor incididunt donec quam felis ultri <br /> cies nec, pellentesque eu, pretium quis sem.
                </p>

                </div>
        </div>
    );
};

export default WhatWeDo;