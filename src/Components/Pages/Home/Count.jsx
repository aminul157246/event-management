import CountUp from 'react-countup';
import count1 from '../../../assets/images/home-2-counter-icon-1.png'
import count2 from '../../../assets/images/home-2-counter-icon-2.png'
import count3 from '../../../assets/images/home-2-counter-icon-3.png'
import count4 from '../../../assets/images/home-2-counter-icon-4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Count = () => {


    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    return (

        <div data-aos="fade-up" className="  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-2xl md:text-4xl lg:text-5xl    shadow-lg bg-blue-50 mx-12 py-12 mt-12">

            <div >
                <img className='hover:bg-[#F4A492] bg-[#9ACCC9] p-4 rounded-lg w-24 mx-auto' src={count1} alt="" />
                <div className="flex  font-bold justify-center font-textStyle text-[#9ACCC9] hover:text-[#F4A492] mt-4 ">
                    <h3 >$</h3>
                    <CountUp end={980} />
                    <h3>k</h3>
                </div>
                <h3 className='text-sm lg:text-xl text-center mt-3'>Median sold price</h3>
            </div>


           <div >
           <img className='hover:bg-[#F4A492] bg-[#9ACCC9] p-4 rounded-lg w-24 mx-auto' src={count2} alt="" />
           <div className='flex font-bold justify-center font-textStyle text-[#9ACCC9] hover:text-[#F4A492] mt-4'>
                <CountUp end={24} />
            </div>
                <h3 className='text-sm lg:text-xl mt-3 text-center'>Properties sold</h3>

           </div>

            <div >
            <img className='hover:bg-[#F4A492] bg-[#9ACCC9] p-4 rounded-lg w-24 mx-auto' src={count3} alt="" />
                <div className="flex font-bold text-[#9ACCC9] hover:text-[#F4A492] justify-center font-textStyle mt-4">
                    <h3 >$</h3>
                    <CountUp end={680} />
                    <h3>k</h3>
                </div>
                <h3 className='text-sm lg:text-xl text-center mt-3'>Median leased price</h3>
            </div>


          <div >
          <img className='hover:bg-[#F4A492] bg-[#9ACCC9] p-4 rounded-lg w-24 mx-auto' src={count4} alt="" />
          <div className='flex font-bold text-[#9ACCC9] hover:text-[#F4A492] justify-center font-textStyle mt-4'>
                <CountUp end={95} />
            </div>
                <h3 className='text-center  text-sm lg:text-xl mt-3'>Properties leased</h3>

          </div>

            

        </div>
    );
};

export default Count;