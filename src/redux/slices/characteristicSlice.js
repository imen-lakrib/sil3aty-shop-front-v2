import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  colors: [],
  sizes: [],

}

const characteristicSlice = createSlice({
  name: "characteristic",
  initialState,
  reducers: {
    GET_CATEGORIES: (state, action) => {
      state.categories = action.payload;
    },
    ADD_CATEGORY: (state, action) => {
      const category = action.payload;
      state.categories.push(category);
    },
    GET_COLORS: (state, action) => {
      state.colors = action.payload;
    },
    ADD_COLOR: (state, action) => {
      const color = action.payload;
      state.colors.push(color);
    },
    GET_SIZES: (state, action) => {
      state.sizes = action.payload;
    },
    ADD_SIZE: (state, action) => {
      const size = action.payload;
      state.sizes.push(size);
    },
  }
});

export const { GET_CATEGORIES, ADD_CATEGORY, GET_COLORS, ADD_COLOR, GET_SIZES, ADD_SIZE } = characteristicSlice.actions

export const selectCategories = (state) => state.characteristic.categories
export const selectColors = (state) => state.characteristic.colors
export const selectSizes = (state) => state.characteristic.sizes


export default characteristicSlice.reducer
