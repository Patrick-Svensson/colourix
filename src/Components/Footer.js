import { Link } from "react-router-dom";
import { FaPinterestSquare, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerLinkContainer">
                <Link>
                    <FaPinterestSquare className="footerLink" />
                </Link>
                <Link>
                    <FaFacebookSquare className="footerLink" />
                </Link>
                <Link>
                    <FaTwitterSquare className="footerLink" />
                </Link>
                <Link>
                    <FaInstagramSquare className="footerLink" />
                </Link>
                <Link>
                    <FaYoutubeSquare className="footerLink" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
