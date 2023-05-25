import Description from "../components/Description/Description";
import Detail from "../components/Detail/Detail";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Navbar from "../components/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";
import Header from "../components/Header/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import Customers from "../components/Customers/Customers";
import Social from "../components/Social/Social";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Customers />
      <Description />
      <Features />
      <Detail />
      <Pricing />
      <Testimonials />
      <Form />
      <Social/>
      <Footer />
    </>
  );
};

export default Home;
