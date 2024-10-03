import logo from "../../assets/logo.svg";
import Blackbutton from "../Blackbutton";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex-shrink-0 pl-5 w-15 h-15 md:w-30 h-30">
        <img src={logo} alt="Logo" className="" />
      </div>

      <div className="hidden md:flex flex-1 justify-end items-center mr-10">
        <ul className="flex flex-row mr-10 font-medium text-gray-600 text-lg gap-8 md:gap-10 hover:[&>li]:text-black hover:[&>li]:font-semibold hover:[&>li]:underline underline-offset-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold underline underline-offset-8"
                  : ""
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold underline underline-offset-8"
                  : ""
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/carrers"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold underline underline-offset-8"
                  : ""
              }
            >
              CARRER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold underline underline-offset-8"
                  : ""
              }
            >
              NEWS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold underline underline-offset-8"
                  : ""
              }
            >
              GALLERY
            </NavLink>
          </li>
        </ul>

        <div className="ml-10 cursor-pointer">
          <Link to="/contact">
            <Blackbutton text="CONTACT US" />
          </Link>
        </div>
      </div>

      {/* Hamburger Icon for smaller screens */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <GiHamburgerMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col p-4 font-medium text-gray-600 text-lg gap-4">
            <li>
              <Link to="/" onClick={toggleMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={toggleMenu}>
                CAREERS
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={toggleMenu}>
                NEWS
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleMenu}>
                GALLERY
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                <Blackbutton text="CONTACT US" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
