import Banner from "./Banner";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Map from "./Map";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import About from "./About";
import Service from "./Service";
import Count from "./Count";
import Feature from "./Feature";
import Reservation from "./Reservation";
// ..
AOS.init();

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About />
      <Service />
      <Gallery></Gallery>
      <Count />
      <Feature />
      <Reservation />
      <Testimonial></Testimonial>
      <Map></Map>
    </div>
  );
};

export default Home;
