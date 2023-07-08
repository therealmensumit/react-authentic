import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.svg'

const Footer = () => {
  return (
    <>
        <footer className="py-8 font-body bg-darkBlue">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-y-4 -mx-4">
                    <div className="lg:w-4/12 w-full px-4">
                        <Link to={'/'} className="inline-block">
                            <img src={Logo} alt="Footer Logo" />
                        </Link>
                        <p className="text-white my-4">From website designing to digital marketing, we cover all the services. You ask and we have it! We combine our experience and aim at delivering tailor-made solutions for all your digital needs.</p>
                        <Link to={'tel:7065157902'} className="text-white hover:text-orange">+91-7065157902</Link>
                    </div>
                    <div className="lg:w-4/12 w-full px-4">
                        <div className="flex flex-wrap gap-y-4">
                            <div className="md:w-6/12 w-full">
                                <h4 className="text-2xl text-white mb-4 font-semibold">Quick Links</h4>
                                <Link className="text-white hover:text-orange block" to={'/about-us'}>About Us</Link>
                                <Link className="text-white hover:text-orange block" to={'/'}>Services</Link>
                                <Link className="text-white hover:text-orange block" to={'/contact-us'}>Contact Us</Link>
                            </div>
                            <div className="md:w-6/12 w-full">
                                <h4 className="text-2xl text-white mb-4 font-semibold">Services</h4>
                                <Link className="text-white hover:text-orange block" to={'/'}>Website</Link>
                                <Link className="text-white hover:text-orange block" to={'/'}>Digital Marketing</Link>
                                <Link className="text-white hover:text-orange block" to={'/'}>Designing</Link>
                                <Link className="text-white hover:text-orange block" to={'/'}>Branding</Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full px-4">
                        <h4 className="text-2xl text-white mb-4 font-semibold">Follow us on:</h4>
                    </div>
                </div>
            </div>
        </footer>
        <div className="py-3">
            <p className="text-center font-body text-darkBlue">&copy; {new Date().getFullYear()} — Authentic Cave. All Rights Reserved.</p>
        </div>    
    </>
  )
}

export default Footer
