import { Link } from "react-router-dom";
import TrendingColour from "../Components/TrendColours";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="banner"></div>
            <div className="home">
                <div className="homeContentContainer">
                    <header className="homeHeader">
                        <h1 className="homeHeaderHeading">
                            premium colours
                            <br></br>
                            <span className="homeHeaderSubHeading">Made exclusivly with</span>
                            <br></br>
                            <span>green components</span>
                            <br></br>
                            <span>for the modern,</span>
                            <br></br>
                            <span>climate consious artist.</span>
                        </h1>
                    </header>
                    <aside className="homeAside">
                        <h2 className="trendColHeading homeHeading">trending colours &#33;</h2>
                        <div className="trendColours">
                            <TrendingColour />
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default Home;
