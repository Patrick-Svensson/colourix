import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Colours from "./Pages/Colours";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/colours" exact component={Colours}></Route>
                <Route path="/contact" exact component={Contact}></Route>
            </Switch>
            <Switch>
                <Route path="/cart" exact component={Cart}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
