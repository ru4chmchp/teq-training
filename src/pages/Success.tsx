import { Link } from "react-router-dom";
import Blackbutton from "../components/Blackbutton";

export const Success = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto">
        <img src="./src/assets/submitsuccess.svg" alt="" />
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Submit Your Application
        </h2>
        <p className="text-gray-700 mb-4 text-center w-[30%]">
          Thank you for applying. We will review your application and inform you
          about the next steps, please sit tight.
        </p>
        <Blackbutton text="SEARCH OTHER JOBS" />
        <Link to="/" className="text-gray-700">
          Go to HOMEPAGE
        </Link>
      </div>
    </>
  );
};
