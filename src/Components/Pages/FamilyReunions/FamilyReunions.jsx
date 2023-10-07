import familyImg from "../../../assets/images/family reunion.jpeg";
const FamilyReunions = () => {
  return (
    <div>
      <h2 className="my-6 text-5xl font-bold text-center">Family Reunions</h2>
      <div className="flex justify-center items-center">
        <img src={familyImg} alt="" />
      </div>



      

      <h2 className='text-3xl font-bold text-center my-8'>Why Choose our Party Center for Your Family Reunion:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-8">
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

export default FamilyReunions;
