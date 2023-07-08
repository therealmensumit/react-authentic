import React from "react"
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.svg'

const Nav = () => {
  return (
    <header className="bg-darkBlue font-body">
      <div className="container mx-auto flex flex-wrap px-4 py-2 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-orange mb-4 md:mb-0">
          <img src={Logo} alt="Logo" className="w-24" />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to={'/'} className="mr-5 capitalize py-4 text-white hover:text-orange">home</Link>
          <Link to={'/about-us'} className="mr-5 capitalize py-4 text-white hover:text-orange">about us</Link>
          <a href="#" className="mr-5 capitalize py-4 text-white hover:text-orange group">
            <span>services </span>
            <svg className="inline-block group-hover:fill-orange" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#fff">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
          </a>
          <Link to={'/contact-us'} className="mr-5 capitalize py-4 text-white hover:text-orange">contact us</Link>
          <a href="#" className="p-2 border-2 border-white text-white hover:border-orange hover:bg-orange">Free Consultation</a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
