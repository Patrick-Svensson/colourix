import { useState } from "react";
import ColourComponent from "../Components/ColourComponent";

import Title from "../Components/Title";
import "./Colours.css";

const Colours = () => {
    return (
        <main className="coloursContainer">
            <Title title="Premium Colours" />
            <div className="componentContainer">
                <ColourComponent />
            </div>
        </main>
    );
};

export default Colours;
