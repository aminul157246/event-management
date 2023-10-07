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

import GoogleMapReact from "google-map-react";
import { googleAPIkey } from "../../../google.API.key";

// map
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 23.8223,
    lng: 90.365417,
  },
  zoom: 11,
};

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
      <h2 className="text-5xl font-bold my-8 text-center ">
        {service.eventType}
      </h2>
      <div className="card lg:max-w-5xl  mx-auto">
        <figure>
          <img className="max-w-6xl" src={service.image} alt="Shoes" />
        </figure>

        <div className="flex-row md:flex-row lg:flex py-12 px-4 lg:px-12 gap-24">
          <div className="space-y-4">
            <div className="flex items-center">
              <GiPartyHat className="text-4xl"></GiPartyHat>
              <p className="font-bold">{service.venue} </p>
            </div>

            <div className="flex gap-4">
              <BsCalendarDateFill className="text-4xl"></BsCalendarDateFill>
              <p className="font-bold">{service.date}</p>
            </div>

            <div className="flex">
              <AiTwotoneMail className="text-4xl"></AiTwotoneMail>
              <p className="font-bold">{service.contactEmail}</p>
            </div>
          </div>
          <div className="space-y-4 my-8 md:mt-0 lg:mt-0">
            <div className="flex items-center">
              <HiLocationMarker className="text-4xl"></HiLocationMarker>
              <p className="font-bold">{service.location}</p>
            </div>

            <div className="flex">
              <GiBackwardTime className="text-4xl"></GiBackwardTime>
              <p className="font-bold">{service.time}</p>
            </div>

            <div className="flex">
              <BsFillTelephoneFill className="text-4xl"></BsFillTelephoneFill>
              <p className="font-bold">{service.contactPhone}</p>
            </div>
          </div>
        </div>
        <p className="max-w-6xl p-6 text-gray-400">{service.description}</p>
      </div>

      <div className="max-w-7xl mx-auto ">
        <div>
          <h2 className="text-3xl font-bold text-center my-8">
            Why choose user?
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

      {/* find us part  */}
      <div className="flex max-w-6xl mx-auto items-center my-8 gap-12">
        <div className="flex-1" style={{ height: "500px", width: "500px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleAPIkey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={90.365417} lng={23.8223} text="My Marker" />
          </GoogleMapReact>
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold text-yellow-300">Find us </h2>
          <hr />
          <p className="text-gray-600">
            {" "}
            Finding our establishment is now a breeze. Our interactive map below
            offers a comprehensive visual guide to our precise location,
            complete with nearby landmarks and points of interest.
          </p>
          <ol>
            <li>⚫Destination 2-minute walk from here. Head north on Main Street.</li>
            <li>⚫Walk north for about 2 minutes, and you will reach your destination </li>
            <li>⚫It s a quick 2-minute stroll from here, heading south towards the park</li>
            <li>⚫our stop is only 2 minutes away. Take a short walk south on Elm Avenue.</li>
          </ol>
        </div>
      </div>

      <div className="flex items-center my-4 max-w-6xl  mx-auto gap-12">
        <div className="flex-1 space-y-4 ">
          <h2 className="text-3xl font-bold">Contact our team</h2>
          <p>
            If you have any queries about our Banqueting Suites or would like to
            book an appointment to discuss your requirements and take a tour of
            our premises, please do not  hesitate to get in touch.
          </p>
          <div className="flex items-center">
              <HiLocationMarker className="text-4xl"></HiLocationMarker>
              <p className="font-bold">{service.location}</p>
            </div>
            <div className="flex">
              <BsFillTelephoneFill className="text-4xl"></BsFillTelephoneFill>
              <p className="font-bold">{service.contactPhone}</p>
            </div>
            <div className="flex">
              <AiTwotoneMail className="text-4xl"></AiTwotoneMail>
              <p className="font-bold">{service.contactEmail}</p>
            </div>
        </div>



        <div className="flex-1">

        
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="Phone Number" placeholder="Phone Number" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Enquiry</span>
          </label>
          <textarea className="border" name="" id="" cols="3o" rows="5"></textarea>
        </div>


       
        <div className="form-control mt-6">
          <button className="btn ">Enquiry</button>
        </div>
      </form>
 


        </div>
      </div>
    </div>
  );
};

export default Details;
