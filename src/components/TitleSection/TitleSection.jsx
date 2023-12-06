import "./TitleSection.css";

const TitleSection = ({ section, title }) => {
  return (
    <div className="section">
      <p>{section}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default TitleSection;
