import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartTotal = (cartItems) => {
  return cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (product) => product.id === item.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalAmount = cartTotal(state.cartItems);
    },
    increment: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (product) => product.id === item.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
      state.totalAmount = cartTotal(state.cartItems);
    },
    decrement: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (product) => product.id === item.id,
      );

      if ( existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (product) => product.id !== item.id,
        );
      }
      state.totalAmount = cartTotal(state.cartItems);
    },
    remove: (state, action) => {
      const item = action.payload;

      state.cartItems = state.cartItems.filter(
        (product) => product.id !== item.id,
      );

      state.totalAmount = cartTotal(state.cartItems);
    },
  },
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
