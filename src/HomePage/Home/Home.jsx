import Banner from "../Banner/Banner";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeJournals from "../HomeJournals/HomeJournals";
import HomeResearch from "../HomeResearch/HomeResearch";
import SubscribPage from "../SubscribPage/SubscribPage";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeJournals></HomeJournals>
            <HomeAbout></HomeAbout>
            <HomeResearch></HomeResearch>
            {/* <SubscribPage></SubscribPage> */}
        </div>
    );
};

export default Home;