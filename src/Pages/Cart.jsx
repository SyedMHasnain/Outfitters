import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, increment, decrement } from "../Store/cartSlice";
import { NavLink } from "react-router-dom"; // Make sure to import NavLink

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(remove({ id }));
  };

  const handleIncrement = (id) => {
    dispatch(increment({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id }));
  };

  const totalAmount = products.reduce(
    (total, item) => total + (item.price * item.quantity || 0),
    0
  );

  return (
    <>
      {products.length > 0 ? (
        <div className="mt-20">
          <div className="flex w-[95%] ml-8 justify-center">
            <h1 className="text-3xl font-bold">Cart details</h1>
          </div>

          <div className="flex justify-evenly p-8 text-lg font-semibold bg-gray-300 mt-4 w-10/12 ml-32 rounded-lg mb-4">
            <div className="flex justify-between w-1/4">
              <h4>Image</h4>
              <h4>Product</h4>
            </div>
            <div className="flex justify-evenly w-1/2 ml-40">
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Sub Total</h4>
              <h4 className="pr-16">Remove</h4>
            </div>
          </div>

          <div>
            {products.map((item) => (
              <div className="cart-page" key={item.id}>
                <div className="cart-details">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={item.image}
                            alt="Product Image"
                            width={100}
                            height={100}
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>$ {item.price}</td>
                        <td>
                          <div className="quantity-form">
                            <button
                              className="quantity-button decrement"
                              onClick={() => handleDecrement(item.id)}>
                              -
                            </button>
                            <input
                              type="text"
                              className="quantity"
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              className="quantity-button increment"
                              onClick={() => handleIncrement(item.id)}>
                              +
                            </button>
                          </div>
                        </td>
                        <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button
                            className="remove-button"
                            onClick={() => handleRemove(item.id)}>
                            ✖ Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <div className="flex w-1/3 border">
              <div className="cart-summary mt-10">
                <h2 className="text-xl">Have a coupon?</h2>
                <form action="" method="post" className="coupon-form">
                  <input type="text" name="coupon" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
                <h3>Cart Totals</h3>
                <p>Delivery charges: $ 10.00</p>
                <h3>Grand Total: $ {(totalAmount + 10).toFixed(2)}</h3>
                 <NavLink to="/Payment" >
                <button className="checkout-button" >Checkout</button>
                 </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-20 left-0 right-3">
          <h1 className="text-2xl font-bold text-black text-center">
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
