import React, { useState } from "react";
import contactImg from "../assets/img/contact-us.svg";

const Contact = () => {
  const services = ["website", "digital marketing", "designing", "branding"];
  const categories = [
    "Wordpress website design services",
    "Website maintainance services",
    "PHP web design and development",
    "UI & UX design services",
    "E-commerce website and design services",
  ];
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [nameErr, setNameErr] = useState();
  const [emailErr, setEmailErr] = useState();
  
  const loginHandle = (e)=> {
    e.preventDefault();
    if(name.length <= 3 || email.length <= 5) {
      alert(false)
    } else {
      alert(true)
    }
  }

  const nameHandle = (e) => {
    let isLength = e.target.value;
    if (isLength.length <= 3) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(isLength);
  }
  const emailHandle = (e) => {
    let isLength = e.target.value;
    if (isLength.length <= 5) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(isLength);
  }
  return (
    <>
      <section className="py-8 bg-[#eee] font-body">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-blue font-bold lg:text-5xl text-3xl mb-4 pb-4">
            Ready for an <span className="text-orange">Authentic</span> Future??
          </h2>
          <p className="mb-10 lg:w-10/12 mx-auto text-xl text-blue">
            We understand that you may have questions regarding{" "}
            <strong>us and our services.</strong> Worry no more! For a{" "}
            <strong>free consultation</strong> or a specific doubt, fill in the
            details and let us respond to you with the{" "}
            <strong>best possible solution!</strong>
          </p>
        </div>
      </section>

      <section className="py-8 -translate-y-14 font-body">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 col-span-3">
              <div className="md:p-8 p-4 shadow-xl bg-white rounded-xl">
                <form className="grid grid-cols-2 gap-8" onSubmit={loginHandle}>
                  <div className="md:col-span-1 col-span-2">
                    <input
                      className="w-full bg-white border-b border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                      type="text"
                      name="name"
                      onChange={nameHandle}
                      value={name}
                      placeholder="Name*"
                    />
                    {nameErr && <p className="text-red-500 text-sm">Invalid Name</p>}
                  </div>
                  <div className="md:col-span-1 col-span-2">
                    <input
                      className="w-full bg-white border-b border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                      type="email"
                      name="email"
                      onChange={emailHandle}
                      value={email}
                      placeholder="Email*"
                      />
                    {emailErr && <p className="text-red-500 text-sm">Invalid Email</p>}
                  </div>
                  <div className="md:col-span-1 col-span-2">
                    <select
                      className="w-full capitalize bg-white border-b border-black text-gray focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                      id=""
                    >
                      <option defaultValue>Services*</option>
                      {services.map((service, index) => (
                        <option
                          className="capitalize"
                          key={index}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-1 col-span-2">
                    <select
                      className="w-full capitalize bg-white border-b border-black text-gray focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                      id=""
                    >
                      <option defaultValue>Select Category*</option>
                      {categories.map((category, index) => (
                        <option
                          className="capitalize"
                          key={index}
                          value={category}
                        >
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-1 col-span-2">
                    <input
                      className="w-full bg-white border-b border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                      type="tel"
                      placeholder="Phone*"
                    />
                  </div>
                  <div className="md:col-span-1 col-span-2">
                    <input
                      className="w-full bg-white border-b border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                      type="text"
                      placeholder="Company"
                    />
                  </div>
                  <div className=" col-span-full">
                    <textarea
                      className="w-full bg-white border-b border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                      rows="8"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="px-16 py-3 font-bold bg-blue text-white hover:bg-orange"
                      type="submit"
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="md:col-span-1 col-span-3">
              <img src={contactImg} alt="Contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
