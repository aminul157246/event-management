import { useLoaderData } from "react-router-dom";
import Card from "./card";
import Banner from "./Banner";

import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import OnlineRequest from "./OnlineRequest";
import Map from "./Map";
import Planning from "./Planning";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import About from "./About";
import Service from "./Service";
import Count from "./Count";
// ..
AOS.init();

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <Banner></Banner>
      {/* <Planning></Planning>
      <div className="mt-16 mb-12 text-center">
        <h3 className="text-3xl font-bold font-Vidaloka">
          Its simple. You have an event to plan and <br />
          we have <span className="text-yellow-400">the solutions</span>
        </h3>
        <p className="text-gray-400 mt-6">HERE IS HOW WE CAN HELP YOU</p>
      </div>
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <Card key={service.id} service={service} data-aos="fade-left"></Card>
        ))}
      </div> */}


<About/>
<Service/>
      <Gallery></Gallery>
      <Count/>
      <Testimonial></Testimonial>
      <OnlineRequest></OnlineRequest>
      <Map></Map>
    </div>
  );
};

export default Home;
