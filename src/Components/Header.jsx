import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import SideNavi from "./Sidenav";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
const Header = () => {
  const items = useSelector((state) => state.cart);
  
  return (
    <>
      {/* nav start */}
      <div className="flex justify-between items-center fixed w-full z-10 h-12  border-2 border-black ">
        <div className=" menu-icon ml-4 text-xl  text-black">
          <SideNavi />
        </div>

        <div className="Logo">
          <img src={logo} alt="" />
        </div>
        <div className=" relative cart-icon mr-10 ">
          <div className="absolute w-4 h-3 right-0  bottom-5 left-4 bg-red-500 rounded text-white  text-[10px]">
            <span className="ml-0.5 font-thin ">{items.length}</span>
          </div>
          <NavLink
            to="/Cart"
            // className={({ isActive }) =>
            //   `${isActive ? "  rounded-3xl" : "tetx-black "}`
            // }
          >
            <LuShoppingCart className="w-6 h-6" />
          </NavLink>
        </div>
      </div>

      {/* nav End  */}
    </>
  );
};

export default Header;
