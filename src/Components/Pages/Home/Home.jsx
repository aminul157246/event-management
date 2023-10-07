import { useLoaderData } from "react-router-dom";
import Card from "./card";
import Banner from "./Banner";

const Home = () => {
    const services = useLoaderData()
    // console.log(services);
    return (
        <div>
            <Banner></Banner>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {
            services.map(service => <Card key={service.id} service={service}></Card>)
            }
        </div>
        </div>
    );
};

export default Home;