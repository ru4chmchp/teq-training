// src/components/InternalServerError.jsx
import React from "react";
import { Link } from "react-router-dom";
import Blackbutton from "./Blackbutton";

const InternalServerError = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src="./src/assets/500.svg" alt="" />
      <h1 className="text-8xl font-bold">500</h1>
      <p className="mt-4 text-3xl">Internal Server Error</p>
      <p className="text-gray-500">
        An internal server error has occured. Please try again later.
      </p>
      <Link to="/">
        <Blackbutton text="GO BACK" />
      </Link>
    </div>
  );
};

export default InternalServerError;
