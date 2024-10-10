// store.js
import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";
import detailsReducer from "./slices/detailsSlice";
// import addDetailsReducer from "./slices/addDetailSlice";
// import createCompanyReducer from "./slices/createCompanySlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    details: detailsReducer,
    // addDetails: addDetailsReducer,
    // addCompany: createCompanyReducer,
  },
});

export default store;
