import "./Social.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP, FaInstagram } from "react-icons/fa";

const Social = () => {
  const data = [FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP, FaInstagram];
  return (
    <div className="social-container">
      {data.map((Item, index) => (
        <span className="social-item" key={index}>
          <Item />
        </span>
      ))}
    </div>
  );
};

export default Social;
