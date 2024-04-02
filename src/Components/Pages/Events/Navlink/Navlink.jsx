import venues from '../../../../assets/images/venue-bg.jpg'
import dress from '../../../../assets/images/dress-bg.jpg'
import photographer from '../../../../assets/images/photo-bg.jpg'
import catering from '../../../../assets/images/catering.jpg'
import entertainment from '../../../../assets/images/enter-bg.jpg'

import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from 'react-icons/fa6'

const Navlink = () => {
    return (
        <div>
             <div className='grid grid-cols-1 md:grid-cols-2   lg:grid-cols-2 max-w-5xl mx-auto mb-16 gap-8'>
          
          
           <NavLink to={'/venues'}>
                <div
                    className="relative h-[250px] w-[400px] lg:w-[500px]"
                    style={{
                        backgroundImage: `url(${venues})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-24 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding Venues</h2>
                    </div>

                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300   bg-opacity-20 flex top-36 justify-center">
                        <button className="btn text-2xl font-bold text-[#F4A492]"><FaArrowRightLong/></button>
                    </div>
                </div>
            </NavLink>
            <NavLink to={'/dress'}>
            <div
                    className="relative h-[250px] w-[400px] lg:w-[500px]"
                    style={{
                        backgroundImage: `url(${dress})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-24 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding Dress</h2>
                    </div>

                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300   bg-opacity-20 flex top-36 justify-center">
                        <button className="btn text-2xl font-bold text-[#F4A492]"><FaArrowRightLong/></button>
                    </div>

                </div>
            </NavLink>


            <NavLink to={'/photographer'}>
            <div
                    className="relative h-[250px] w-[400px] lg:w-[500px]"
                    style={{
                        backgroundImage: `url(${photographer})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-24 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding Photography</h2>
                    </div>

                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300   bg-opacity-20 flex top-36 justify-center">
                        <button className="btn text-2xl font-bold text-[#F4A492]"><FaArrowRightLong/></button>
                    </div>


                </div>
            </NavLink>


            <NavLink to={'/catering'}>
            <div
                    className="relative h-[250px] w-[400px] lg:w-[500px]"
                    style={{
                        backgroundImage: `url(${catering})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-24 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding catering</h2>
                    </div>

                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300   bg-opacity-20 flex top-36 justify-center">
                        <button className="btn text-2xl font-bold text-[#F4A492]"><FaArrowRightLong/></button>
                    </div>


                </div>
            </NavLink>


            <NavLink to={'/entertainment'}>
            <div
                    className="relative h-[250px] w-[400px] lg:w-[500px]"
                    style={{
                        backgroundImage: `url(${entertainment})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-60"
                    ></div>
                    <div className="absolute top-24 left-32 z-10 space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-Vidaloka">Wedding entertainment</h2>
                    </div>
                    <div className="absolute card-actions   inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300   bg-opacity-20 flex top-36 justify-center">
                        <button className="btn text-2xl font-bold text-[#F4A492]"><FaArrowRightLong/></button>
                    </div>


                </div>
            </NavLink>


           </div>
        </div>
    );
};

export default Navlink;