import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { porductsFetch } from "../features/productSlice";
import { productsApi } from "../features/productsAPi";
import cartReducer, { getTotals } from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    porducts: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(porductsFetch());
store.dispatch(getTotals());
