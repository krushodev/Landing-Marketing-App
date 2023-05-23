import "./PricingCard.css";

const PricingCard = ({ content }) => {
  return (
    <div className="pricing-card">
      <span className="pricing-card-plan">{content.plan}</span>
      <h6>
        <span>$</span>
        {content.price}
      </h6>
      <span className="pricing-card-use">{content.use}</span>
      <hr></hr>
      <div className="pricing-feat-container">
        {content.features.map((item, index) => <p key={index}><span>{item.status ? "<" : "x"}</span>{item.desc}</p>)}
      </div>
      <button className="btn">Sign Up</button>
    </div>
  );
};

export default PricingCard;
