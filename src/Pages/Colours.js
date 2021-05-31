import ColourComponent from "../Components/ColourComponent";
import Title from "../Components/Title";
import "./Colours.css";

const Colours = () => {
    return (
        <main className="coloursContainer">
            <div className="coloursTitleContainer">
                <Title title="Premium Colours" className="coloursTitle" />
            </div>
            <div className="componentContainer">
                <ColourComponent />
            </div>
        </main>
    );
};

export default Colours;
