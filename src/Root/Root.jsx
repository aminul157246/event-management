import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;