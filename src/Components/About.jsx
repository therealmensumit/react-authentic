import React from "react";
import { Link } from "react-router-dom";
import Image from '../assets/img/web-design-concepts.png'

const About = () => {
  return (
    <div className="font-body">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center gap-y-4">
            <div className="lg:w-6/12 w-full px-4">
              <img src={Image} alt="" />
            </div>
            <div className="lg:w-6/12 w-full px-4">
              <p className="text-darkBlue text-xl">
                We at <strong>Authentic Cave</strong>, are a team of motivated and efficient
                co-workers who work with the client-first approach. We aim to
                build and deliver <strong>web-based solutions</strong> with a comprehensive
                observation and discussion for all your <strong>digital marketing</strong> needs
                and stress highly on <strong>results</strong> that are specially tailor-made. We
                understand that every business and client is different and hence
                impart <strong>client-dedicated services</strong> and are committed to working
                nationally and internationally too!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#eee]">
        <div className="container mx-auto px-4 text-center">
          <div className="lg:w-10/12 w-full mx-auto">
            <p className="text-lg font-medium mb-6">We are determined to leave no query unanswered! Fill in the details in the given form and our team will assist you as soon as possible.</p>
            <Link className="py-2 px-6 border-2 border-darkBlue text-white bg-darkBlue inline-block hover:border-orange hover:bg-orange">BOOK A FREE CONSULTATION</Link>
          </div>
        </div>
      </section>    
    </div>
  );
};


export default About;