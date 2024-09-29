import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Textcenter } from "../components/Textcenter";

export const Happy = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="relative mb-10">
          <Textcenter
            text="Happy international women’s day!"
            subclass="font-semibold"
          />
          <div className="flex flex-row items-center justify-center">
            <div className="flex">
              <img src="./src/assets/clock.svg" alt="" />
              <p className="text-gray-500">5 mins read</p>
            </div>
            <div className="flex">
              <img src="./src/assets/clock.svg" alt="" />
              <p className="text-gray-500">5 mins read</p>
            </div>
          </div>
        </div>
        <div className="py-10 px-10 md:px-30 flex flex-col pb-96"></div>
        <Footer />
      </div>
    </>
  );
};
