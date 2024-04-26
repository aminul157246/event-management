import style from '../../../assets/images/Design_element.png'
import contact from '../../../assets/images/Contact-Image.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Form = () => {
    return (
        <div className='p-6 lg:p-0 lg:flex max-w-7xl mx-auto gap-12 items-center my-16'>
            <div className='p-12 bg-[#9ACCC9] rounded-tr-3xl rounded-bl-3xl lg:w-1/3'>
                <img className='rounded-tr-3xl h-[200px] mb-4 border-8 border-white w-full' src={contact} alt="" />
                <div className=" gap-6 flex justify-right items-center">

                    <div>
                        <input type="text" placeholder='Name' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                        <input type="text" placeholder='Email' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                    </div>

                    <div>
                        <input type="text" placeholder='Phone' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                        <input type="text" placeholder='Event' className='w-full mt-4 rounded-full border-2 border-gray-300 p-3' name="" id="" />
                    </div>


                </div>
                <textarea className='mt-4 rounded-3xl w-full border-2 border-gray-300 p-2 ' name="" id="" cols="50" placeholder='Message' rows="5"></textarea>
            </div>



            <div>
                <div className='space-y-8'>
                    <div className="flex justify-center"> <img src={style} alt="" /></div>
                    <h3 className='text-3xl lg:text-6xl font-bold'>Interested in discussing?  <br /> Get In touch with us.</h3>
                    <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed doeiusm tempor incididunt.</p>

                    <div className='  mt-8'>

                        <div className='text-center lg:flex justify-center'>
                            <div className='-ml-8 lg:-ml-0'>
                                <button className=' ml-16 bg-[#9ACCC9] duration-500 hover:bg-[#F4A492] mb-6 lg:mb-0 px-5 text-xl rounded-3xl py-3  mt-4'>Follow Us :</button>
                            </div>
                            <div >
                                <button className="px-2 ml-2    bg-[#9ACCC9] py-2  text-center rounded-full  text-xl text-[#F4A492]"><FaFacebook /></button>
                                <button className="px-2 ml-2    bg-[#9ACCC9] py-2  text-center rounded-full  text-xl text-[#F4A492]"><FaTwitter /></button>
                                <button className="px-2 ml-2    bg-[#9ACCC9] py-2  text-center rounded-full  text-xl text-[#F4A492]"><FaInstagram /></button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Form;