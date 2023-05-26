import "./FeaturesCard.css";
import { motion } from "framer-motion";

const FeaturesCard = ({ content }) => {
  return (
    <motion.div key={`${content.id}-card`} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}>
      <div className="features-card">
        <img src={content.img} alt={content.id} />
        <div className="features-card-content">
          <h5>{content.title}</h5>
          <p>{content.desc}</p>
          <ul>
            {content.feat.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="btn">LightBox</button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;
