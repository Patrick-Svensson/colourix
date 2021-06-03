import {
    FaPinterestSquare,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerLinkContainer">
                <a href="https://www.pinterest.ca/" target="_blank">
                    <FaPinterestSquare className="footerLink" />
                </a>
                <a href="https://sv-se.facebook.com/" target="_blank">
                    <FaFacebookSquare className="footerLink" />
                </a>
                <a href="https://twitter.com/?lang=sv" target="_blank">
                    <FaTwitterSquare className="footerLink" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <FaInstagramSquare className="footerLink" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutubeSquare className="footerLink" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
