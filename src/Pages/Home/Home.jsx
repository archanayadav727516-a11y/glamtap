import Hero from "./components/Hero";
import ServiceCarousel from "./components/ServiceCarousel";
import Categories from "./components/Categories";
// import FeaturedServices from "./pages/Home/components/FeaturedServices";
import Offers from "./components/Offers";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Claimservices from "./components/Claimservices";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Download from "./components/Download";
import Professional from "./components/Professional";



function Home() {
  return (
    <>
    <Navbar/>
      <Hero />
      <ServiceCarousel />
      
      <Claimservices/>
      <Categories />
      
      <Offers />
      
      <Testimonials />
      <WhyChooseUs />
      <Professional/>
      <Download/>
      <Footer/>
    </>
  );
}

export default Home;