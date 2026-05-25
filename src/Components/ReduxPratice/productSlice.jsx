import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reducer from "./cartSlice";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log("data --> ",data)
    return data;
  },
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = action.error.message;
      });
  },
});

export default productSlice.reducer;
