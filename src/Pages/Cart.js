import Title from "../Components/Title";
import "./Cart.css";

const Cart = () => {
    return (
        <main className="cartContainer">
            <div className="cart">
                <div className="cartHeadingContainer">
                    <Title title="My Cart" className="cartHeading" />
                </div>
                <div className="cartContentContainer"></div>
                <div className="cartActionBar"></div>
            </div>
        </main>
    );
};

export default Cart;
