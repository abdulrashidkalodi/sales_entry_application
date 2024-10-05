import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';
// import detailsReducer from './slices/detailsSlice';

const store = configureStore({
  reducer: {
    header: headerReducer,
    // details: detailsReducer,
  },
});

export default store;
