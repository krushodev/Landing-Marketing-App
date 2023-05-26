import "./Pricing.css";
import TitleSection from "../TitleSection/TitleSection";
import PricingCard from "./PricingCard/PricingCard";

const Pricing = () => {
  const data = [
    {
      plan: "Basic",
      price: "Free",
      use: "14 days trial",
      features: [
        { desc: "Email Marketing Module", status: true },
        { desc: "User Control Management", status: true },
        { desc: "List Building And Cleaning", status: false },
        { desc: "Collected Data Reports", status: false },
        { desc: "Planning And Evaluation", status: false },
      ],
    },
    {
      plan: "Advanced",
      price: "29.99",
      use: "monthly",
      features: [
        { desc: "Email Marketing Module", status: true },
        { desc: "User Control Management", status: true },
        { desc: "List Building And Cleaning", status: true },
        { desc: "Collected Data Reports", status: false },
        { desc: "Planning And Evaluation", status: false },
      ],
    },
    {
      plan: "Complete",
      price: "39.99",
      use: "monthly",
      features: [
        { desc: "Email Marketing Module", status: true },
        { desc: "User Control Management", status: true },
        { desc: "List Building And Cleaning", status: true },
        { desc: "Collected Data Reports", status: true },
        { desc: "Planning And Evaluation", status: true },
      ],
    },
  ];

  return (
    <div className="pricing-container container">
      <TitleSection title="Pricing Options Table" section="Pricing" />
      <div className="pricing-cards">
        {data.map((item, index) => (
          <PricingCard key={index} content={item} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
