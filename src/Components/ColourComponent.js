import { useState } from "react";
import { colourData } from "./colourData";
import Button from "./Button";

import "./ColourComponent.css";

const ColourComponent = () => {
    const [colours, setColours] = useState(colourData);

    const styles = {
        backgroundColor: "#8DA2EB",
    };

    const productItem = colours.map((el) => (
        <div key={el.id} className="colourItemContainer">
            <div
                className="productImg"
                style={{ background: "#" + el.product }}
            ></div>
            <div className="dataContainer">
                <h3 className="productTitle">{el.name}</h3>

                <div className="unitsContainer">
                    <p>{el.volume} ml</p>
                    <p>€ {el.price}</p>
                </div>
            </div>

            <Button style={styles} text="View Colour" />
        </div>
    ));

    return <div>{productItem}</div>;
};

export default ColourComponent;
