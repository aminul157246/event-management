import style from '../../../assets/images/Design_element.png'
import heart from '../../../assets/images/hearts.png'
import img1 from '../../../assets/images/weddingwalls.jpg'
import img2 from '../../../assets/images/metal_circles-2.jpg'
import img3 from '../../../assets/images/chair.jpg'
import img4 from '../../../assets/images/catering.jpg'

const Category = () => {
    return (
        <div className='mx-12 mt-12 bg-blue-50 p-12'>
            <img src={heart} alt="" />
            <div className="flex items-center ">

                <div className='space-y-8'>
                    <div className="flex justify-center"> <img src={style} alt="" /></div>
                    <h3 className='text-6xl font-bold'>Includes Various <br /> Product Categories</h3>
                    <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed doeiusm tempor incididunt.</p>

                    <div className='flex justify-center mt-8'>
                        <button className=' ml-16 bg-[#9ACCC9] duration-500 hover:bg-[#F4A492] px-5 text-xl rounded-3xl py-3  mt-4'>View all Services</button>

                    </div>

                </div>

                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto gap-8 ">

                    <div className='relative'>
                        <img className="border-8 border-white w-[350px] h-[300px] rounded-xl" src={img1} />
                        <h2 className='text-center bg-gray-100 py-3 text-xl font-semibold'>Wedding Walls</h2>
                    </div>


                    <div className='relative'>
                        <img className="border-8 border-white w-[350px] h-[300px] rounded-xl" src={img2} />
                        <h2 className='text-center bg-gray-100 py-3 text-xl font-semibold'>Metal Circles & Flowers</h2>
                    </div>


                    <div className='relative'>
                        <img className="border-8 border-white w-[350px] h-[300px] rounded-xl" src={img3} />
                        <h2 className='text-center bg-gray-100 py-3 text-xl font-semibold'>Chairs</h2>
                    </div>


                    <div className='relative'>
                        <img className="border-8 border-white w-[350px] h-[300px] rounded-xl" src={img4} />
                        <h2 className='text-center bg-gray-100 py-3 text-xl font-semibold'>Catering</h2>
                    </div>





                </div>


            </div>
        </div>
    );
};

export default Category;