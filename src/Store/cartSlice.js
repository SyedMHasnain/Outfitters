import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    add(state, action) {
      // Check if the item already exists in the cart
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity
      }
       else {
        // If the item is not exist, push the new item quantity 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload.id); // Remove the item
    },

    increment(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1; // Increment quantity
      }
    },

    decrement(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1; // Decrement quantity
        } else {
          return state.filter((item) => item.id !== action.payload.id); 
        }
      }
    },
  },
});

export const { add, remove, increment, decrement } = CartSlice.actions;
export default CartSlice.reducer;
