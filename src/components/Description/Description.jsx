import "./Description.css";
import TitleSection from "../TitleSection/TitleSection";
import Img from "../../assets/desc/desc-1.png";

const data = [{
    id: 1,
    img: Img,
    title: "List Builder",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
},
{
    id: 2,
    img: Img,
    title: "Campaign Tracker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
},
{
    id: 3,
    img: Img,
    title: "Analytics Tool",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
}];

const Description = () => {
  return (
    <div className="description-container">
        <TitleSection title="Marketing Automation Will Bring More Qualified Leads" section="Description"/>
        <div className="description-content">
            {data.map(item => {
                return(
                    <div key={item.id} className="description-card">
                        <img src={item.img} alt="desc-img" />
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Description;