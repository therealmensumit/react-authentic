import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const [headerClass, setHeaderClass] = useState(false);
  const handleScrollHeader = () => {
    window.scrollY > 300 ? setHeaderClass(true) : setHeaderClass(false);
  };
  window.addEventListener("scroll", handleScrollHeader);

  useEffect(() => {
    setIsActive(false); // Close the dropdown menu on route change
  }, [location]);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={`bg-blue w-full font-body z-10 transition-all ease-linear duration-300 ${
        headerClass ? "fixed top-0" : "-top-32"
      }`}
    >
      <div className="container mx-auto flex flex-wrap px-4 py-2 items-center">
        <NavLink
          to={"/"}
          className="flex title-font font-medium items-center text-orange"
        >
          <img src={Logo} alt="Logo" className="md:w-24 w-20" />
        </NavLink>
        <button onClick={toggleClass} className="ml-auto p-2 lg:hidden">
          {isActive ? (
            <FaTimes className="fill-white" />
          ) : (
            <FaBars className="fill-white" />
          )}
        </button>
        <nav
          className={
            isActive
              ? "flex flex-col items-center absolute top-[80px] z-10 right-0 p-4 bg-blue w-full h-screen text-center"
              : "ml-auto hidden lg:flex lg:gap-4 flex-wrap items-center text-base justify-center"
          }
        >
          <NavLink
            to={"/"}
            className="capitalize inline-block py-4 text-white hover:text-orange"
          >
            home
          </NavLink>
          <NavLink
            to={"/about-us"}
            className="capitalize inline-block py-4 text-white hover:text-orange"
          >
            about us
          </NavLink>
          <NavLink
            to={"/services"}
            className="capitalize inline-block py-4 text-white hover:text-orange group"
          >
            <span>services </span>
            <FaChevronDown className="inline-block group-hover:fill-orange w-3 h-3" />
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="capitalize inline-block py-4 text-white hover:text-orange"
          >
            contact us
          </NavLink>
          <NavLink
            to={"/free-consultation"}
            className="p-2 border-2 inline-block border-white text-white hover:border-orange hover:bg-orange"
          >
            Free Consultation
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
