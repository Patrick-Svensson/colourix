import { FaPinterestSquare, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerLinkContainer">
                <a href="https://www.pinterest.ca/">
                    <FaPinterestSquare className="footerLink" />
                </a>
                <a href="https://sv-se.facebook.com/">
                    <FaFacebookSquare className="footerLink" />
                </a>
                <a href="https://twitter.com/?lang=sv">
                    <FaTwitterSquare className="footerLink" />
                </a>
                <a href="https://www.instagram.com/">
                    <FaInstagramSquare className="footerLink" />
                </a>
                <a href="https://www.youtube.com/">
                    <FaYoutubeSquare className="footerLink" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
