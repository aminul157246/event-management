import Category from "./Category";
import Plan from "./Plan";
import ServiceBanner from "./ServiceBanner";


const Service = () => {
    return (
        <div className="text-gray-800">
            <ServiceBanner />
            <Plan />
            <Category />

        </div>
    );
};

export default Service;