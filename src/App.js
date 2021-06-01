import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Cart from "./Pages/Cart";
import Colours from "./Pages/Colours";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./Components/Footer.css";
import "./Components/Navbar.css";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path={"/"} exact>
                    {Home}
                </Route>
                <Route path={"/colours"} exact>
                    {Colours}
                </Route>
                <Route path={"/contact"} exact>
                    {Contact}
                </Route>
                {/* <Route path={"/cart"} exact>
                    {Cart}
                </Route> */}
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
