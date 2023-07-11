import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.svg'
import {FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <footer className="py-8 font-body bg-blue">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-y-4 -mx-4">
                    <div className="lg:w-4/12 w-full px-4">
                        <Link to={'/'} className="inline-block">
                            <img src={Logo} alt="Footer Logo" />
                        </Link>
                        <p className="text-white my-4">From website designing to digital marketing, we cover all the services. You ask and we have it! We combine our experience and aim at delivering tailor-made solutions for all your digital needs.</p>
                        <Link to={'tel:9999999999'} className="flex gap-2 items-center text-white hover:text-orange">
                            <div className="w-10 h-10 border border-white grid place-content-center rounded-full">
                                <FaPhone className="fill-white" />
                            </div>
                            <span>+91-9999999999</span>
                        </Link>
                    </div>
                    <div className="lg:w-4/12 w-full px-4">
                        <div className="flex flex-wrap gap-y-4 mb-4">
                            <div className="md:w-6/12 w-full">
                                <h4 className="md:text-2xl text-xl text-white mb-4 font-semibold">Quick Links</h4>
                                <Link className="text-white hover:text-orange block" to={'/about-us'}>About Us</Link>
                                <Link className="text-white hover:text-orange block" to={'/services'}>Services</Link>
                                <Link className="text-white hover:text-orange block" to={'/contact-us'}>Contact Us</Link>
                            </div>
                            <div className="md:w-6/12 w-full">
                                <h4 className="md:text-2xl text-xl text-white mb-4 font-semibold">Services</h4>
                                <Link className="text-white hover:text-orange block" to={'/services'}>Website</Link>
                                <Link className="text-white hover:text-orange block" to={'/services'}>Digital Marketing</Link>
                                <Link className="text-white hover:text-orange block" to={'/services'}>Designing</Link>
                                <Link className="text-white hover:text-orange block" to={'/services'}>Branding</Link>
                            </div>
                        </div>
                        <Link to={'mailto:xyz@mail.com'} className="flex gap-2 items-center text-white hover:text-orange">
                            <div className="w-10 h-10 border border-white grid place-content-center rounded-full">
                                <FaEnvelope className="fill-white" />
                            </div>
                            <span>xyz@mail.com</span>
                        </Link>
                    </div>
                    <div className="lg:w-4/12 w-full px-4">
                        <h4 className="md:text-2xl text-xl text-white mb-4 font-semibold">Follow us on:</h4>
                        <div className="flex gap-4 text-white">
                            <Link target="_blank" className="w-12 h-12 border border-white grid place-content-center rounded-full hover:bg-orange">
                                <FaFacebookF/>
                            </Link>
                            <Link target="_blank" className="w-12 h-12 border border-white grid place-content-center rounded-full hover:bg-orange">
                                <FaInstagram/>
                            </Link>
                            <Link target="_blank" className="w-12 h-12 border border-white grid place-content-center rounded-full hover:bg-orange">
                                <FaLinkedinIn/>
                            </Link>
                            <Link target="_blank" className="w-12 h-12 border border-white grid place-content-center rounded-full hover:bg-orange">
                                <FaWhatsapp/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="py-3">
            <p className="text-center font-body text-blue">&copy; {new Date().getFullYear()} — Authentic Cave. All Rights Reserved.</p>
        </div>    
    </>
  )
}

export default Footer
