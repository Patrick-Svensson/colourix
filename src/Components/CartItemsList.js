import "./CartItemsList.css";

const CartItemsList = (props) => {
    return (
        <section className="cart-list">
            <h2>In Cart</h2>
            <ul>
                {props.colours.map((el) => (
                    <li
                        key={el.id}
                        onClick={props.onRemoveItem.bind(this, el.id)}
                    >
                        <span>{el.title}</span>
                        <span>{el.quantity}x</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CartItemsList;
