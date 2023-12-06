import "./Footer.css";
import { FaMapMarkerAlt, FaGlobe, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <svg className="footer-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#415681"
          fillOpacity="1"
          d="M0,224L48,240C96,256,192,288,288,277.3C384,267,480,213,576,197.3C672,181,768,203,864,218.7C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer>
        <div className="footer-info-container">
          <div className="footer-info-item">
            <h6>About</h6>
            <div className="footer-info-content">
              <p>We're passionate about designing and developing one of the best marketing apps in the market</p>
            </div>
          </div>
          <div className="footer-info-item">
            <h6>Important Links</h6>
            <div className="footer-info-content">
              <ul className="important-links">
                <li>
                  Our business partner <a href="#home">startupguide.com</a>
                </li>
                <li>
                  Read our <a href="#home">Terms & Conditions</a>, <a href="#home">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-info-item">
            <h6>Contact</h6>
            <div className="footer-info-content">
              <ul className="contact">
                <li>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  22 Innovative, San Francisco, CA 94043, US
                </li>
                <li>
                  <a href="#home">
                    <span>
                      <FaEnvelope />
                    </span>
                    contact@mail.com
                  </a>
                  ,{" "}
                  <a href="#home">
                    <span>
                      <FaGlobe />
                    </span>
                    www.app.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p>Copyright © 2023</p>
      </footer>
    </>
  );
};

export default Footer;
