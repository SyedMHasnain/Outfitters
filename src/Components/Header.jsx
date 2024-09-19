import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import SideNavi from "./Sidenav";

//import { Link, NavLink } from "react-router-dom";

// this is a navigation bar in which we use react router v60.4 and NAv Link As well
const Header = () => {
  return (
    <>
      {/* nav start */}
      <div className="flex  items-center fixed w-full z-10 h-12  ">
        <div className="  ml-4 text-xl  text-black">
          <SideNavi />
        </div>
        <img src={logo} alt="" className="ml-5" />

        {/* <ul className=" flex gap-7  items-center text-[1vw] hidden xl:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? " text-red-400  rounded-3xl" : "tetx-black "}`
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? " text-red-400  rounded-3xl" : "tetx-black "}`
              }
              to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? " text-red-400  rounded-3xl" : "tetx-black "}`
              }
              to="/Services">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? " text-red-400  rounded-3xl" : "tetx-black "}`
              }
              to="/Contact">
              Contact
            </NavLink>
          </li>
          <li className="bg-cyan-500  text-black px-7 py-2 rounded-3xl">
            {" "}
            Become are Valuable Customer
          </li>
        </ul> */}
      </div>

      {/* nav End  */}
    </>
  );
};

export default Header;
