import ColourItem from "./ColourItem";
import "./Colours.css";

const Colours = () => {
    return (
        <main className="coloursContainer">
            <h2 className="coloursHeading">Premium Colours</h2>
            <div className="productContainer">
                <ColourItem />
            </div>
        </main>
    );
};

export default Colours;
