import user1 from "../../../assets/images/user1.jpg";
import user2 from "../../../assets/images/user2.jpg";
import user3 from "../../../assets/images/user3.jpg";

const Testimonial = () => {
    return (
        <div>
            {/* testimonial   */}
      <h2 className="text-4xl mt-12 font-Vidaloka font-bold text-yellow-400 text-center">Testimonials</h2>
        <p className="text-gray-400 mt-4 text-center">HAPPY CLIENTS ABOUT US</p>
      <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-12 max-w-6xl mx-auto">
        
        <div className="card  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              I invited these event planner to arrange a bachelor party for my
              best friend!
            </h2>
          </div>
          <div className="flex gap-4 justify-center items-center pb-6">
            <figure>
              <img className="w-[50px]  rounded-full" src={user1} alt="Shoes" />
            </figure>
            <p>Jane Sanders</p>
          </div>
        </div>
        
        <div className="card  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
            Look no further! You are in the right place to plan your celebration.
            </h2>
          </div>
          <div className="flex gap-4 justify-center items-center pb-6">
            <figure>
              <img className="w-[50px]  rounded-full" src={user2} alt="Shoes" />
            </figure>
            <p>John snow</p>
          </div>
        </div>
        
        <div className="card  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
Look no further! You are in the right place to plan your celebration.

            </h2>
          </div>
          <div className="flex gap-4 justify-center items-center pb-6">
            <figure>
              <img className="w-[50px]  rounded-full" src={user3} alt="Shoes" />
            </figure>
            <p>Linda Movrizza </p>
          </div>
        </div>
        
        <div className="card  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
            My family and I are beyond happy to have them plan our wedding day.
            </h2>
          </div>
          <div className="flex gap-4 justify-center items-center pb-6">
            <figure>
              <img className="w-[50px]  rounded-full" src={user1} alt="Shoes" />
            </figure>
            <p>Jessica Mann </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Testimonial;