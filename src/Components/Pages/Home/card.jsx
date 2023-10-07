import { Link } from "react-router-dom";
import { GiPartyHat, GiBackwardTime } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalendarDateFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";


const Card = ({ service }) => {
  const { id,eventType, venue, date, time, location, image, contactPhone, contactEmail } = service;
  return (
    <div>
      
      <div className="card p-3 shadow-xl">
        <figure>
          <img className="" src={image} alt="Shoes" />
        </figure>
        <h2 className="text-5xl font-bold my-8 text-center ">
        {eventType}
      </h2>
        <div className="flex gap-12 ">
          <div className="space-y-4">
            
            <div className="flex items-center">
              <GiPartyHat className="text-2xl"></GiPartyHat>
              <p className="text-xl font-bold">{venue} </p>
            </div>

            <div className="flex gap-4">
              <BsCalendarDateFill className="text-2xl"></BsCalendarDateFill>
              <p className="text-xl font-bold">{date}</p>
            </div>

            <div className="flex items-center">
              <AiTwotoneMail className="text-2xl"></AiTwotoneMail>
              <p className="text-xl font-bold">{contactEmail}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <HiLocationMarker className="text-2xl"></HiLocationMarker>
              <p className="text-xl font-bold">{location}</p>
            </div>

            <div className="flex items-center">
              <GiBackwardTime className="text-2xl"></GiBackwardTime>
              <p className="text-xl font-bold">{time}</p>
            </div>

            <div className="flex items-center">
              <BsFillTelephoneFill className="text-2xl"></BsFillTelephoneFill>
              <p className="text-xl font-bold">{contactPhone}</p>
            </div>
            
          </div>
        </div>
        <div className="flex justify-center  mt-8">
      <Link to={`/service/${id}`}>
            <button className="btn bg-gray-400 px-60 py-3 rounded-lg">Details</button>
            </Link>
      </div>
      
      </div>

    </div>
  );
};

export default Card;
