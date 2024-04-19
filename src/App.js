import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import UpworkSection from "./components/UpworkSection";
import Offers from "./components/Offers";
import Design from "./components/Design";
import Portfolio from "./components/Portfolio";
import Quotation from "./components/Quotation";
import Whychoose from "./components/Whychoose";
import Review from "./components/Review";
import Blog from "./components/Blog";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="x-hidden">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <UpworkSection></UpworkSection>
      <Offers></Offers>
      <Design></Design>
      <Portfolio></Portfolio>
      <Quotation></Quotation>
      <Whychoose></Whychoose>
      <Review></Review>
      <Blog></Blog>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
