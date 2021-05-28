import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Colouritem from "./Pages/Colouritem";
import Colours from "./Pages/Colours";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact>
                    Home
                </Route>
                <Route path={"/colours"} exact>
                    Colours
                </Route>
                <Route path={"/contact"} exact>
                    Contact
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
