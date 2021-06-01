import { useState } from "react";
import "./Button.css";

const Button = (props) => {
    const addToCartHandler = (event) => {
        event.preventDefault();
        props.onAddToCart({
            title: addToCartItem,
            quantity: AddToCartQuantity,
        });
    };

    return (
        <>
            <button
                style={props.style}
                className="button"
                onClick={addToCartHandler}
            >
                {props.text}
            </button>
        </>
    );
};

export default Button;
