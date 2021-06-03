import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Title from "../Components/Title";
import Modal from "../Components/Modal";
import "./Cart.css";

const Cart = (props) => {
    const [termsClicked, setTermsClicked] = useState(false);

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((accumulator, current) => accumulator + current.price * current.qty, 0);

    const totalPrice = itemsPrice;

    const contShopBtnStyle = {
        width: "11rem",
        backgroundColor: "#EECC51",
    };

    const readTermsBtnStyle = {
        backgroundColor: "#8DA2EB",
    };

    const toCheckoutBtnStyle = {
        backgroundColor: "#9AEB8D",
    };

    const hideModal = {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        opacity: "0",
        visibility: "hidden",
        transform: "scale(1.1)",
        transition: "visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s",
    };

    const showModal = {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        opacity: "1",
        visibility: "visible",
        transform: "scale(1)",
        transition: "visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s",
    };

    const modalHandler = termsClicked ? showModal : hideModal;

    return (
        <>
            <main className="cartContainer">
                <div className="cartWrapper">
                    <div className="cart">
                        <div className="cartHeadingContainer">
                            <Title title="my cart" />
                        </div>
                        <div className="cartContentContainer">
                            <div>
                                {cartItems.length === 0 && <div className="cartCheckboxLabel textCenter">Cart is Empty</div>}
                            </div>
                            {cartItems.map((item) => (
                                <div key={item.id} className="row">
                                    <div className="productImg" style={{ background: "#" + item.colour }}></div>
                                    <div className="cartCheckboxLabel">{item.name}</div>
                                    <div>
                                        <button onClick={() => onAdd(item)} className="add">
                                            +
                                        </button>
                                        <button onClick={() => onRemove(item)} className="remove">
                                            -
                                        </button>
                                    </div>
                                    <div className="cartCheckboxLabel">{item.qty}</div>
                                    <div className="cartCheckboxLabel flexEnd">€ {item.price.toFixed(2)}</div>
                                </div>
                            ))}
                            {cartItems.length !== 0 && (
                                <>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="cartCheckboxLabel flex-end span-3">
                                            <strong>Total</strong>
                                        </div>
                                        <div className="cartCheckboxLabel flex-end span-2">
                                            <strong>€ {totalPrice.toFixed(2)}</strong>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="cartActionBar">
                            <Link to="./colours">
                                <Button style={contShopBtnStyle} text="continue shopping" />
                            </Link>
                            <Button style={readTermsBtnStyle} text="read terms" onClick={() => setTermsClicked(true)} />
                            <div className="cartCheckboxContainer">
                                <label className="cartCheckboxLabel">accept terms</label>
                                <input type="checkbox" id="cartCheckbox" />
                            </div>
                            <Button style={toCheckoutBtnStyle} text="to checkout" onClick={() => alert("Implement Checkout")} />
                        </div>
                    </div>
                </div>
            </main>
            <Modal modal={modalHandler} onClick={() => setTermsClicked(false)} />
        </>
    );
};

export default Cart;
