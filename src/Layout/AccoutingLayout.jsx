import { Outlet } from "react-router-dom";
import AccountingNav from "../Journals/AccountingPage/AccountingDetailsPage/AccountingNav/AccountingNav";
import AccountingDetails from "../Journals/AccountingPage/AccountingDetailsPage/AccountingDetails/AccountingDetails";
import RoutingTop from "../Utilits/RoutingTop/RoutingTop";

const AccoutingLayout = () => {
    return (
        <div className="">
            
                <AccountingDetails></AccountingDetails>
                
                <RoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <AccountingNav></AccountingNav>
                    <Outlet></Outlet>
                </div>
            </RoutingTop>
        </div>
    );
};

export default AccoutingLayout;