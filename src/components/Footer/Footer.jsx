import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-info-container">
                <div className="footer-info-item">
                    <h6>About Tivo</h6>
                    <div className="footer-info-content">
                        <p>We're passionate about designing and developing one of the best marketing apps in the market</p>
                    </div>
                </div>
                <div className="footer-info-item">
                    <h6>Important Links</h6>
                    <div className="footer-info-content">
                        <ul>
                            <li>
                                Our business partner <a href="#">startupguide.com</a>
                            </li>
                            <li>
                                Read our <a href="#">Terms & Conditions</a>, <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info-item">
                    <h6>Contact</h6>
                    <div className="footer-info-content">
                        <ul>
                            <li>22 Innovative, San Francisco, CA 94043, US</li>
                            <li>
                                <a href="#">contact@tivo.com</a>, <a href="#">www.tivo.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <p>Copyright © 2020 Template by Inovatik</p>
        </footer>
    );
};

export default Footer;
