import Hero from "./components/Hero";
import ServiceCarousel from "./components/ServiceCarousel";
import Categories from "./components/Categories";
// import FeaturedServices from "./pages/Home/components/FeaturedServices";
import Offers from "./components/Offers";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Claimservices from "./components/Claimservices";
import Download from "./components/Download";
import Professional from "./components/Professional";



function Home() {
  return (
    <>
   <Hero/>
    <ServiceCarousel/>
    <Categories/>
    <Offers/>
    <WhyChooseUs/>
    <Testimonials/>
    <Claimservices/>
    <Download/>
    <Professional/>
    </>
  );
}

export default Home;