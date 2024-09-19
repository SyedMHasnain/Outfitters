import createSlice from '@reduxjs/toolkit';
const CartSlice = createSlice({
  name: "cart",
  initialstate: [],
  reducers: {
    add(state,action){
        state.push(action.payload)
    },
    remove(state,action){
        return 
        state.filter((item)=> item.id !== action.payload.id)
  },
}
}
);
export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;