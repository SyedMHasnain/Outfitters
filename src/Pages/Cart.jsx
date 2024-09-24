import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";
import { NavLink } from "react-router-dom";
const Cart = () => {
    const dispatch = useDispatch();
    const Product = useSelector((state)=>state.cart)
    const handleremove = (id) => {
      dispatch(remove({id}));
    }; 
  return (
    <>
      {Product.length > 0 ? (
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">Shopping Cart</h2>
          <div className="space-y-4">
            {Product.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 border-b border-gray-300">
                <div className="flex-1">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={item.length}
                    className="w-16 border border-gray-400 rounded text-center"
                    readOnly
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleremove(item.id)}
                    className="  w-20 border bg-black  text-white   rounded text-center">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-black">Total:</h3>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      ) : (
        <div className="absolute top-20 left-0 right-3 ">
          <h1 className="text-2xl  font-bold text-black text-center   ">
            Cart is Empty 
            <NavLink to="/Products" className="text-sm text-blue-500">
              
              Add Products ...
          
            </NavLink>
          </h1>
        </div>
      )}
    </>
  );
};

export default Cart;
