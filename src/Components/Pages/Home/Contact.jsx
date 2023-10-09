import { HiLocationMarker } from "react-icons/hi";
import { GiBackwardTime, GiPartyHat } from "react-icons/gi";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
    return (
        <div>
            
     
      <h2 className="text-4xl mt-12 font-bold font-Vidaloka text-yellow-400 text-center">Contact</h2>
        <p className="text-gray-400 mt-4 text-center">CONTACT US ANY TIME</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-12 max-w-6xl mx-auto">
 
        <div className="card shadow-xl">
          <HiLocationMarker className="text-4xl text-red-600  ml-28"></HiLocationMarker>
          <div className="card-body">
            <h2 className="card-title">Postal Address</h2>
            <p>Unica Event Agency</p>
            <p>85 Fentiman Ave</p>
            <p>Ottawa, ON K1S 0T7</p>
          </div>
        </div>

        <div className="card shadow-xl">
          <AiTwotoneMail className="text-4xl text-red-600 ml-28 "></AiTwotoneMail>
          <div className="card-body">
            <h2 className="card-title">Phone & E-mail</h2>
            <p>Phone: 1-800-64-38</p>
            <p>Fax: 1-800-64-39</p>
            <p className="text-yellow-400">office@fable.com</p>
          </div>
        </div>

        <div className="card shadow-xl">
          <GiBackwardTime className="text-4xl  text-red-600 ml-28 "></GiBackwardTime>
          <div className="card-body">
            <h2 className="card-title">Open Hours</h2>
            <p>Monday - Friday</p>
            <p>8.00 am - 5.00 pm</p>
            <p>Weekend Closed</p>
          </div>
        </div>
 
        <div className="card shadow-xl">
          <GiPartyHat className="text-4xl text-red-600 ml-28 "></GiPartyHat>
          <div className="card-body">
            <h2 className="card-title">Sessions</h2>
            <p>Mornings, 8 am - 12 noon</p>
            <p>Afternoons, 1 pm - 5 pm</p>
            <p>Full Day, 8 am - 5 pm</p>
          </div>
        </div>
      </div>

        </div>
    );
};

export default Contact;