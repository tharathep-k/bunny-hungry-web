import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../../api/auth-api";
import { setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
};

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input) => {
    try {
      const res = await authApi.register(input);
      setAccessToken(res.data.accessToken);
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReucers: (builder) =>
    builder
      .addcase(registerAsync.pending, (state) => (state.loading = true))
      .addcase(registerAsync.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addcase(registerAsync.rejected, (state) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default authSlice.reducer;