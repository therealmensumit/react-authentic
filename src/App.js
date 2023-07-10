import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './Components/Nav'
import Home from './Components/Home/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./ScrollToTop";



function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
