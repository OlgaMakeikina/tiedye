import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: 'all',
  selectedSize: 'all',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    filterSize: (state, action) => {
      state.selectedSize = action.payload;
    },
  },
});

export const { filterCategory, filterSize } = productSlice.actions;

export const getSelectedCategory = (state) => state.products.selectedCategory;
export const getSelectedSize = (state) => state.products.selectedSize;

export default productSlice.reducer;