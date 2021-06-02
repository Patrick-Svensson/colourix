import Button from "../Components/Button";
import Title from "../Components/Title";
import "./Cart.css";

const Cart = () => {
    return (
        <main className="cartContainer">
            <div className="cartWrapper">
                <div className="cart">
                    <div className="cartHeadingContainer">
                        <Title title="my cart" />
                    </div>
                    <div className="cartContentContainer"></div>
                    <div className="cartActionBar">
                        <Button text="continue shopping" />
                        <Button text="read terms" />
                        <div className="cartAcceptTerms">
                            <label className="cartCheckboxLabel">accept terms</label>
                            <input type="checkbox" id="cartTerms" />
                        </div>
                        <Button text="to checkout" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cart;
