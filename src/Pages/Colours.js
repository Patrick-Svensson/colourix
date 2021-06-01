import { useState } from "react";
import ColourComponent from "../Components/ColourComponent";
import CartItemsList from "../Components/CartItemsList";
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
                <ColourComponent onAddToCart={addToCartHandler} />
            </div>
            <div>
                <CartItemsList colours={cartItem} />
            </div>
        </main>
    );
};

export default Colours;
