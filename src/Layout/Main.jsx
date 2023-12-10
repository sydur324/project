import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import RoutingTop from "../Utilits/RoutingTop/RoutingTop";

const Main = () => {
    return (
        <div>
            <RoutingTop>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </RoutingTop>
        </div>
    );
};

export default Main;