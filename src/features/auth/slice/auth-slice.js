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
  async (input, thunkApi) => {
    try {
      const res = await authApi.register(input);
      setAccessToken(res.data.accessToken);
    } catch (error) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const loginAsync = createAsyncThunk("auth/loginAsync", async (input, thunkApi) => {
  try {
    const res = await authApi.login(input);
    setAccessToken(res.data.accessToken);
  } catch (error) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerAsync.pending, (state) => (state.loading = true))
      .addCase(registerAsync.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(registerAsync.rejected, (state) => {
        state.error = action.payload;
        state.loading = false;
      })
      // .addCase(loginAsync.pending, (state) => (state.loading = true))
      .addCase(loginAsync.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = true;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default authSlice.reducer;