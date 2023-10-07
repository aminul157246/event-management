import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { GiPartyHat, GiBackwardTime } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalendarDateFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

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
      <div className="card max-w-5xl  mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="" src={service.image} alt="Shoes" />
        </figure>

        <div className="flex py-12 pl-12 gap-24">
          <div className="space-y-4">
            <div className="flex items-center">
              <GiPartyHat className="text-4xl"></GiPartyHat>
              <p className="text-2xl font-bold">{service.venue} </p>
            </div>

            <div className="flex gap-4">
              <BsCalendarDateFill className="text-4xl"></BsCalendarDateFill>
              <p className="text-2xl font-bold">{service.date}</p>
            </div>

            <div className="flex">
              <AiTwotoneMail className="text-4xl"></AiTwotoneMail>
              <p className="text-2xl font-bold">{service.contactEmail}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <HiLocationMarker className="text-4xl"></HiLocationMarker>
              <p className="text-2xl font-bold">{service.location}</p>
            </div>

            <div className="flex">
              <GiBackwardTime className="text-4xl"></GiBackwardTime>
              <p className="text-2xl font-bold">{service.time}</p>
            </div>

            <div className="flex">
              <BsFillTelephoneFill className="text-4xl"></BsFillTelephoneFill>
              <p className="text-2xl font-bold">{service.contactPhone}</p>
            </div>
          </div>
        </div>
          <p className="p-6 text-gray-400">{service.description}</p>
      </div>




      <h2 className='text-3xl font-bold text-center my-8'>Why Choose our Party Center for Your {service.eventType}:</h2>
      <div className="grid grid-cols-2 max-w-5xl mx-auto gap-8">
        <div className="card  bg-gray-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Spacious and Versatile Venue : </h2>
            <p>
              
              Our spacious venue is designed to accommodate gatherings of all
              sizes. Whether you have a small, intimate family reunion or a
              large, extended family gathering, we have the space to suit your
              needs.
            </p>
            <a className="underline" href="">
              see more
            </a>
          </div>
        </div>
       
        <div className="card  bg-gray-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Kid-Friendly Activities: </h2>
            <p>
            We understand that family reunions are all about bringing generations together. We offer a range of kid-friendly activities and play areas to keep the younger ones entertained, allowing the adults to catch up without worry.
            </p>
            <a className="underline" href="">
              see more
            </a>
          </div>
        </div>
       
        <div className="card  bg-gray-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Picturesque Surroundings :  </h2>
            <p>
            Our venue offers a serene and picturesque backdrop for your family reunion photos and memories.
            </p>
            <a className="underline" href="">
              see more
            </a>
          </div>
        </div>
       
        <div className="card  bg-gray-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Memorable Experience: </h2>
            <p>
             We are committed to making your family reunion a memorable occasion. Our venue is designed to foster a sense of togetherness, celebration, and lasting memories
            </p>
            <a className="underline" href="">
              see more
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Details;
