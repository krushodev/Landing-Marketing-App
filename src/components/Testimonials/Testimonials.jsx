import "./Testimonials.css";
import imgPerson1 from "../../assets/testimonials/person-1.jpg";
import imgPerson2 from "../../assets/testimonials/person-2.jpg";
import imgPerson3 from "../../assets/testimonials/person-3.jpg";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Testimonials = () => {
  const data = [
    {
      name: "Ronda Louis - Online Marketer",
      opinion:
        "Tivo is one of the greatest marketing automation apps out there. I especially love the Reporting Tools module because it gives me such a great amount of information based on little amounts of input gathered in just few weeks of light weight usage. Recommended!",
      img: imgPerson1,
    },
    {
      name: "Marsha Singer - Online Marketer",
      opinion:
        "Tivo is the best marketing automation app for small and medium sized business. It understands the mindset of young entrepreneurs and provides the necessary data for wise marketing decisions. Just give it a try and you will definitely not regret spending your time.",
      img: imgPerson2,
    },
    {
      name: "Jude Thorn - Online Marketer",
      opinion:
        "I started to use Tivo with the free trial about a year ago and never stopped since then. It does all the repeating marketing tasks and allows me to focus on core development activities like new product research and design. I love it and recommend it to everyone.",
      img: imgPerson3,
    },
  ];

  const splideOptions = {
    type: "loop",
    perPage: 1,
    pagination: false,
    arrows: true,
  };

  return (
    <div className="testimonials-container container">
      <Splide options={splideOptions} className="testimonials-carousel">
        {data.map((item, index) => (
          <SplideSlide key={index}>
            <TestimonialCard testimonial={item} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonials;
