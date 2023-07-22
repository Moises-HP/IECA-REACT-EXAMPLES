import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce((acc, item) => acc + item.price, 0);
    },
  },
});

export const { addToCart, removeFromCart, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
