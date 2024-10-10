import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addItem = createAsyncThunk(
  "addDetails",
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
            vr_no: values.vr_no, // You'll need to make sure vr_no is part of inputValue
            vr_date: values.vr_date || new Date().toISOString(), // Assuming you're capturing this date elsewhere
            ac_name: values.ac_name, // Include this in your form
            ac_amt: values.ac_amt, // You may want to calculate this from detail_table
            status: "A", // Assuming a default value; you may need to make this dynamic
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
            },
          ],
        }),
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

const addDetailsSlice = createSlice({
  name: "addDetails",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    deleteError: null,
    isSuccess: null,
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default addDetailsSlice.reducer;
