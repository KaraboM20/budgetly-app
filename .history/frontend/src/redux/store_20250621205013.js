// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './goalSlice';

export const store = configureStore({
  reducer: {
    goal: goalReducer,
    // Add more slices like user or transaction if needed
  },
});
