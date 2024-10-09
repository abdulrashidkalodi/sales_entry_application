// slices/detailsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetch details API
export const fetchDetails = createAsyncThunk("detail", async () => {
  const response = await fetch("http://5.189.180.8:8010/detail");
  return response.json();
});

export const addItem = createAsyncThunk(
  "",
  async (values, { rejectWithValue }) => {
    try {
      console.log("Sending values:", values);
      const response = await fetch("http://5.189.180.8:8010/header/multiple", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          header_table: {
              vr_no: values.vr_no,  // You'll need to make sure vr_no is part of inputValue
              vr_date: values.vr_date || new Date().toISOString(),  // Assuming you're capturing this date elsewhere
              ac_name: values.ac_name,  // Include this in your form
              ac_amt: values.ac_amt,  // You may want to calculate this from detail_table
              status: "A"  // Assuming a default value; you may need to make this dynamic
          },
          detail_table: [
              {
                  vr_no: values.vr_no,
                  sr_no: values.sr_no,
                  item_code: values.item_code,
                  item_name: values.item_name,
                  description: values.description,
                  qty: values.qty,
                  rate: values.rate,
              }
          ]}),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from API:", errorData);
        return rejectWithValue(errorData);
      }
      const data = await response.json();
      console.log("API Response:", data); // Log the API response
      return data;
    } catch (error) {
      console.error("Caught Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

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
      // addnew item

      .addCase(addItem.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
        state.isSuccess = null;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = action.payload;
      })
      .addCase(addItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
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
