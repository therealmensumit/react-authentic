import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './Components/Nav'
import Home from './Components/Home/Home';
import About from "./Components/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact";
import FreeConsultation from "./Components/FreeConsultation";
import Footer from "./Components/Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollTopButton from "./Components/ScrollTopButton";

import Demo from "./Components/Demo";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer />
        <ScrollTopButton />
      </BrowserRouter>
    </>
  );
}

export default App;
