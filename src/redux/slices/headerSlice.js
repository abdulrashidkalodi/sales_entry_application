// src/redux/slices/headerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vr_no: "",
  vr_date: null,
  ac_name: "",
  ac_amt: 0,
  status: "A", // Default status as Active
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    updateHeader: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateHeader } = headerSlice.actions;
export default headerSlice.reducer;
