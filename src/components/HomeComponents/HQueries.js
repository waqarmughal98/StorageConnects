import React from "react";
import { useNavigate } from "react-router-dom";

const HQueries = () => {
  let naviagte = useNavigate();
  const contact = () => {
    naviagte("/contact");
  };
  return (
    <div className="relative bg-skyback mx-auto">
      <div className="hqueries-bg py-40">
        <div className="relative w-fit mx-auto">
          <img
            src="./images/queries-env.png"
            className="absolute -top-12 right-8 lg:right-36"
            alt=""
          />
          <img
            src="./images/queries-ec.png"
            className="absolute -bottom-8 -left-8"
            alt=""
          />
          <div className="bg-white opacity-95 px-6 py-24 lg:px-24 rounded-lg shadow-xl mx-4 lg:mx-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 content-center">
              <div className="col-span-2 pr-0 lg:pr-16 text-center lg:text-left">
                <h1 className="text-4xl text-primary font-bold pb-4">
                  Any Queries? Reach Out to Us
                </h1>
                <p className="text-secondary text-lg">
                  Feel free to write to us, we are happy to help you
                </p>
              </div>

              <div className="grid place-items-center">
                <button
                  className="btn-secondary inline-flex items-center w-56"
                  onClick={contact}
                >
                  <span className="mr-4">Write to Us</span>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 19.3102L16 10.0001L0 0.689941V7.93114L11.4615 10.0001L0 12.069V19.3102Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HQueries;
