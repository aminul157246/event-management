
import birthday from '../../../assets/images/BIRTHAY.jpg'
import banner from '../../../assets/images/banner2.webp'

const OnlineRequest = () => {
    return (
        <div>
      <div className="flex-row  p-4 lg:flex justify-center items-center my-12 max-w-6xl mx-auto">
        <div className="flex-1">
        <img className="h-[350px] md:w-full lg:h-[560px]" src={birthday} alt="" />
        </div>
        <div style={{backgroundImage : `url(${banner})`}} className="flex-1 bg-gray-300">
        <h2 className="text-4xl font-Vidaloka pt-4 font-bold text-yellow-700 text-center">Online Request</h2>
        <p className="text-gray-400 mt-4 text-center">DROP US A FEW LINES</p>
        

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
          <input type="Email" placeholder="Email" className="input input-bordered" required />
          </div>
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="" id="" cols="30" rows="5"></textarea>
          <div className="flex justify-center">
          <button className=" btn w-24 bg-red-400 text-white rounded-3xl  ">
          send
          </button>
          </div>
        
      </form>


        
        </div>
      </div>

        </div>
    );
};

export default OnlineRequest;