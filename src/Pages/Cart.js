import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Title from "../Components/Title";
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
            {/* ***** Modal ***** */}
            <div className={termsClicked ? "modalContainer ActivateModalContainer" : "modalContainer"}>
                <div className="modal">
                    <div className="modalXWrapper" onClick={() => setTermsClicked(false)}>
                        <span className="modalX">&#215;</span>
                    </div>
                    <h2 className="modalHeading">Terms and Conditions</h2>
                    <div className="modalContent">
                        <p className="modalText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus arcu ut pulvinar dignissim.
                            Praesent maximus, mi in tristique aliquet, urna arcu semper purus, ut ornare nunc ipsum ac ex. Duis ut
                            molestie lorem. Donec a lectus quis purus fermentum pulvinar. Sed nec ex tellus. Aenean in sem
                            vulputate, malesuada ex eget, tempus nisl. Ut sed sapien turpis. In hac habitasse platea dictumst. Sed
                            vehicula porta augue, at ornare nulla congue eu. Integer mattis ut enim sed elementum. Etiam
                            condimentum aliquam egestas.
                        </p>
                        <br />
                        <p className="modalText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus arcu ut pulvinar dignissim.
                            Praesent maximus, mi in tristique aliquet, urna arcu semper purus, ut ornare nunc ipsum ac ex. Duis ut
                            molestie lorem. Donec a lectus quis purus fermentum pulvinar. Sed nec ex tellus. Aenean in sem
                            vulputate, malesuada ex eget, tempus nisl. Ut sed sapien turpis. In hac habitasse platea dictumst. Sed
                            vehicula porta augue, at ornare nulla congue eu. Integer mattis ut enim sed elementum. Etiam
                            condimentum aliquam egestas. Phasellus quis tellus fringilla mi interdum consectetur. Phasellus tellus
                            leo, dignissim ac fringilla quis, consectetur et erat. Donec porttitor metus vel tortor rutrum
                            faucibus. Cras nec viverra ante. Fusce porttitor semper lorem, placerat rutrum orci lacinia vel. In
                            congue, metus vel congue luctus, elit neque varius dolor, in pulvinar urna lorem ac augue. Suspendisse
                            potenti. Praesent aliquet molestie lorem, vitae convallis justo mollis sit amet. Duis ornare leo nec
                            tellus bibendum, volutpat ullamcorper purus mattis. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.
                        </p>
                        <br />
                        <p className="modalText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus arcu ut pulvinar dignissim.
                            Praesent maximus, mi in tristique aliquet, urna arcu semper purus, ut ornare nunc ipsum ac ex. Duis ut
                            molestie lorem. Donec a lectus quis purus fermentum pulvinar. Sed nec ex tellus. Aenean in sem
                            vulputate, malesuada ex eget, tempus nisl. Ut sed sapien turpis. In hac habitasse platea dictumst. Sed
                            vehicula porta augue, at ornare nulla congue eu. Integer mattis ut enim sed elementum. Etiam
                            condimentum aliquam egestas.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
