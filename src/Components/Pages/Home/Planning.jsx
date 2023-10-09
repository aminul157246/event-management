
import {AiOutlineHome } from 'react-icons/ai'
import {LuMessagesSquare } from 'react-icons/lu'
import {PiNotePencilBold } from 'react-icons/pi'
import {GiGlassCelebration } from 'react-icons/gi'



const Planning = () => {
    return (
        <div className="max-w-6xl mx-auto mt-12"> 
            <h2 className="text-4xl  font-bold  text-center font-Vidaloka ">
            <span className=" text-yellow-400">Hello ! </span> We Are an Event Planning Agency
      </h2>
      <p className="text-gray-500 text-center mt-3">As the premier event planning company in the area, we know that its not “one size fits all”. <br /> Each event and client is unique and we believe our services should be as well. <br /> We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>





<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-3'>
<div className="card  bg-base-100 shadow-xl">
    <AiOutlineHome className='text-6xl ml-24 text-red-400'></AiOutlineHome>
  <div className="card-body">
  <h2 className="card-title">Find the perfect venue for free</h2>
  </div>
  </div>
    <div className="card  bg-base-100 shadow-xl">
    <LuMessagesSquare className='text-6xl ml-24 text-red-400'></LuMessagesSquare>
  <div className="card-body">
  <h2 className="card-title">Connect with the best vendor</h2>
  </div>
  </div>

    <div className="card  bg-base-100 shadow-xl">
    <PiNotePencilBold className='text-6xl ml-24 text-red-400'></PiNotePencilBold>
  <div className="card-body">
  <h2 className="card-title">Let us help you with the event</h2>
  </div>
  </div>
    <div className="card  bg-base-100 shadow-xl">
    <GiGlassCelebration className='text-6xl ml-24 text-red-400'></GiGlassCelebration>
  <div className="card-body">
  <h2 className="card-title">Enjoy the party with your friends</h2>
  </div>
  </div>
</div>


    

    


    </div>


       
    );
};

export default Planning;