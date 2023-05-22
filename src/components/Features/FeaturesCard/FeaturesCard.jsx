import "./FeaturesCard.css";

const FeaturesCard = ({content}) => {
  return (
    <div className="features-card">
        <img src={content.img} alt={content.id} />
        <div className="features-card-content">
            <h5>{content.title}</h5>
            <p>{content.desc}</p>
            <ul>
                {content.feat.map(item => <li><span>{item}</span></li>)}
            </ul>
            <button className="btn">LightBox</button>
        </div>
    </div>
  )
}

export default FeaturesCard;
