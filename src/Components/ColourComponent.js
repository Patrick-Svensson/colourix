import { useState } from "react";
import { colourData } from "./colourData";
import Button from "./Button";

import "./ColourComponent.css";

const ColourComponent = () => {
    const [colours] = useState(colourData);
    const [addToCartQuantity, setAddToCartQuantity] = useState("");
    const [addToCartItem, setAddToCartItem] = useState("");

    console.log(addToCartQuantity, addToCartItem); // TODO: Delete console.log

    const styles = {
        backgroundColor: "#EECC51",
    };

    const productItem = colours.map((el) => (
        <div key={el.id} className="colourItemContainer">
            <div
                className="productImg"
                style={{ background: "#" + el.colour }}
            ></div>
            <div className="dataContainer">
                <h3 className="productTitle">{el.name}</h3>

                <div className="unitsContainer">
                    <p>{el.volume} ml</p>
                    <p>€ {el.price}</p>
                </div>
            </div>
            <form className="selectMenu">
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    id="quantity"
                    quantity={el.qty}
                    value={addToCartQuantity}
                    onChange={(event) => {
                        setAddToCartQuantity(event.target.value);
                    }}
                />
            </form>

            <Button
                style={styles}
                text="Add to cart"
                key={el.id}
                value={addToCartItem}
                onClick={(event) => {
                    setAddToCartItem(event.target.value);
                }}
            />
        </div>
    ));

    return <>{productItem}</>;
};

export default ColourComponent;
