import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += item.quantity ?? 1;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity ?? 1 });
      }
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === id);

      if (item) {
        if (quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== id
          );
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
