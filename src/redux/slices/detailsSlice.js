// slices/detailsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetch details API
export const fetchDetails = createAsyncThunk("fetchDetails", async () => {
  const response = await fetch('http://5.189.180.8:8010/detail');
  return response.json();
});

const detailsSlice = createSlice({
  name: "detailsData",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDetails.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default detailsSlice.reducer;
