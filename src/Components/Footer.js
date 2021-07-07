import { FaPinterestSquare, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerLinkContainer">
                <a href="https://www.pinterest.ca/" target="_blank" rel="noopener noreferrer">
                    <FaPinterestSquare className="footerLink" />
                </a>
                <a href="https://sv-se.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="footerLink" />
                </a>
                <a href="https://twitter.com/?lang=sv" target="_blank" rel="noopener noreferrer">
                    <FaTwitterSquare className="footerLink" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare className="footerLink" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <FaYoutubeSquare className="footerLink" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
