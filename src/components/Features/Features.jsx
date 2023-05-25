import "./Features.css";
import { useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import FeaturesCard from "./FeaturesCard/FeaturesCard";
import Feat1 from "../../assets/features/features-1.png";
import Feat2 from "../../assets/features/features-2.png";
import Feat3 from "../../assets/features/features-3.png";
import { FaEnvelopeOpenText, FaListUl, FaChartBar } from "react-icons/fa";

const Features = () => {
  const [content, setContent] = useState(null);
  const [active, setActive] = useState("listBuilder");

  const data = [
    {
      id: "listBuilder",
      name: "List Builder",
      img: Feat1,
      title: "List Building Is Easier Than Ever",
      desc: "It's very easy to start using Tivo. You just need to fill out and submit the Sign Up Form and you will receive access to the app and all of its features in no more than 24h.",
      feat: ["Create and embed on websites newsletter sign up forms", "Manage forms and landing pages for your services", "Add and remove subscribers using the control panel"],
      icon: FaListUl,
    },
    {
      id: "campaigns",
      name: "Campaigns",
      img: Feat2,
      title: "Campaigns Monitoring Tools",
      desc: "Campaigns monitoring is a feature we've developed since the beginning because it's at the core of Tivo and basically to any marketing activity focused on results.",
      feat: ["Easily plan campaigns and schedule their starting date", "Start campaigns and follow their evolution closely", "Evaluate campaign results and optimize future actions"],
      icon: FaEnvelopeOpenText,
    },
    {
      id: "analytics",
      name: "Analytics",
      img: Feat3,
      title: "Analytics Control Panel",
      desc: "Analytics control panel is important for every marketing team so it's beed implemented from the begging and designed to produce reports based on very little input information.",
      feat: ["If you set it up correctly you will get acces to great intel", "Easy to integrate in your websites and landing pages", "The generated reports are important for your strategy"],
      icon: FaChartBar,
    },
    ,
  ];

  const handleClick = (id) => {
    setActive(id);
    const newContent = data.find((item) => id === item.id);
    setContent(newContent);
  };

  return (
    <div className="features-container container">
      <TitleSection title="Marketing Automation" section="Features" />
      <p>Take your business strategy to the next level and automatize your marketing tasks to save time for product development. Tivo can provide results in less than 2 weeks</p>
      <div className="features-content">
        <ul>
          {data.map((item) => (
            <li key={item.id} onClick={() => handleClick(item.id)} className={active === item.id ? "active" : ""}>
              <p>
                <span>
                  <item.icon />
                </span>
                <span>{item.name}</span>
              </p>
            </li>
          ))}
        </ul>
        <FeaturesCard content={content ? content : data[0]} />
      </div>
    </div>
  );
};

export default Features;
