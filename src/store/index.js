import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/auth-slice";
import menuReducer from "../features/auth/slice/product-slice";
import cartReducer from "../features/cart/slice/cart-slice";
import orderReducer from "../features/order/slice/order-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
