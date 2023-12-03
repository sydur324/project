import Banner from "../Banner/Banner";
import HomeJournals from "../HomeJournals/HomeJournals";
import HomeResearch from "../HomeResearch/HomeResearch";
import SubscribPage from "../SubscribPage/SubscribPage";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeJournals></HomeJournals>
            <HomeResearch></HomeResearch>
            {/* <SubscribPage></SubscribPage> */}
        </div>
    );
};

export default Home;