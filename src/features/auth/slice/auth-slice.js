import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../../api/auth-api";
import { setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
};

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input, thunkApi) => {
    try {
      const res = await authApi.register(input);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await authApi.fetchMe();
      return resFetchMe.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (input, thunkApi) => {
    try {
      const res = await authApi.login(input);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await authApi.fetchMe();
      return resFetchMe.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
  try {
    const res = await authApi.fetchMe();
    return res.data.user;
  } catch (err) {
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
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchMe.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.initialLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
});

export default authSlice.reducer;
