import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../reducers/basketReducer";
import pricingReducer from "../reducers/pricingReducer";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    price: pricingReducer,
  },
});

export default store;
