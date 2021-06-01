import { useState } from "react";
import ColourComponent from "../Components/ColourComponent";
import Title from "../Components/Title";
import "./Colours.css";

const Colours = () => {
    const [cartItem, setCartItem] = useState([]);

    const addToCartHandler = (colour) => {
        setCartItem((prevColours) => [...prevColours, { ...colour }]);
    };

    return (
        <main className="coloursContainer">
            <Title title="Premium Colours" />
            <div className="componentContainer">
                <ColourComponent
                    colours={cartItem}
                    onAddToCart={addToCartHandler}
                />
            </div>
            <div>
                <div></div>
            </div>
        </main>
    );
};

export default Colours;
