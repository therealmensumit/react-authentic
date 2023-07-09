import React, {useState} from "react"
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.svg'
import {FaBars} from "react-icons/fa6";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="bg-darkBlue font-body sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap px-4 py-2 items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-orange">
          <img src={Logo} alt="Logo" className="md:w-24 w-20" />
        </Link>
        <button onClick={toggleClass} className="ml-auto p-2 lg:hidden">
          <FaBars className="fill-white" />
        </button>
        <nav className={isActive ? 'flex flex-col absolute top-full right-0 p-4 bg-darkBlue' : 'ml-auto hidden lg:flex lg:gap-4 flex-wrap items-center text-base justify-center'}>
          <Link to={'/'} className="capitalize py-4 text-white hover:text-orange">home</Link>
          <Link to={'/about-us'} className="capitalize py-4 text-white hover:text-orange">about us</Link>
          <Link className="capitalize py-4 text-white hover:text-orange group">
            <span>services </span>
            <svg className="inline-block group-hover:fill-orange" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#fff">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
          </Link>
          <Link to={'/contact-us'} className="capitalize py-4 text-white hover:text-orange">contact us</Link>
          <Link className="p-2 border-2 border-white text-white hover:border-orange hover:bg-orange">Free Consultation</Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
