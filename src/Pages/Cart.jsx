import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove, increment, decrement } from "../Store/cartSlice";
import { NavLink } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove({ id }));
  };
  const handleIncrement = (id) => {
    dispatch(increment({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id }));
  };

  const totalAmount = Product.reduce(
    (total, item) => total + (item.price * item.quantity || 0), // Ensure it's a number
    0
  );

  return (
    <>
      {Product.length > 0 ? (
        <div className="max-w-xl mx-auto mt-20 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">Shopping Cart</h2>
          <div className="space-y-4">
            {Product.map((item) => (
              <div>
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border-b border-gray-300">
                  <div className="flex-1">
                    <img
                      src={item.image}
                      alt="productss"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <h3 className="text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* increment btn  */}
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="border border-gray-400 rounded px-2">
                      +
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-16 border border-gray-400 rounded text-center"
                      readOnly
                    />
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="border border-gray-400 rounded px-2">
                      -
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleremove(item.id)}
                      className=" text-2xl   text-black text-center">
                      <MdDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-black">
              Total: ${totalAmount.toFixed(2)}
            </h3>
          </div>

          <NavLink to="/Chkout-form" className=" ">
            <span className="  flex bg-black text-white h-10 justify-center items-center rounded hover:bg-gray-800 transition">
              Checkout
            </span>
          </NavLink>
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
