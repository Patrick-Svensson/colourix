import Button from "../Components/Button";
import Title from "../Components/Title";
import "./Cart.css";

const Cart = () => {
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
        <main className="cartContainer">
            <div className="cartWrapper">
                <div className="cart">
                    <div className="cartHeadingContainer">
                        <Title title="my cart" />
                    </div>
                    <div className="cartContentContainer"></div>
                    <div className="cartActionBar">
                        <Button style={contShopBtnStyle} text="continue shopping" />
                        <Button style={readTermsBtnStyle} text="read terms" />
                        <div className="cartCheckboxContainer">
                            <label className="cartCheckboxLabel">accept terms</label>
                            <input type="checkbox" id="cartCheckbox" />
                        </div>
                        <Button style={toCheckoutBtnStyle} text="to checkout" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cart;
