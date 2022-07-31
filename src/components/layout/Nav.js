import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav
      className={`top-0 left-0 w-full px-4 lg:px-16 py-8 z-20 ${
        props.overlay === true
          ? "absolute h-8"
          : "relative bg-viewb h-24 lg:h-28"
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <Link to="/">
          <div className="flex flex-row cursor-pointer relative z-30">
            <img
              src="./images/logo-icon.png"
              className="mr-2"
              alt="logo Icon"
            />
            <h2 className="font-medium font-second text-white text-xl">
              StorageConnect
            </h2>
          </div>
        </Link>

        <div className="nav hidden md:block space-x-12 text-white text-lg">
          <NavLink
            to="/active-listings"
            className={`text-white hover:text-yback font-medium hover:font-semibold transition duration-300 ease-in-out $({ isActive }) => (isActive ? "active" : "inactive")`}
          >
            Active Listings
          </NavLink>
          <NavLink
            to="/sell-storage"
            className={`text-white hover:text-yback font-medium hover:font-semibold transition duration-300 ease-in-out $({ isActive }) => (isActive ? "active" : "inactive")`}
          >
            Sell your Self Storage
          </NavLink>
          <NavLink
            to="/free-evaluation"
            className={`text-white hover:text-yback font-medium hover:font-semibold transition duration-300 ease-in-out $({ isActive }) => (isActive ? "active" : "inactive")`}
          >
            Free Evaluation
          </NavLink>
          <NavLink
            to="/learn"
            className={`text-white hover:text-yback font-medium hover:font-semibold transition duration-300 ease-in-out $({ isActive }) => (isActive ? "active" : "inactive")`}
          >
            Learn
          </NavLink>
          <Link to="/contact">
            <button className="btn-primary">Contact</button>
          </Link>
        </div>

        <div className="mobileMenu md:hidden absolute top-0 right-0 z-0">
          <div className="menu relative z-0">
            <div className="options px-12 text-left">
              <NavLink
                to="/active-listings"
                className={`text-white hover:text-yback font-medium hover:font-semibold transition duration-300 ease-in-out $({ isActive }) => (isActive ? "active" : "inactive")`}
              >
                Active Listings
              </NavLink>
              <NavLink
                to="/sell-storage"
                className={`text-white hover:text-yback font-medium hover:font-semibold transition duration-300 ease-in-out $({ isActive }) => (isActive ? "active" : "inactive")`}
              >
                Sell your Self Storage
              </NavLink>
              <NavLink
                to="/free-evaluation"
                className={`text-white hover:text-yback font-medium hover:font-semibold transition duration-300 ease-in-out $({ isActive }) => (isActive ? "active" : "inactive")`}
              >
                Free Evaluation
              </NavLink>
              <NavLink
                to="/learn"
                className={`text-white hover:text-yback font-medium hover:font-semibold transition duration-300 ease-in-out $({ isActive }) => (isActive ? "active" : "inactive")`}
              >
                Learn
              </NavLink>
              <div className="pt-6">
                <Link to="/contact">
                  <button className="btn-primary">Contact</button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="menu-click-area cursor-pointer relative z-20"
            onClick={() => {
              document.querySelector(".mobileMenu").classList.toggle("active");
            }}
          >
            <svg
              className="x"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 220 400"
              height="320"
              width="250"
            >
              <g className="top-bars" strokeWidth="4">
                <path className="bar bar1" d="M 178,20 H 202" />
                <path className="bar bar2" d="M 178,29 H 202" />
                <path className="bar bar3" d="M 178,39 H 202" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
