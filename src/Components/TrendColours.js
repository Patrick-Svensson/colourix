import { useState } from "react";
import { colourData } from "./colourData";
import Button from "./Button";

import "./ColourComponent.css";

const TrendingColours = () => {
    const [colours, setColours] = useState(colourData);

    const styles = {
        backgroundColor: "#8DA2EB",
    };

    const trendColItem = colours
        .filter((colours) => colours.id < 3)
        .map((el) => (
            <div key={el.id} className="colourItemContainer">
                <div className="productImg" style={{ background: "#" + el.colour }}></div>
                <div className="dataContainer">
                    <h3 className="productTitle">{el.name}</h3>

                    <div className="unitsContainer">
                        <p>{el.volume} ml</p>
                        <p>€ {el.price}</p>
                    </div>
                </div>
                <Button style={styles} text="view colour" />
            </div>
        ));

    return <>{trendColItem}</>;
};

export default TrendingColours;
