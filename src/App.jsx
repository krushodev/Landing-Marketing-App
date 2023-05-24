import Description from "./components/Description/Description"
import Detail from "./components/Detail/Detail"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Pricing from "./components/Pricing/Pricing"
import TitleSection from "./components/TitleSection/TitleSection"
import Header from "./components/header/Header"

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Description/>
      <Features/>
      <Detail/>
      <Pricing/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
