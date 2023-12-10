import { Outlet } from "react-router-dom";
import BankNav from "../Journals/BankPage/BankNav/BankNav";
import BankDetails from "../Journals/BankPage/BankDetailsPage/BankDetails/BankDetails";



const BankLayout = () => {
    return (
        <div className="">
            <BankDetails></BankDetails>
            <div className="flex px-20 my-8 gap-8">
                <BankNav></BankNav>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default BankLayout;