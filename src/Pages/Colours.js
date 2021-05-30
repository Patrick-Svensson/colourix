import ColourComponent from "../Components/ColourComponent";
import Title from "../Components/Title";
import "./Colours.css";

const Colours = () => {
    return (
        <main className="coloursContainer">
            <Title title="Premium Colours" />
            <div className="productContainer">
                <ColourComponent />
            </div>
        </main>
    );
};

export default Colours;
