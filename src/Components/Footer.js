import { Link } from "react-router-dom";
import { FaPinterestSquare, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="mediaLinkContainer">
                <Link>
                    <FaPinterestSquare />
                </Link>
                <Link>
                    <FaFacebookSquare />
                </Link>
                <Link>
                    <FaTwitterSquare />
                </Link>
                <Link>
                    <FaInstagramSquare />
                </Link>
                <Link>
                    <FaYoutubeSquare />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
