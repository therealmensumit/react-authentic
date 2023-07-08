import React from "react";
import Image from '../assets/img/web-design-concepts.png'

const About = () => {
  return (
    <section className="py-8 font-body">
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
  );
};

export default About;
