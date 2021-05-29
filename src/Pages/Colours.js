import ColourComponent from "../Components/ColourComponent";
import "./Colours.css";

const Colours = () => {
    return (
        <main className="coloursContainer">
            <h2 className="coloursHeading">Premium Colours</h2>
            <div className="productContainer">
                <ColourComponent />
            </div>
        </main>
    );
};

export default Colours;
