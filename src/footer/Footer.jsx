import logo from '../../src/assets/images/logo.png'
import bird from '../../src/assets/images/hearts.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import style from '../assets/images/Design_element.png'

import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <footer className="footer relative z-10 p-10 bg-base-200 text-base-content">
        <img src={bird} alt="" />
        <aside>
          <div className='bg-[#e1f0ee] rounded-full lg:-ml-32 p-4 lg:p-16'>
            <div className='flex justify-center'>
              <img src={logo} alt="" />
            </div>
            <p className='text-xl text-center py-4'>Lorem ipsum dolor sit amet, <br /> iscing elitsed do eiusmod </p>
            <div className='text-center'>
              <button className="px-3    text-center rounded-lg  text-xl text-[#F4A492]"><FaFacebook /></button>
              <button className="px-3    text-center rounded-lg  text-xl text-[#F4A492]"><FaTwitter /></button>
              <button className="px-3    text-center rounded-lg  text-xl text-[#F4A492]"><FaInstagram /></button>
            </div>
          </div>
        </aside>
        
        <nav>
          <header className="text-2xl uppercase font-semibold mt-6">Company</header>

          <div className="flex gap-8">
            <div>
          <p><a className="link mt-2 text-gray-600 text-xl  link-hover">Home</a></p>
          <p><a className="link mt-2 text-gray-600 text-xl link-hover">About us</a></p>
          <p><a className="link mt-2 text-gray-600 text-xl link-hover">Contact</a></p>
          <p><a className="link mt-2 text-gray-600 text-xl link-hover">Blog</a></p>
          <p><a className="link mt-2 text-gray-600 text-xl link-hover">Service</a></p>
            </div>
            <div>
          <p><a className="link mt-2 text-gray-600 text-xl  link-hover">Home</a></p>
          <p><a className="link mt-2 text-gray-600 text-xl link-hover">About us</a></p>
          <p><a className="link mt-2 text-gray-600 text-xl link-hover">Contact</a></p>
          <p><a className="link mt-2 text-gray-600 text-xl link-hover">Blog</a></p>
          <p><a className="link mt-2 text-gray-600 text-xl link-hover">Service</a></p>
            </div>
          </div>
        </nav>
        <nav className='mt-8'>

          <div className='flex gap-4  items-center'>
            <div className='p-3 text-2xl rounded-full bg-[#9ACCC9] text-white'>
            <IoCallOutline />
            </div>
          <div>
          <p className="text-xl font-semibold">Call Us</p>
          <p className='text-lg'>(123) 456 - 789 - 00</p>
          </div>
          </div>

          <div className='flex gap-4 items-center'>
          <div className='p-3 text-2xl rounded-full bg-[#9ACCC9] text-white'>
            <TfiEmail />
            </div>
          <div>
          <p className="text-xl font-semibold">Email Us </p>
          <p className='text-lg'>help@Bridely.com</p>
          </div>
          </div>
        </nav>

        <div className="flex justify-end top-32 opacity-50 right-2 absolute"> <img className='w-96' src={style} alt="" /></div>

      </footer>
    </div>
  );
};

export default Footer; 