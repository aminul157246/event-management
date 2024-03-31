import watch from '../../../assets/images/home-2-planning-video-icon.png'
import bird from '../../../assets/images/body_bird-e1658928223548-1.png'
import feature1 from '../../../assets/images/home-2-planning-icon-1.png'
import feature2 from '../../../assets/images/home-2-planning-icon-2.png'
import feature3 from '../../../assets/images/home-2-planning-icon-3.png'
import feature4 from '../../../assets/images/home-2-planning-icon-4.png'

const Feature = () => {
    return (
        <div className="mt-16  mx-12 w-full lg:flex gap-12 items-center bg-blue-50 p-12">
            <div>
                <img src={bird} alt="" />
                <div className="lg:ml-8">
                    <p className='text-[#F4A492] text-xl    '>Personalized Planning Services</p>
                    <h3 className='text-2xl lg:text-5xl   font-bold mt-4 mb-8'>Features of Our <br /> Wedding and Event <br /> Planning Services</h3>
                    <p className=' text-xl    '>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed doeiusm tempor incididunt</p>
                    <div className="flex   items-center mt-4 gap-3">
                        <img src={watch} alt="" />
                        <p className='text-[#F4A492] text-xl text-center  '>Watch Video</p>

                    </div>
                </div>
            </div>

            <div>
                 <div className="lg:flex lg:mt-2 mt-12 gap-8">
                 <div className='space-y-3'>
                 <img src={feature1} alt="" />
                 <h2 className='font-bold text-2xl'>Customized Planning</h2>
                 <p className='max-w-sm'>Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                 </div>

                 
                 <div className='space-y-3 mt-12 lg:mt-2'>
                 <img src={feature2} alt="" />
                 <h2 className='font-bold text-2xl'>Experienced Professional</h2>
                 <p className='max-w-sm'>Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                 </div>
                 </div>

                <div className="lg:flex gap-8 mt-12">
                <div className='space-y-3'>
                 <img src={feature4} alt="" />
                 <h2 className='font-bold text-2xl'>Timeline Creation</h2>
                 <p className='max-w-sm'>Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                 </div>

                 <div className='space-y-3 mt-12 lg:mt-2'>
                 <img src={feature3} alt="" />
                 <h2 className='font-bold text-2xl'>Vendor Management</h2>
                 <p className='max-w-sm'>Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                 </div>
                </div>


            </div>

        </div>
    );
};

export default Feature;