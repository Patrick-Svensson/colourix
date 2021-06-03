import TrendingColour from "../Components/TrendColours";
import Banner from "../Components/Banner";
import "./Home.css";

const Home = (props) => {
    const { products } = props;

    return (
        <>
            <Banner />
            <div className="home">
                <div className="homeContentContainer">
                    <div className="homeContentWrapper">
                        <header className="homeHeader">
                            <h1 className="homeHeaderHeading">
                                premium colours
                                <br></br>
                                <span className="homeHeaderSubHeading">
                                    Made exclusively with
                                </span>
                                <br></br>
                                <span>green components</span>
                                <br></br>
                                <span>for the modern,</span>
                                <br></br>
                                <span>climate consious artist.</span>
                            </h1>
                        </header>
                        <aside className="homeAside">
                            <h2 className="homeColHeading homeHeading">
                                trending colours &#33;
                            </h2>
                            <div className="homeColours">
                                <TrendingColour />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
