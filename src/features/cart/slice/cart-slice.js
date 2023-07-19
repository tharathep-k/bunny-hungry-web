import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as cartApi from "../../../api/cart-api";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

export const createCart = createAsyncThunk(
  "menu/createCart",
  async (input, thunkApi) => {
    try {
      const res = await cartApi.createCart(input);
      //   console.log("-=-=-=-=-=-=- : ", res);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (id, thunkApi) => {
    try {
      //   console.log("pppppppp :", id);
      const res = await cartApi.getCart(id);
      // console.log("-------- data :", res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (id, thunkApi) => {
    try {
    //   console.log("........ :", id);
      const res = await cartApi.deleteCart(id);
      console.log(res);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(createCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      }),
});

export default cartSlice.reducer;
