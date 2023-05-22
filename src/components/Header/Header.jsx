import "./Header.css";
import Img from "../../assets/header/header-app.png"

const Header = () => {
  return (
    <>
        <div className="header-container">
            <div className="header-content">
                <h2>This is the title of the page</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Sign Up</button>
            </div>
            <img src={Img} alt="heading" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#8e4dcb" fillOpacity="1" d="M0,64L34.3,96C68.6,128,137,192,206,181.3C274.3,171,343,85,411,80C480,75,549,149,617,160C685.7,171,754,117,823,128C891.4,139,960,213,1029,218.7C1097.1,224,1166,160,1234,122.7C1302.9,85,1371,75,1406,69.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
    </>
  );
}

export default Header