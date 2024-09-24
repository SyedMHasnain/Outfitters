import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function SideNavi() {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      closeNav();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="mr-1 text-blue-400">
      <CiMenuFries onClick={openNav} />
      <SideNav isOpen={isOpen} closeNav={closeNav} ref={sideNavRef} />
    </div>
  );
}

const SideNav = React.forwardRef(({ isOpen, closeNav }, ref) => {
  return (
    <div
      ref={ref}
      className={`sidenav ${isOpen ? "open" : ""}`}
      style={isOpen ? { width: "250px" } : {}}>
      <AiOutlineClose className="closebtn" onClick={closeNav} />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-red-400 rounded-3xl" : "text-black"}`
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Products">Products</NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-red-400 rounded-3xl" : "text-black"}`
            }
            to="/Services">
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-red-400 rounded-3xl" : "text-black"}`
            }
            to="/Contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
});

export default SideNavi;
