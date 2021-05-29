import { NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { ReactComponent as ReactLogo } from "./ColourixLogo.svg";

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="logoContainer">
                <NavLink className="logoLink" exact to="/">
                    <ReactLogo className="logo" />
                </NavLink>
            </div>
            <div className="navLinkContainer">
                <NavLink className="navLink homeLink" activeClassName="activeHomeLink" exact to="/">
                    Home
                </NavLink>
                <NavLink className="navLink coloursLink" activeClassName="activeColoursLink" exact to="/colours">
                    Colours
                </NavLink>
                <NavLink className="navLink contactLink" activeClassName="activeContactLink" exact to="/contact">
                    Contact
                </NavLink>
                <NavLink className="navLink cartLink" activeClassName="activeCartLink" exact to="/cart">
                    <BiCart />
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
