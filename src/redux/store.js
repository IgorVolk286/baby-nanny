import { configureStore } from '@reduxjs/toolkit';
import { naniesReducer } from './NaniesSlice';
import { favoriteReducer } from './FavoriteSlice';
import { userReducer } from '../redux/UserSlice';
export const store = configureStore({
  reducer: {
    nanies: naniesReducer,
    favorite: favoriteReducer,
    user: userReducer,
  },
});
