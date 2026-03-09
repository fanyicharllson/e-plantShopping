import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],         // Array of { id, name, price, image, quantity }
    totalQuantity: 0,
    totalCost: 0,
  },
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find(item => item.id === plant.id);
      if (!existing) {
        state.items.push({ ...plant, quantity: 1 });
      } else {
        existing.quantity += 1;
      }
      state.totalQuantity += 1;
      state.totalCost = parseFloat((state.totalCost + plant.price).toFixed(2));
    },

    removeItem(state, action) {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalCost = parseFloat(
          (state.totalCost - existing.price * existing.quantity).toFixed(2)
        );
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (existing) {
        existing.quantity += 1;
        state.totalQuantity += 1;
        state.totalCost = parseFloat((state.totalCost + existing.price).toFixed(2));
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalCost = parseFloat((state.totalCost - existing.price).toFixed(2));
      } else if (existing && existing.quantity === 1) {
        // Remove item when quantity reaches 0
        state.totalQuantity -= 1;
        state.totalCost = parseFloat((state.totalCost - existing.price).toFixed(2));
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;