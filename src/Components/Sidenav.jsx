import React, { useState } from "react";
import "../index.css";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
function SideNavi() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    console.log("hello"); // Corrected console log
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="mr-1 text-blue-400">
      
        <CiMenuFries onClick={openNav} /> 
      <SideNav isOpen={isOpen} closeNav={closeNav} />
    </div>
  );
}

function SideNav({ isOpen, closeNav }) {
  return (
    <div
      className={`sidenav ${isOpen ? "open" : ""}`}
      style={isOpen ? { width: "250px" } : {}}>
      <AiOutlineClose className="closebtn" onClick={closeNav} />
      <ul className=" ">
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
              ` ${
                isActive ? " text-red-400  rounded-3xl" : "text-black "
              }`
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
        {/* <li className="bg-cyan-500  text-black px-7 py-2 rounded-3xl">
          {" "}
          Become are Valuable Customer
        </li> */}
      </ul>
      {/* <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a> */}
    </div>
  );
}

export default SideNavi;
