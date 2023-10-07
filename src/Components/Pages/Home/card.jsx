import { Link } from "react-router-dom";
import { GiPartyHat, GiBackwardTime } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalendarDateFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

import PropTypes from 'prop-types';


const Card = ({ service }) => {
  const { id,eventType, venue, date, time, location, image, contactPhone, contactEmail } = service;
  return (
    <div>
      
      <div className="card p-3 shadow-lg">
        <figure>
          <img className="w-72" src={image} alt="Shoes" />
        </figure>
        <h2 className="text-2xl font-bold  text-center ">
        {eventType}
      </h2>
        

            
            <div className="space-y-2 mt-4">
            <div className="flex items-center">
              <GiPartyHat ></GiPartyHat>
              <p>{venue} </p>
            </div>
            <div className="flex items-center">
              <HiLocationMarker ></HiLocationMarker>
              <p>{location}</p>
            </div>
            <div className="flex gap-5">
           <div className="flex items-center ">
              <BsCalendarDateFill ></BsCalendarDateFill>
              <p >{date}</p>
            </div>

            <div className="flex items-center">
              <GiBackwardTime ></GiBackwardTime>
              <p>{time}</p>
            </div>
            </div>
            <div className="flex items-center">
              <AiTwotoneMail ></AiTwotoneMail>
              <p >{contactEmail}</p>
            </div>
            <div className="flex items-center">
              <BsFillTelephoneFill ></BsFillTelephoneFill>
              <p >{contactPhone}</p>
            </div>
            </div>

        
        <div className="flex justify-center  mt-8">
      <Link to={`/service/${id}`}>
            <button className="btn bg-gray-400  rounded-lg">Details</button>
            </Link>
      </div>
      
      </div>

    </div>
  );
};

Card.propTypes = {
  service: PropTypes.object
}

export default Card;
