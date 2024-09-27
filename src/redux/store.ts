import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/product/productSlice";
import cartReducer from "../redux/features/cart/cartSlice";
import sidebarReducer from "../redux/features/sidebar/sidebarSlice";
import authReducer from "../redux/features/auth/authSlice";
import uiReducer from "./features/ui/uiSlice";
import disponibilidadReducer from "./features/disponibilidad/disponibilidadSlice";
import ordersReducer from "./features/orders/ordersSlice";
import productOrderReducer from "./features/productOrder/productOrderSlice";
import userReducer from "./features/user/userSlice";
import serviceReducer from "./features/services/serviceSlice";
import filterReducer from "./features/productsFilterSlice/FilterSlice";
import uiiReducer from "./features/uiSlice/uiSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    sidebar: sidebarReducer,
    ui: uiReducer,
    auth: authReducer,
    disponibilidad: disponibilidadReducer,
    orders: ordersReducer,
    productOrders: productOrderReducer,
    users: userReducer,
    services: serviceReducer,
    filter: filterReducer,
    uii: uiiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
