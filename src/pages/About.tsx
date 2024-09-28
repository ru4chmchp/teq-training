import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Textcenter } from "../components/Textcenter";
function About() {
  return (
    <>
      <div>
        <Navbar />
        <div className="md:pt-96 mb-10">
          <Textcenter text="About Us" subclass="font-semibold" />
          <p className="text-mainGray mt-4 px-4 text-2xl mx-auto max-w-6xl leading-10 text-center">
            We have more than 5 years of expertise offering financial service
            solutions, and assisting customers in approaching circumstances
            flexibly and proactively.
          </p>
          <img src="./src" alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
