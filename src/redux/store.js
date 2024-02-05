import { configureStore } from '@reduxjs/toolkit';
import { naniesReducer } from './NaniesSlice';
import { favoriteReducer } from './FavoriteSlice';
export const store = configureStore({
  reducer: {
    nanies: naniesReducer,
    favorite: favoriteReducer,
  },
});
