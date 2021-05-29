import { useState } from "react";
import { Link } from "react-router-dom";
import { colourData } from "./colourData";
import Button from "./Button";

import "./ColourComponent.css";

const ColourComponent = () => {
    const [items, setItems] = useState(colourData);

    const styles = {
        backgroundColor: "#8DA2EB",
    };

    const productItem = items.map((item) => (
        <div key={item.id} className="colourItemContainer">
            <div
                className="productImg"
                style={{ background: "#" + item.product }}
            ></div>
            <div className="dataContainer">
                <h3 className="productTitle">{item.name}</h3>

                <div className="unitsContainer">
                    <p>{item.volume} ml</p>
                    <p>€ {item.price}</p>
                </div>
            </div>
            <Link to="/colouritem">
                <Button style={styles} text="View Colour" />
            </Link>
        </div>
    ));

    return <div>{productItem}</div>;
};

export default ColourComponent;
