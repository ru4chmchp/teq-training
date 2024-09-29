import ContactForm from "../components/contactform";
import Navbar from "../components/Navbar";
import { Textcenter } from "../components/Textcenter";
import { Footer } from "../components/Footer";

export const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mb-10">
          <Textcenter text="Join Us." subclass="font-semibold" />
          <p className="text-mainGray mt-4 px-4 text-2xl mx-auto max-w-6xl leading-10 text-center">
            Become a part of our team and build your bright future.
          </p>

          <div className="flex flex-col lg:flex-row justify-around items-center pt-5 space-y-8 lg:space-y-0 lg:space-x-8">
            <img
              src="./src/assets/contactus.svg"
              alt="Contact Us"
              className="w-full lg:max-w-lg"
            />

            <div className="w-full lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
