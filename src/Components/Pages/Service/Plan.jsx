import feature1 from '../../../assets/images/decor.png'
import feature3 from '../../../assets/images/entertainment.png'
import feature4 from '../../../assets/images/decor.png'
import style from '../../../assets/images/Design_element.png'

const Plan = () => {
    return (
        <div className="mt-16 flex gap-12 items-center mx-12 bg-blue-50 p-12">
            <div className='space-y-8'>
                <div className="flex justify-center"> <img src={style} alt="" /></div>
                <h3 className='text-6xl font-bold'>Let’s Plan Your  <br /> Next Event Together</h3>
                <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed doeiusm tempor incididunt.</p>

                <div className='flex justify-center mt-8'>
                    <button className=' ml-16 bg-[#9ACCC9] duration-500 hover:bg-[#F4A492] px-5 text-xl rounded-3xl py-3  mt-4'>View all Services</button>

                </div>

            </div>

            <div>
                <div className="flex ">
                    <div className='py-12 px-16 border'>
                        <img src={feature1} alt="" />
                        <h2 className='text-xl font-semibold pt-4 text-center'>
                            Wedding Planning



                        </h2>

                    </div>


                    <div className='py-12 px-16 border'>
                        <img src={feature3} alt="" />
                        <h2 className='text-xl font-semibold pt-4 text-center'>Corporate Events
                        </h2>

                    </div>
                </div>

                <div className="flex  ">

                <div className='py-12 px-16 border'>
                        <img src={feature4} alt="" />
                        <h2 className='text-xl font-semibold pt-4 text-center'>A Entertaintments</h2>
                    </div>
                    <div className='py-12 px-16 border'>
                        <img src={feature3} alt="" />
                        <h2 className='text-xl font-semibold pt-4 text-center'>Social Gatherings
                        </h2>
                    </div>

                    
                </div>


            </div>

        </div>
    );
};

export default Plan;