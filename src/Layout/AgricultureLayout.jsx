import { Outlet } from "react-router-dom";
import AgricultureNav from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureNav/AgricultureNav";
import AgricultureDetails from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureDetails/AgricultureDetails";

const AgricultureLayout = () => {
    return (
        <div className="">
            <AgricultureDetails></AgricultureDetails>
            <div className="flex px-20 my-8 gap-8">
                <AgricultureNav></AgricultureNav>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default AgricultureLayout;