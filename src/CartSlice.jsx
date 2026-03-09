import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalCost: 0,
  },
  reducers: {

    // 1. addItem — adds a new plant to cart (or increments if already exists)
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

    // 2. removeItem — removes a plant from the cart entirely
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

    // 3. updateQuantity — increases or decreases quantity of a cart item
    updateQuantity(state, action) {
      const { id, type } = action.payload; // type: 'increment' | 'decrement'
      const existing = state.items.find(item => item.id === id);
      if (!existing) return;

      if (type === 'increment') {
        existing.quantity += 1;
        state.totalQuantity += 1;
        state.totalCost = parseFloat((state.totalCost + existing.price).toFixed(2));
      } else if (type === 'decrement') {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalCost = parseFloat((state.totalCost - existing.price).toFixed(2));
        } else {
          // Remove item when quantity hits 0
          state.totalQuantity -= 1;
          state.totalCost = parseFloat((state.totalCost - existing.price).toFixed(2));
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },

  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;