import feature1 from '../../../assets/images/decor.png'
import feature3 from '../../../assets/images/entertainment.png'
import feature4 from '../../../assets/images/decor.png'
import style from '../../../assets/images/Design_element.png'

const Plan = () => {
    return (
        <div className="mt-16 lg:flex gap-12 items-center mx-12 bg-blue-50 p-12">
            <div className='space-y-8'>
                <div className="lg:flex justify-center"> <img src={style} alt="" /></div>
                <h3 className='text-3xl lg:text-6xl font-bold'>Let’s Plan Your  <br /> Next Event Together</h3>
                <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed doeiusm tempor incididunt.</p>

                <div className='flex justify-center mt-8'>
                    <button className=' lg:ml-16 mb-12 lg:mb-0 bg-[#9ACCC9] duration-500 hover:bg-[#F4A492] px-5 text-xl rounded-3xl py-3  mt-4'>View all Services</button>

                </div>

            </div>

            <div>
                <div className="lg:flex ">
                    <div className='px-3 py-3 lg:py-12 lg:px-16 border'>
                        <img src={feature1} alt="" />
                        <h2 className='text-xl font-semibold pt-4 text-center'>
                            Wedding Planning



                        </h2>

                    </div>


                    <div className='px-3 py-3 lg:py-12 lg:px-16 border'>
                        <img src={feature3} alt="" />
                        <h2 className='text-xl font-semibold pt-4 text-center'>Corporate Events
                        </h2>

                    </div>
                </div>

                <div className="lg:flex  ">

                    <div className='px-3 py-3 lg:py-12 lg:px-16 border'>
                        <img src={feature4} alt="" />
                        <h2 className='text-xl font-semibold pt-4 text-center'>A Entertaintments</h2>
                    </div>
                    <div className='px-3 py-3 lg:py-12 lg:px-16 border'>
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