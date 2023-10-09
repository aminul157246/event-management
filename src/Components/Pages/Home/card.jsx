import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ service }) => {
  const {id,eventType,description,image, price} = service;
  return (
    <div >
      <div className="w-[300px]">
        <figure>
          <img className="w-full " src={image} alt="Shoes" />
        </figure>
        <h2 className="text-2xl text-red-400 font-Vidaloka font-bold mt-2  ">{eventType}</h2>
        
          {
            <div>
              <small><p className="text-gray-600 my-2">{description.slice(0, 80)}.....</p></small>
              <div className="flex gap-20 md:24 lg:gap-24">
              <div>
                  <button className="bg-red-400 text-white  rounded-3xl px-2 ">price : {price}</button>
              </div>

              <div >
              <button className="bg-red-400 text-white  rounded-3xl px-2 "><Link  to={`/service/${id}`}>see more</Link></button>
              </div>
              </div>
            </div>
          }
       

        
      </div>
    </div>
  );
};

Card.propTypes = {
  service: PropTypes.object,
};

export default Card;
