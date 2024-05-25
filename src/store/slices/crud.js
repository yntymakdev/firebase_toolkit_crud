import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  oneProduct: {},
};
const crudSlices = createSlice({
  name: "crud",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.products = [...action.payload];
    },
    getOne(state, action) {
      state.oneProduct = { ...action.payload };
    },
  },
});

export const { getProduct, getOne } = crudSlices.actions;

export default crudSlices.reducer;
