// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
