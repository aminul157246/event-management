import Lottie from "lottie-react";
import heart from '../../../../../src/lottie/banner.json'
import banner from '../../../../../src/lottie/belon.json'


import female from '../../../../assets/images/home-2-gallery-img-4.jpg'
import male from '../../../../assets/images/bia.jpg'
const EventBanner = () => {
    return (
        <div>

            <div className="mb-16 bg-blue-50 pt-12">
                <div className="relative h-[300px]">
                    <Lottie animationData={banner} loop={true} />;
                    <div className="flex items-center  justify-center left-1/4 top-0 absolute gap-0">
                        
                    <div className="flex    items-center gap-4">
                    <h3 className="font-bold">Deepika Sharma</h3>
                    <img className="w-[100px] border-4 border-gray-300 rounded-full" src={female} alt="" />
                    </div>
                    <div className=" w-[300px] ">
                            <Lottie   animationData={heart} loop={true} />

                        </div>
                        <div className="flex    items-center gap-4">
                        <img className="w-[100px] border-4 border-gray-300 rounded-full" src={male} alt="" />
                        <h2 className=" font-bold">Kuldeep Gaur </h2>
                        </div>
                        

                    </div>
                </div>

            </div>
        </div>
    );
};

export default EventBanner;