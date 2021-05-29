import { NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { ReactComponent as ReactLogo } from "./ColourixLogo.svg";

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="logoContainer">
                <NavLink exact to="/">
                    <ReactLogo />
                </NavLink>
            </div>
            <div className="navLinkContainer">
                <NavLink className="navLink homeLink" exact to="/">
                    Home
                </NavLink>
                <NavLink className="navLink coloursLink" exact to="/colours">
                    Colours
                </NavLink>
                <NavLink className="navLink contactLink" exact to="/contact">
                    Contact
                </NavLink>
                <NavLink className="navLink cartLink" exact to="/cart">
                    <BiCart />
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
