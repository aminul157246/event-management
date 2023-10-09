import gallery1 from '../../../assets/images/g1.jpg'
import gallery2 from '../../../assets/images/g2.jpg'
import gallery3 from '../../../assets/images/g3.jpg'
import gallery4 from '../../../assets/images/g4.jpg'


const Gallery = () => {
    return (
        <div>
            
{/* gallery  */}
<div>
  <h2 className="text-4xl mt-12 font-Vidaloka  font-bold text-yellow-400 text-center">Gallery</h2>
        <p className="text-gray-400 my-4 text-center">OUR RECENT PROJECTS</p>
<div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-4">
  <img className="w-[350px] h-[300px] hover:opacity-50 hover:" src={gallery1}  />
<img className="w-[350px] h-[300px]" src={gallery2}  />
<img className="w-[350px] h-[300px]" src={gallery3} />
<img className="w-[350px] h-[300px]" src={gallery4}  />
</div>
<div className='flex-row md:flex-col lg:flex-col justify-center items-center mt-4 gap-4 '>
<h2 className="text-2xl font-bold  text-center">See Our Best Events <span className='text-yellow-400'>Gallery !</span></h2>
<div className='flex md:justify-center'>
<button className="bg-red-400 text-white rounded-3xl px-4 py-2">
            visit gallery
          </button>
</div>
</div>
</div>
<hr className='mt-5' />
        </div>
    );
};

export default Gallery;