import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice'; // Make sure your reducer is imported correctly

const store = configureStore({
  reducer: {
    header: headerReducer, // Add all your slices/reducers here
  },
});

export default store;  // This is important, make sure you use `export default`
