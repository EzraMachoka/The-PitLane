import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between py-12 md:px-10 px-7 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-sans text-white">
          The PitLane |
          <span className="text-rose-600 ml-10">Driver Profiler</span>
        </div>
        <ul className="text-white md:flex md:items-center ">
          <li className="md:ml-20 text-xl">
            <Link className="hover:text-rose-600 duration-500" to="/">
              Home |
            </Link>
          </li>
          <li className="md:ml-20 text-xl">
            <Link className="hover:text-rose-600 duration-500" to="/drivers">
              Drivers |
            </Link>
          </li>
          <li className="md:ml-20 text-xl">
            <Link className="hover:text-rose-600 duration-500" to="/about">
              About
            </Link>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
