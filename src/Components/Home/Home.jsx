import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerImg from "../../assets/img/banner-img.png";
import contactImg from "../../assets/img/contact-us.svg";
import Icon1 from '../../assets/img/DetailConsultation.svg'
import Icon2 from '../../assets/img/TimeOrientedResults.svg'
import Icon3 from '../../assets/img/RegularFollowups.svg'
import Website from '../../assets/img/Website.svg'
import DigitalMarketing from '../../assets/img/DigitalMarketing.svg'
import Designing from '../../assets/img/Designing.svg'
import Branding from '../../assets/img/Branding.svg'

import Card from "./Card";
import Card2 from "./Card2";



const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 1,
        x: 0,
      },
      {
        opacity: 0,
        x: -500,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 30%",
          end: "100% 10%",
          stagger: 1,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="font-body">
      {/* banner section */}
      <section className="before:bg-blue before:absolute before:top-0 before:right-0 before:w-full before:h-full before:-z-10 lg:before:block before:hidden bg-blue lg:bg-transparent z-0 relative py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center gap-y-8">
            <div className="lg:w-6/12 w-full px-4 lg:text-start text-center">
              <h1
                // ref={boxRef}
                className="mb-4 font-head text-white md:text-6xl text-4xl md:leading-[72px] font-bold"
              >
                Take your First{" "}
                <span className="text-orange">Digital Step</span> With Us!
              </h1>
              <p
                className="mb-4 text-white"
              >
                We believe in team power and are here to redesign your online
                presence. With our 360° Digital Marketing Services, experience
                your business growth like never before!
              </p>
              <Link
                to={'/about-us'}
                className="p-2 border-2 border-white text-white inline-block hover:border-orange hover:bg-orange"
              >
                About Company
              </Link>
            </div>
            <div className="lg:w-6/12 w-full px-4">
              <img src={BannerImg} alt="Banner" className="w-9/12 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* card section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="lg:w-10/12 w-full mx-auto text-center mb-8">
            <h2 className="text-blue font-head lg:text-5xl text-3xl font-bold mb-4">Why Should You Choose <span className="text-orange">Authentic Cave</span>?</h2>
            <p>With a customer-first approach, our team is pledged to offer and execute projects like no other! Here are the key promises that we swear by that have helped us retain our precious clients:</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <Card img={Icon1} alt={'icon 1'} title={'DETAILED CONSULTATION'} para={'We understand that every individual and business needs are different and hence, we offer customized solutions after keen observation and in-depth discussion with our clients.'} />
            <Card img={Icon2} alt={'icon 2'} title={'TIME ORIENTED RESULTS'} para={'We acknowledge the fact that every second counts! Our unit makes sure that you get timely results for every buck you spend..'} />
            <Card img={Icon3} alt={'icon 3'} title={'REGULAR FOLLOWUPS'} para={'We believe in keeping our clients updated even after sales! With data-driven insights and regular follow-ups, we make it certain to keep them satisfied.'} />
          </div>
        </div>
      </section>

      {/* card2 section */}
      <section className="bg-blue py-14">
        <div className="container mx-auto px-4">
        <div className="lg:w-10/12 w-full mx-auto text-center mb-8 text-white">
            <h2 className="font-head lg:text-5xl text-3xl font-bold mb-4">Discover everything <span className="text-orange">we can offer</span> you</h2>
            <p>We are One Stop Shop for all your digital needs! From website to digital marketing, we introduce relevant and significant changes that allow you to express your brand authentically!</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Card2 img={Website} alt={'Website'} title={'WEBSITE'} para={'We create a website that reflects you and your business! From domain to hosting, let us handle everything for'} />
            <Card2 img={DigitalMarketing} alt={'Digital Marketing'} title={'DIGITAL MARKETING'} para={'We provide digital marketing services that yield results around the clock! Our Digital Marketing services cover'} />
            <Card2 img={Designing} alt={'Designing'} title={'DESIGNING'} para={'Wish to have designs that leave everyone spellbound? Say no more! Our talented team of designers are here to curate'} />
            <Card2 img={Branding} alt={'Branding'} title={'BRANDING'} para={'Sell off your brand like never before! Become a label and let your brand speak for you while you work on the core areas.'} />
          </div>
        </div>
      </section>

      {/* contact section */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 col-span-3">
            <img src={contactImg} alt="Contact" className="-scale-x-100" />
          </div>
          <div className="md:col-span-2 col-span-3">
            <div className="md:p-8 p-4 bg-white rounded-xl">
              <h3 className="text-blue md:text-4xl text-3xl font-bold mb-4">Connect With Us</h3>
              <form className="grid grid-cols-2 gap-8">
                <div className="md:col-span-1 col-span-2">
                  <input
                    className="w-full bg-white border-b-[1px] border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                    type="text"
                    placeholder="Name*"
                  />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <input
                    className="w-full bg-white border-b-[1px] border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                    type="email"
                    placeholder="Email*"
                  />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <input
                    className="w-full bg-white border-b-[1px] border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                    type="tel"
                    placeholder="Phone*"
                  />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <input
                    className="w-full bg-white border-b-[1px] border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                    type="text"
                    placeholder="Company"
                  />
                </div>
                <div className=" col-span-full">
                  <textarea
                    className="w-full bg-white border-b-[1px] border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                    rows="8"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <button className="px-16 py-3 font-bold bg-blue text-white hover:bg-orange">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center lg:w-9/12 w-full mx-auto pt-8">
          <h2 className="text-blue md:text-6xl text-3xl font-extrabold font-head relative after:absolute after:w-32 after:h-[2px] after:bg-orange after:bottom-0 after:right-2/4 after:translate-x-2/4 pb-2 mb-4">Connect with our Experts?</h2>
          <p className="font-head text-blue text-xl font-bold mb-6">We are just a Call away</p>
          <Link className="uppercase py-2 px-6 border-2 border-blue text-white bg-blue inline-block hover:border-orange hover:bg-orange">call now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
