import "./Description.css";
import TitleSection from "../TitleSection/TitleSection";
import descImg1 from "../../assets/desc/desc-1.png";
import descImg2 from "../../assets/desc/desc-2.png";
import descImg3 from "../../assets/desc/desc-3.png";

const data = [
  {
    id: 1,
    img: descImg1,
    title: "List Builder",
    desc: "It's very easy to start creating email lists for your marketing actions. Just create your Tivo account",
  },
  {
    id: 2,
    img: descImg2,
    title: "Campaign Tracker",
    desc: "Campaigns is a feature we've developed since the beginning because it's at the core of Tivo's functionalities",
  },
  {
    id: 3,
    img: descImg3,
    title: "Analytics Tool",
    desc: "Tivo collects customer data in order to help you analyse different situations and take required action",
  },
];

const Description = () => {
  return (
    <div className="description-container container">
      <TitleSection title="Marketing Automation Will Bring More Qualified Leads" section="Description" />
      <div className="description-content">
        {data.map((item) => {
          return (
            <div key={item.id} className="description-card">
              <img src={item.img} alt="desc-img" />
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
