import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerImg from "../assets/img/banner-img.png";


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
      <section className="before:bg-darkBlue before:absolute before:top-0 before:right-0 before:w-full before:h-full before:rounded-bl-[300px] before:-z-10 z-0 relative py-8 font-body">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center gap-y-4">
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

      <div className="container mx-auto px-4 py-14"></div>
    </>
  );
};

export default Home;
