import { Outlet } from "react-router-dom";
import ArchaeologyDetails from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyDetails/ArchaeologyDetails";
import ArchaeologyNav from "../Journals/ArchaeologyPage/ArchaeologyNav/ArchaeologyNav";


const ArchaeologyLayout = () => {
    return (
        <div className="">
            <ArchaeologyDetails></ArchaeologyDetails>
            <div className="flex px-20 my-8 gap-8">
                <ArchaeologyNav></ArchaeologyNav>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default ArchaeologyLayout;