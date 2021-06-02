import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <>
            <Link className="bannerLink" to="/colours">
                <div className="banner">
                    <div className="bannerContent">
                        <h3 className="bannerHeading">
                            24h sale &#45; <span>only today</span>
                        </h3>
                        <p className="bannerText">
                            Get the dashing Bougainvillea for only<span className="bannerNewPrice"> &nbsp;€ 8.85&nbsp; </span>
                            <span className="bannerPrice">€ 21.95</span>
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Banner;
