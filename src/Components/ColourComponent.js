import Button from "./Button";
import "./ColourComponent.css";

const ColourComponent = (props) => {
    const { product, onAdd } = props;

    // Button component styling for addToCart button
    const styles = {
        backgroundColor: "#EECC51",
    };

    return (
        <div key={product.id} className="colourItemContainer">
            <div
                className="productImg"
                style={{ background: "#" + product.colour }}
            ></div>
            <div className="dataContainer">
                <h3 className="productTitle">{product.name}</h3>

                <div className="unitsContainer">
                    <p>{product.volume} ml</p>
                    {product.id === 5 ? (
                        <p className="reducedPrice">€ {product.price}</p>
                    ) : (
                        <p>€ {product.price}</p>
                    )}
                </div>
            </div>
            <Button
                style={styles}
                text="Add to cart"
                onClick={() => onAdd(product)}
            />
        </div>
    );
};

export default ColourComponent;
