import { useState } from "react";
import { colourData } from "./colourData";

import "./ColourComponent.css";

const ColourComponent = () => {
    const [items, setItems] = useState(colourData);

    const productItem = items.map((item) => (
        <div key={item.id}>
            <h3 className="productTitle">{item.name}</h3>
            <main>
                <div
                    className="productImg"
                    style={{ background: "#" + item.product }}
                ></div>
                <section>
                    <p>{item.volume} ml</p>
                    <p>€ {item.price}</p>
                </section>
            </main>
        </div>
    ));

    return <div>{productItem}</div>;
};

export default ColourComponent;
