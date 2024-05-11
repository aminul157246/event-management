import { NavLink } from 'react-router-dom';
import bg from '../../../assets/images/bg.jpg'

const ServiceBanner = () => {
  return (
    <div>
     <div
        className="relative px-12 lg:p-0 h-[60vh] md:h-[30vh] lg:h-[40vh]"
        style={{
          backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >

        <div className="absolute top-12   lg:left-[400px]  z-10 space-y-3">
          <h2 className="text-2xl  uppercase  lg:text-6xl  font-bold text-black font-Vidaloka">

            services
          </h2>
          <p className="text-xl my-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit  sed doeiusm tempor <br /> incididunt donec quam felis ultri   cies nec, pellentesque eu, pretium quis sem.
          </p>

          <div className="absolute mt-4">
            <NavLink to={'/'} className="bg-red-400  text-white rounded-3xl px-4 py-2">
              Home
            </NavLink>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServiceBanner;