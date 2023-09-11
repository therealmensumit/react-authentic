import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    window.scrollY > 300 ? setShowButton(true) : setShowButton(false)
  };
  window.addEventListener('scroll', handleScroll);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {
        showButton &&
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 w-10 h-10 bg-gray-500 grid place-content-center rounded-full shadow-sm hover:shadow-white hover:bg-blue transition-300 ease-in-out"
        >
          <FaChevronUp className="fill-white" />
        </button>
      }
    </>
  );
};

export default ScrollTopButton;
