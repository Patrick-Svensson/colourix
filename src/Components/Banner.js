import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <>
            <Link className="bannerLink" to="/colours">
                <div className="banner"></div>
            </Link>
        </>
    );
};

export default Banner;
