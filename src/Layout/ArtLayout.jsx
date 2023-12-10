import { Outlet } from "react-router-dom";
import ArtNav from "../Journals/ArtPage/ArtNav/ArtNav";
import ArtDetails from "../Journals/ArtPage/ArtDetailsPage/ArtDetails/ArtDetails";


const ArtLayout = () => {
    return (
        <div className="">
            <ArtDetails></ArtDetails>
            <div className="flex px-20 my-8 gap-8">
                <ArtNav></ArtNav>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default ArtLayout;