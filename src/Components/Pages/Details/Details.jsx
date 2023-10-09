import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { GiPartyHat, GiBackwardTime } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalendarDateFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

import logo1 from "../../../assets/images/logo1 (1).png";
import logo2 from "../../../assets/images/logo1 (2).png";
import logo3 from "../../../assets/images/logo1 (3).png";
import logo4 from "../../../assets/images/logo1 (4).png";


const Details = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const findService = data.find((item) => item.id == id);
    console.log(findService);
    setService(findService);
  }, [data, id]);

  console.log(service);
  return (
    <div>
      <div className="card max-w-6xl mx-auto bg-base-100  ">
      <h2 className="text-4xl text-yellow-400 font-bold my-8 text-center font-Vidaloka ">
        {service.eventType}
      </h2>
      <figure>
          <img className="w-[600px]" src={service.image} alt="Shoes" />
        </figure>
  <div className="card-body">
    
  <div className="flex-row md:flex-row justify-center items-center lg:flex px-4 lg:px-12 gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <GiPartyHat className="text-xl text-red-400"></GiPartyHat>
              <p >{service.venue} </p>
            </div>

            <div className="flex gap-4">
              <BsCalendarDateFill className="text-xl text-red-400"></BsCalendarDateFill>
              <p >{service.date}</p>
            </div>

            <div className="flex">
              <AiTwotoneMail className="text-xl text-red-400"></AiTwotoneMail>
              <p >{service.contactEmail}</p>
            </div>
          </div>
          <div className="space-y-4 my-8 md:mt-0 lg:mt-0">
            <div className="flex items-center">
              <HiLocationMarker className="text-xl text-red-400"></HiLocationMarker>
              <p >{service.location}</p>
            </div>

            <div className="flex">
              <GiBackwardTime className="text-xl text-red-400"></GiBackwardTime>
              <p >{service.time}</p>
            </div>

            <div className="flex">
              <BsFillTelephoneFill className="text-xl text-red-400"></BsFillTelephoneFill>
              <p >{service.contactPhone}</p>
            </div>
          </div>
        </div>
        <p className="max-w-6xl px-5 text-gray-600">{service.description}</p>
    <div className="card-actions justify-center">
    <button className="bg-red-400 text-white  rounded-3xl px-4 py-1">Booking now !</button>
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto ">
        <div>
          <h2 className="text-3xl font-Vidaloka font-bold text-center my-8">
            Why choose us ?
          </h2>
          <p className="text-gray-600 text-center">
            La Royale Banqueting Suites have been established for over 20 years,
            hosting thousands of weddings, birthday <br /> celebrations, christenings,
            charity fundraisers, gala balls, Christmas parties and a variety of
            corporate events.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto" >
          
            
              <div className="card-body">
                <img className="w-36" src={logo1} alt="" />
                <h2 className="card-title hover:underline">Your next event</h2>
                <p>
                  Got something to celebrate? Then its time you celebrated the
                  benefits of our Banqueting Suites as the perfect venue for
                  your next event.
                </p>
              
            </div>

            <div >
              <div className="card-body">
                <img className="w-36" src={logo2} alt="" />
                <h2 className="card-title">Large capacity </h2>
                <p>
                  Hold between 500-600 people and offer state-of-the-art
                  technology to support a seamless event.
                </p>
              </div>
            
          </div>

          
            <div >
              <div className="card-body">
                <img className="w-36" src={logo3} alt="" />
                <h2 className="card-title">Experience the finest </h2>
                <p>
                  Cutting edge AV equipment and RGB LED mood lighting can be
                  adapted to suit your theme, along with large LED screens and a
                  dedicated dancefloor.
                </p>
              </div>
            </div>

            <div >
              <div className="card-body">
                <img className="w-36" src={logo4} alt="" />
                <h2 className="card-title">Easily accessible </h2>
                <p>
                  Located in North London, just 20 minutes away from Liverpool
                  Street, with excellent transport links to Central London and
                  200 designated car parking spaces on site.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Details;
