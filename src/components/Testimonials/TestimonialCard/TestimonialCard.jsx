import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <img src={testimonial.img} alt={testimonial.name} />
      <div className="testimonial-card-content">
        <p>{testimonial.opinion}</p>
        <h6>{testimonial.name}</h6>
      </div>
    </div>
  );
};

export default TestimonialCard;
