import "./Customers.css";
import customerImg1 from "../../assets/customers/customer-1.png";
import customerImg2 from "../../assets/customers/customer-2.png";
import customerImg3 from "../../assets/customers/customer-3.png";
import customerImg4 from "../../assets/customers/customer-4.png";
import customerImg5 from "../../assets/customers/customer-5.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Customers = () => {
  const data = [customerImg1, customerImg2, customerImg3, customerImg4, customerImg5];

  const splideOptions = {
    type: "loop",
    perPage: 5,
    pagination: false,
    arrows: false,
    autoplay: true,
    perMove: 1,
    breakpoints: {
      1024: {
        perPage: 4,
      },
      900: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      500: {
        perPage: 1,
      },
    },
  };

  return (
    <div className="customers-container">
      <Splide options={splideOptions} className="customers-carousel">
        {data.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <img src={item} alt={`customer-${index + 1}`} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Customers;
