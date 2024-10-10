// slices/detailsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetch details API
export const fetchDetails = createAsyncThunk("detail", async () => {
  const response = await fetch("http://5.189.180.8:8010/detail");
  return response.json();
});


export const deleteDetail = createAsyncThunk(
  "deleteDetail",
  async (sr_no, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://5.189.180.8:8010/detail/${sr_no}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json(); // Try to capture error details
        return rejectWithValue(errorData);
      }
      return sr_no; // Return the sr_no to identify which item was deleted
    } catch (error) {
      return rejectWithValue(error.message); // Handle network or unexpected errors
    }
  }
);

const detailsSlice = createSlice({
  name: "detail",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    deleteError: null,
    isSuccess: null,
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
      })

      .addCase(deleteDetail.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.sr_no !== action.payload);
        state.deleteError = null; // Clear error on successful deletion
      })
      .addCase(deleteDetail.rejected, (state, action) => {
        state.isError = true;
        state.deleteError = action.payload; // Store delete error message
      });
  },
});

export default detailsSlice.reducer;
