import React, {useState, useEffect} from "react"
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/img/logo.svg'
import {FaBars, FaTimes, FaChevronDown} from "react-icons/fa";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(false); // Close the dropdown menu on route change
  }, [location]);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="bg-blue font-body sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap px-4 py-2 items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-orange">
          <img src={Logo} alt="Logo" className="md:w-24 w-20" />
        </Link>
        <button onClick={toggleClass} className="ml-auto p-2 lg:hidden">
          {isActive ? <FaTimes className="fill-white" /> : <FaBars className="fill-white" />}
        </button>
        <nav className={isActive ? 'flex flex-col items-center absolute top-full right-0 p-4 bg-blue w-full h-screen text-center' : 'ml-auto hidden lg:flex lg:gap-4 flex-wrap items-center text-base justify-center'}>
          <Link to={'/'} className="capitalize inline-block py-4 text-white hover:text-orange">home</Link>
          <Link to={'/about-us'} className="capitalize inline-block py-4 text-white hover:text-orange">about us</Link>
          <Link to={'/services'} className="capitalize inline-block py-4 text-white hover:text-orange group">
            <span>services </span>
            <FaChevronDown className="inline-block group-hover:fill-orange w-3 h-3" />
          </Link>
          <Link to={'/contact-us'} className="capitalize inline-block py-4 text-white hover:text-orange">contact us</Link>
          <Link to={'/free-consultation'} className="p-2 border-2 inline-block border-white text-white hover:border-orange hover:bg-orange">Free Consultation</Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
