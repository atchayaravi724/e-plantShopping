import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      // TODO: Add a new plant or increase the existing plant's quantity.
    },
    removeItem(state, action) {
      // TODO: Remove the plant whose id is in action.payload.
    },
    updateQuantity(state, action) {
      // TODO: Set the requested quantity and remove items at zero.
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
