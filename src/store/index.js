import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/auth-slice";
import menuReducer from "../features/auth/slice/product-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer
  },
});

export default store;
