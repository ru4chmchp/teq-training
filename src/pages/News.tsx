import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
import { Textcenter } from "../components/Textcenter";

export const News = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="relative mb-10 flex flex-col justify-center items-center">
          <Textcenter text="ALL NEWS" subclass="font-semibold" />
          <SearchBar />
        </div>
        <div className="py-10 px-10 md:px-52 bg-[#F5F5F5] grid grid-cols-3">
          <Link to="/happy">
            <div className="border-2 rounded-lg">
              <img
                src="./src/assets/happywomen1.svg"
                alt=""
                className="w-full"
              />
              <div className="pl-3 text-base leading-7 text-gray-700 font-semibold">
                Backend-Developer Golang
              </div>
              <p className="text-gray-500 pl-3">15/3/2023</p>
            </div>
          </Link>
          <div className="border-2 rounded-lg">
            <img src="./src/assets/happywomen1.svg" alt="" className="w-full" />
            <div className="pl-3 text-base leading-7 text-gray-700 font-semibold">
              Backend-Developer Golang
            </div>
            <p className="text-gray-500 pl-3">15/3/2023</p>
          </div>
          <div className="border-2 rounded-lg">
            <img src="./src/assets/happywomen1.svg" alt="" className="w-full" />
            <div className="pl-3 text-base leading-7 text-gray-700 font-semibold">
              Backend-Developer Golang
            </div>
            <p className="text-gray-500 pl-3 ">15/3/2023</p>
          </div>
          <div className="border-2 rounded-lg">
            <img src="./src/assets/happywomen1.svg" alt="" className="w-full" />
            <div className="pl-3 text-base leading-7 text-gray-700 font-semibold">
              Backend-Developer Golang
            </div>
            <p className="text-gray-500 pl-3 ">15/3/2023</p>
          </div>
          <div className="border-2 rounded-lg">
            <img src="./src/assets/happywomen1.svg" alt="" className="w-full" />
            <div className="pl-3 text-base leading-7 text-gray-700 font-semibold">
              Backend-Developer Golang
            </div>
            <p className="text-gray-500 pl-3">15/3/2023</p>
          </div>
          <div className="border-2 rounded-lg">
            <img src="./src/assets/happywomen1.svg" alt="" className="w-full" />
            <div className="pl-3 text-base leading-7 text-gray-700 font-semibold">
              Backend-Developer Golang
            </div>
            <p className="text-gray-500 pl-3">15/3/2023</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
