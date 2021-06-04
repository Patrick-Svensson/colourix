import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Button from "../Components/Button";
import "../Components/ColourComponent.css";
import "./Home.css";

const Home = (props) => {
    const { products } = props;
    const styles = {
        backgroundColor: "#8DA2EB",
    };

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
                                <span className="homeHeaderSubHeading">Made exclusively with</span>
                                <br></br>
                                <span>green components</span>
                                <br></br>
                                <span>for the modern,</span>
                                <br></br>
                                <span>climate consious artist.</span>
                            </h1>
                        </header>
                        <aside className="homeAside">
                            <h2 className="homeColHeading homeHeading">trending colours &#33;</h2>
                            <div className="homeColours">
                                {products
                                    .filter((product) => product.id < 3)
                                    .map((product) => (
                                        <div key={product.id} className="colourItemContainer homeColItemContainer">
                                            <div
                                                className="productImg homeProductImg"
                                                style={{
                                                    background: "#" + product.colour,
                                                }}
                                            ></div>
                                            <div className="dataContainer">
                                                <h3 className="productTitle">{product.name}</h3>

                                                <div className="unitsContainer homeColUnitsContainer">
                                                    <p>{product.volume} ml</p>
                                                    <p>€ {product.price}</p>
                                                </div>
                                            </div>
                                            <Link className="homeColButton" to="/colours">
                                                <Button style={styles} text="view colours" />
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
