import { Outlet } from "react-router-dom";
import BiochemistrDetails from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistrDetails/BiochemistrDetails";
import BiochemistiNav from "../Journals/BiochemistryPage/BiochemistiNav/BiochemistiNav";




const BiochemistryLayout = () => {
    return (
        <div className="">
           <BiochemistrDetails></BiochemistrDetails>
            <div className="flex px-20 my-8 gap-8">
                <BiochemistiNav></BiochemistiNav>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default BiochemistryLayout;