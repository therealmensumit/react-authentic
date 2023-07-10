import { Link } from "react-router-dom";
import {FaPhone, FaEnvelope, FaLocationDot, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp} from "react-icons/fa6";
import InterviewBro from '../assets/img/InterviewBro.svg'

const FreeConsultation = () => {
  const services = ["website", "digital marketing", "designing", "branding"];
  return (
    <div className="font-body">
      <div className="container mx-auto px-4 py-14">
        <div className="lg:w-10/12 w-full mx-auto text-center">
          <h2 className="text-blue font-bold lg:text-5xl text-3xl mb-4">
            Have Some <span className="text-orange">Questions</span> ?
          </h2>
          <p className="text-xl">
            We understand that you may have questions regarding us and{" "}
            <strong>our services</strong>. Worry no more! For a{" "}
            <strong>free consultation</strong> or a specific doubt, fill in the
            details and let us respond to you with the{" "}
            <strong>best possible&nbsp;solution!</strong>
          </p>
        </div>
      </div>

      <section className="pb-14 relative z-0 after:absolute after:-z-10 after:w-full after:h-full after:right-0 after:bottom-0 after:bg-blue clip-path">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="md:col-span-2 col-span-3">
              <div className="md:p-8 p-4 shadow-xl bg-white rounded-xl border border-[#DDDDDD]">
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
                    <select
                      className="w-full capitalize bg-white border-b-[1px] border-black text-gray focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
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
                    <input
                      className="w-full bg-white border-b-[1px] border-black focus:bg-[#eee] text-base outline-none p-3 transition-colors duration-200 ease-in-out"
                      type="tel"
                      placeholder="Phone*"
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
            <div className="md:col-span-1 col-span-3 md:text-start text-center self-end">
                <div className="text-white">
                    <h3 className="text-2xl font-bold font-head mb-2">Request a Call Back</h3>
                    <p className="mb-5">We are determined to leave no query unanswered! Fill in the details in the given form and our team will assist you as soon as possible.</p>
                    <ul className="flex flex-col gap-4 mb-8">
                        <li className="flex gap-3 items-center md:justify-start justify-center">
                            <div className="w-12 h-12 border-2 border-white grid place-content-center rounded-full">
                                <FaPhone />
                            </div>
                            <Link to={'tel:9999999999'} className="hover:text-orange">+91-9999999999</Link>
                        </li>
                        <li className="flex gap-3 items-center md:justify-start justify-center">
                            <div className="w-12 h-12 border-2 border-white grid place-content-center rounded-full">
                                <FaEnvelope />
                            </div>
                            <Link to={'mailto:xyz@mail.com'} className="hover:text-orange">xyz@mail.com</Link>
                        </li>
                        <li className="flex gap-3 items-center md:justify-start justify-center">
                            <div className="w-12 h-12 border-2 border-white grid place-content-center rounded-full">
                                <FaLocationDot />
                            </div>
                            <span>New Delhi</span>
                        </li>
                    </ul>
                    <div className="flex gap-4 border-t border-white pt-4  md:justify-start justify-center">
                        <Link className="w-12 h-12 border border-white grid place-content-center rounded-full hover:bg-orange">
                            <FaFacebookF className="h-6" />
                        </Link>
                        <Link className="w-12 h-12 border border-white grid place-content-center rounded-full hover:bg-orange">
                            <FaInstagram className="h-6" />
                        </Link>
                        <Link className="w-12 h-12 border border-white grid place-content-center rounded-full hover:bg-orange">
                            <FaLinkedinIn className="h-6" />
                        </Link>
                        <Link className="w-12 h-12 border border-white grid place-content-center rounded-full hover:bg-orange">
                            <FaWhatsapp className="h-6" />
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-8 grid-cols-3 items-center">
            <div className="col-span-3 md:col-span-2 md:text-start text-center">
                <h2 className="text-blue font-bold lg:text-5xl text-3xl mb-4">
                    Join <span className="text-orange">Authentic Cave</span>
                </h2>
                <p className="text-xl mb-4">Hello from the other side. We have some job openings in digital, design & branding that might be right for you!</p>
                <Link className="px-8 py-3 inline-block font-bold bg-blue text-white hover:bg-orange">Join Authentic Cave</Link>
            </div>
            <div className="col-span-3 md:col-span-1">
                <img src={InterviewBro} alt="Interview" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;
