import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { ReactComponent as ReactLogo } from "./ColourixLogo.svg";
import "./Navbar.css";

const Navbar = (props) => {
    const { countCartItems } = props;
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <nav className="navbar">
            <div className="logoContainer">
                <NavLink className="logoLink" exact to="/">
                    <ReactLogo className="logo" />
                </NavLink>
            </div>
            <div
                className={
                    sidebar ? "navLinkContainer active" : "navLinkContainer"
                }
            >
                <NavLink
                    className="navLink homeLink"
                    activeClassName="activeHomeLink"
                    exact
                    to="/"
                    onClick={showSidebar}
                >
                    Home
                </NavLink>
                <NavLink
                    className="navLink coloursLink"
                    activeClassName="activeColoursLink"
                    exact
                    to="/colours"
                    onClick={showSidebar}
                >
                    Colours
                </NavLink>
                <NavLink
                    className="navLink contactLink"
                    activeClassName="activeContactLink"
                    exact
                    to="/contact"
                    onClick={showSidebar}
                >
                    Contact
                </NavLink>
            </div>
            <NavLink
                className="navLink cartLink"
                activeClassName="activeCartLink"
                exact
                to="/cart"
            >
                <BiCart className="cartIcon" />{" "}
                {countCartItems ? (
                    <button className="cartIcon-total">{countCartItems}</button>
                ) : (
                    ""
                )}
            </NavLink>
            <div className="menuToggleContainer">
                <div
                    className={sidebar ? "menu__toggle active" : "menu__toggle"}
                    onClick={showSidebar}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
