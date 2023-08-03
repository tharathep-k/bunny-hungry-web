import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as orderApi from "../../../api/order-api";

const initialState = {
  error: null,
  data: [],
  orderData: [],
  allOrder: [],
  showAllData: {}
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  (input, thunkApi) => {
    try {
      //   console.log("ppppppp :", input);
      const res = orderApi.createOrder(input);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getOrder = createAsyncThunk(
  "order/getOrder",
  async (id, thunkApi) => {
    try {
      const res = await orderApi.getOrder(id);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllOrder = createAsyncThunk(
  "order/getOrderAll",
  async (_, thunkApi) => {
    try {
      const res = await orderApi.getAllOrder();
      //   console.log("---------", res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateStatusOrder = createAsyncThunk(
  "order/updateStatusOrder",
  async (id, thunkApi) => {
    try {
      // console.log("id: ", id);
      const res = await orderApi.updatestatusorder(id);
      const newAllOrder = [...thunkApi.getState().order.allOrder];

      //   const status = newAllOrder.find((el) => el.id == id);

      //   status.status = "complete";

      //   console.log("status", status);
      //   console.log("status", status.status);

      return id;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getInfoOrder = createAsyncThunk(
  "order/getInfoOrder",
  async (id, thunkApi) => {
    try {
      console.log("======= :", id);
      const res = await orderApi.getInfoOrder(id);
      console.log("getInfoOrder----- : ", res.data);
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.orderData = action.payload;
      })
      .addCase(getAllOrder.fulfilled, (state, action) => {
        state.allOrder = action.payload;
      })
      .addCase(updateStatusOrder.fulfilled, (state, action) => {
        const status = state.allOrder.find((el) => el.id == action.payload);
        status.status = "complete";
      })
      .addCase(getInfoOrder.fulfilled, (state, action) => {
        state.showAllData = action.payload
      })
});

export default orderSlice.reducer;
