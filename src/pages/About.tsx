import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Textcenter } from "../components/Textcenter";
function About() {
  return (
    <>
      <div>
        <Navbar />
        <div className="mb-10 relative">
          <Textcenter text="About Us" subclass="font-semibold" />
          <p className="text-textAb mt-4 px-4 text-2xl mx-auto max-w-6xl leading-10 text-center">
            We have more than 5 years of expertise offering financial service
            solutions, and assisting customers in approaching circumstances
            flexibly and proactively.
          </p>
          <img
            src="./src/assets/background2.svg"
            alt=""
            className="w-full absolute top-0 left-0 z-0"
          />
        </div>
        <div className="bg-[#F5F5F5] relative z-10">
          <Textcenter
            text="OUR STORY"
            subclass="text-[#616161] font-semibold text-xl"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
