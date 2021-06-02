import { Link } from "react-router-dom";
import Button from "./Button";
import "./ColourComponent.css";
import "./TrendColours.css";

const TrendingColours = (props) => {
    const { product } = props;

    const styles = {
        backgroundColor: "#8DA2EB",
    };

    const trendColItem = () => {
        product
            .filter((el) => el.id < 3)
            .map((el) => (
                <div
                    key={el.id}
                    className="colourItemContainer trendColItemContainer"
                >
                    <div
                        className="productImg"
                        style={{ background: "#" + el.colour }}
                    ></div>
                    <div className="dataContainer">
                        <h3 className="productTitle">{el.name}</h3>

                        <div className="unitsContainer trendColUnitsContainer">
                            <p>{el.volume} ml</p>
                            <p>€ {el.price}</p>
                        </div>
                    </div>
                    <Link className="trendColButton" to="/colours">
                        <Button style={styles} text="view colours" />
                    </Link>
                </div>
            ));
    };

    return <>{trendColItem}</>;
};

export default TrendingColours;
