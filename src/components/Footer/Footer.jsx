import "./Footer.css";

const Footer = () => {
  return (
    <>
      <svg className="footer-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#cba1f2"
          fillOpacity="1"
          d="M0,32L40,53.3C80,75,160,117,240,128C320,139,400,117,480,96C560,75,640,53,720,85.3C800,117,880,203,960,202.7C1040,203,1120,117,1200,74.7C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
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
    </>
  );
};

export default Footer;
