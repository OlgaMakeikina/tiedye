import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: 'all',
  selectedSize: [],
  minPrice: 0,       
  maxPrice: 1000,     
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    filterSize: (state, action) => {
      const size = action.payload;
      if (state.selectedSize.includes(size)) {
        state.selectedSize = state.selectedSize.filter(s => s !== size);
      } else {
        state.selectedSize.push(size);
      }
    },
    filterPrice: (state, action) => {
      const { minPrice, maxPrice } = action.payload;
      state.minPrice = minPrice;
      state.maxPrice = maxPrice;
    },
  },
});

export const { filterCategory, filterSize, filterPrice } = productSlice.actions;

export const getSelectedCategory = (state) => state.products.selectedCategory;
export const getSelectedSize = (state) => state.products.selectedSize;
export const getMinPrice = (state) => state.products.minPrice;
export const getMaxPrice = (state) => state.products.maxPrice;

export default productSlice.reducer;