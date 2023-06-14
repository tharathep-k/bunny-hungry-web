import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authProduct from "../../../api/auth-product";

const initialState = {
  error: null,
  loading: false,
  data: [],
};

export const createMenu = createAsyncThunk(
  "auth/createMenu",
  async (input, thunkApi) => {
    try {
      console.log(input);
      const res = await authProduct.createMenu(input);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const editMenu = createAsyncThunk(
  "auth/editMenu",
  async (input, thunkApi) => {
    try {
      await authProduct.editMenu(input);
      return input;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getMenu = createAsyncThunk("auth/getMenu", async (_, thunkApi) => {
  try {
    const res = await authProduct.getMenu();
    console.log(res)
    return res.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const deleteMenu = createAsyncThunk("auth/deleteMenu", async (id, thunkApi) => {
  try {
    const res = await authProduct.deleteMenu(id)
    return res.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
})

const menuSlice = createSlice({
  name: "menu",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(createMenu.fulfilled, (state, action) => {
        state.data.unshift(action.payload);
      })
      .addCase(editMenu.fulfilled, (state, action) => {
        const idx = state.data.findIndex((el) => el.id === action.payload.id);
        state.data[idx] = action.payload;
      })
      .addCase(getMenu.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getMenu.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getMenu.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteMenu.fulfilled, (state, action) => {
        const idx = state.data.findIndex(el => el.id === action.payload.id)
        state.data[idx] = action.payload 
      })
});

export default menuSlice.reducer;
