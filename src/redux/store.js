import { configureStore } from '@reduxjs/toolkit';
import { naniesReducer } from './NaniesSlice';

export const store = configureStore({
  reducer: {
    nanies: naniesReducer,
  },
});
