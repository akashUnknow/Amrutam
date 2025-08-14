// src/store/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctorId: null,
  date: null,
  time: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking(state, action) {
      state.doctorId = action.payload.doctorId;
      state.date = action.payload.date;
      state.time = action.payload.time;
    },
    clearBooking(state) {
      state.doctorId = null;
      state.date = null;
      state.time = null;
    },
  },
});

export const { setBooking, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
