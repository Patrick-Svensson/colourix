import ColourComponent from "../Components/ColourComponent";
import Title from "../Components/Title";
import "./Colours.css";

const Colours = (props) => {
    const { products, onAdd } = props;

    return (
        <main className="coloursContainer">
            <div className="coloursTitleContainer">
                <Title title="premium colours" />
            </div>
            <div className="componentContainer">
                {products.map((product) => (
                    <ColourComponent
                        key={product.id}
                        product={product}
                        onAdd={onAdd}
                    ></ColourComponent>
                ))}
            </div>
        </main>
    );
};

export default Colours;
