import TrendingColour from "../Components/TrendColours";

const Home = () => {
    return (
        <div className="home">
            <div className="homeContentContainer">
                <header className="homeHeader">
                    <h1 className="homeHeaderHeading homeHeading">premium colours</h1>
                    <span className="homeHeaderSubHeading homeHeading">Made exclusivly with</span>
                    <span className="homeHeaderSubHeading homeHeading">green components</span>
                    <span className="homeHeaderSubHeading homeHeading">for the modern,</span>
                    <span className="homeHeaderSubHeading homeHeading">climate consious artist.</span>
                </header>
                <aside className="homeAside">
                    <div className="trendColContainer">
                        <h2 className="trendColHeading homeHeading">trending colours &#33;</h2>
                        <div className="trendColours">
                            <TrendingColour />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Home;
