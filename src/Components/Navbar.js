import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { ReactComponent as ReactLogo } from "./ColourixLogo.svg";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="navbar">
            <div className="logoContainer">
                <NavLink className="logoLink" exact to="/">
                    <ReactLogo className="logo" />
                </NavLink>
            </div>
            <div className={sidebar ? "navLinkContainer active" : "navLinkContainer"}>
                <NavLink className="navLink homeLink" activeClassName="activeHomeLink" exact to="/">
                    Home
                </NavLink>
                <NavLink className="navLink coloursLink" activeClassName="activeColoursLink" exact to="/colours">
                    Colours
                </NavLink>
                <NavLink className="navLink contactLink" activeClassName="activeContactLink" exact to="/contact">
                    Contact
                </NavLink>
            </div>
            <NavLink className="navLink cartLink" activeClassName="activeCartLink" exact to="/cart">
                <BiCart className="cartIcon" />
            </NavLink>
            <div className="menuToggleContainer">
                <div className={sidebar ? "menu__toggle active" : "menu__toggle"} onClick={showSidebar}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
