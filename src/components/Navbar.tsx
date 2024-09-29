import logo from "../assets/logo.svg";
import Blackbutton from "./Blackbutton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex-shrink-0 pl-5">
        <img src={logo} alt="Logo" className="w-30 h-30 md:w-15 h-15" />
      </div>

      <div className="hidden md:flex flex-1 justify-end items-center mr-10">
        <ul className="flex flex-row mr-10 font-medium text-gray-600 text-lg gap-8 md:gap-10 hover:[&>li]:text-black hover:[&>li]:font-semibold hover:[&>li]:underline underline-offset-8">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/carrers">CARRERS</Link>
          </li>
          <li>
            <Link to="/news">NEWS</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
        </ul>

        <div className="ml-10 cursor-pointer">
          <Link to="/contact">
            <Blackbutton text="CONTACT US" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
