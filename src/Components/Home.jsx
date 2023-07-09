import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerImg from "../assets/img/banner-img.png";
import contactImg from "../assets/img/contact-us.svg";


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
    <>
      <section className="before:bg-darkBlue before:absolute before:top-0 before:right-0 before:w-full before:h-full before:rounded-bl-[300px] before:-z-10 lg:before:block before:hidden bg-darkBlue lg:bg-transparent z-0 relative py-8 font-body">
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

      <div className="container mx-auto px-4 py-14 font-body">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 col-span-3">
            <img src={contactImg} alt="Contact" className="-scale-x-100" />
          </div>
          <div className="md:col-span-2 col-span-3">
            <div className="md:p-8 p-4 bg-white rounded-xl">
              <h3 className="text-darkBlue md:text-4xl text-3xl font-bold mb-4">Connect With Us</h3>
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
                  <button className="px-16 py-3 font-bold rounded bg-darkBlue text-white hover:bg-orange">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center lg:w-9/12 w-full mx-auto pt-8">
          <h2 className="text-darkBlue md:text-6xl text-3xl font-extrabold font-head relative after:absolute after:w-32 after:h-[2px] after:bg-orange after:bottom-0 after:right-2/4 after:translate-x-2/4 pb-2 mb-4">Connect with our Experts?</h2>
          <p className="font-head text-darkBlue text-xl font-bold mb-6">We are just a Call away</p>
          <Link className="uppercase py-2 px-6 border-2 border-darkBlue text-white bg-darkBlue inline-block hover:border-orange hover:bg-orange">call now</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
