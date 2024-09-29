// src/components/NotFound.js

import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import Blackbutton from "./Blackbutton";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="mt-4 text-3xl">
          The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-500">
          The page you were looking for could not be found.
        </p>
        <Link to="/" className="mt-6 text-blue-500 underline">
          <Blackbutton text="RETURN HOMEPAGE" />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
