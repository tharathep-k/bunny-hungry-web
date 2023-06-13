import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../../api/auth-api";
import { removeAccessToken, setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
  role: null,
};

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (input, thunkApi) => {
    try {
      console.log(input);
      const res = await authApi.login(input);
      setAccessToken(res.data.accessToken);
      let resFetchMe;
      if (res.data.role == "user") {
        console.log(res.data.role);
        resFetchMe = await authApi.fetchMe();
        return resFetchMe.data.user;
      }
      if (res.data.role == "staff") {
        console.log(res.data.role);
        const resFetchMe = await authApi.fetchMeStaff();
        console.log(resFetchMe)
        return resFetchMe.data.staff;
      }
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

export const fetchMeStaff = createAsyncThunk(
  "auth/fetchMeStaff",
  async (_, thunkApi) => {
    try {
      const res = await authApi.fetchMeStaff();
      return res.data.staff;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const logoutAsync = createAsyncThunk("/auth.logoutAsync", async () => {
  removeAccessToken();
});

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input, thunkApi) => {
    try {
      console.log("input");
      const res = await authApi.register(input);
      console.log(res);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await authApi.fetchMe();

      return resFetchMe.data.user;
    } catch (error) {
      console.log(error.response.data);

      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = true;
        state.user = action.payload;
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
      .addCase(fetchMeStaff.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(fetchMeStaff.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.initialLoading = false;
        state.staff = action.payload;
      })
      .addCase(fetchMeStaff.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        // state.role = null;
        // state.staff = null;
      }),
});

export default authSlice.reducer;
