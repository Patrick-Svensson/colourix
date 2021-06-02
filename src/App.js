import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Colours from "./Pages/Colours";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import data from "./Components/Data";
import "./App.css";

function App() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((el) => el.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((el) =>
                    el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((el) => el.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((el) => el.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((el) =>
                    el.id === product.id ? { ...exist, qty: exist.qty - 1 } : el
                )
            );
        }
    };

    return (
        <BrowserRouter>
            <Navbar countCartItems={cartItems.length} />
            <Switch>
                <Route path={"/"} exact>
                    <Home />
                </Route>
                <Route path={"/colours"} exact>
                    <Colours products={products} onAdd={onAdd} />
                </Route>
                <Route path={"/contact"} exact>
                    <Contact />
                </Route>
                <Route path={"/cart"} exact>
                    <Cart
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
