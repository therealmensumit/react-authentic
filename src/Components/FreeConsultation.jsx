import { Link } from "react-router-dom";

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

      <section className="py-14 relative z-0 after:absolute after:-z-10 after:w-full after:h-full after:right-0 after:bottom-0 after:bg-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="md:col-span-2 col-span-3">
              <div className="md:p-8 p-4 shadow-xl bg-white rounded-xl">
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
            <div className="md:col-span-1 col-span-3">
                <div className="text-white">
                    <h3 className="text-2xl font-bold font-head mb-2">Request a Call Back</h3>
                    <p className="mb-5">We are determined to leave no query unanswered! Fill in the details in the given form and our team will assist you as soon as possible.</p>
                    <ul>
                        <li>
                            <Link to={'tel:9999999999'} className="hover:text-orange">+91-9999999999</Link>
                        </li>
                        <li>
                            <Link to={'mailto:xyz@mail.com'} className="hover:text-orange">xyz@mail.com</Link>
                        </li>
                        <li>
                            <span>New Delhi</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-14"></div>
    </div>
  );
};

export default FreeConsultation;
