import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';
// import detailReducer from './slices/detailSlice';
// import itemReducer from './slices/itemSlice';

const store = configureStore({
  reducer: {
    header: headerReducer,
    // detail: detailReducer,
    // item: itemReducer,
  },
});

export default store;
