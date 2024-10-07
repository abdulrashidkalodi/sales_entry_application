import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHeader=createAsyncThunk("fetchHeader",async ()=>{
  const response= await fetch('http://5.189.180.8:8010/header')
  return response.json();
})
const headerSlice = createSlice({
  name: "headerData",
  initialState:{
    isLoading:false,
    data:null,
    isError:false,
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchHeader.pending,(state,action)=>{
      state.isLoading=true
    })
    builder.addCase(fetchHeader.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.data=action.payload
    })
    builder.addCase(fetchHeader.rejected,(state,action)=>{
      console.log("error",action.payload);
      state.isError=true
      
    })
  }
});

export default headerSlice.reducer;