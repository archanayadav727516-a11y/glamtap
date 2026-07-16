import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Services from "./Pages/Services/Services";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import CartPopup from "./components/CartPopup/CartPopup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
<CartPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:category" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;