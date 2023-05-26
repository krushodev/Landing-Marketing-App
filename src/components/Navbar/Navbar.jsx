import "./Navbar.css";
import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    const body = document.body;
    body.style.overflowY = !isOpen ? "hidden" : "scroll";
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <h1>Logo</h1>
          <div className="nav-links">
            <ul className="nav-items">
              <li className="nav-item">
                <a href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a href="#details">Details</a>
              </li>
              <li className="nav-item">
                <a href="#pricing">Princing</a>
              </li>
            </ul>
            <a className="nav-login">Log In</a>
          </div>
          <Hamburger toggled={isOpen} toggle={handleToggle} />
        </div>
      </nav>
      {isOpen && <MobileMenu />}
    </>
  );
};

export default Navbar;
