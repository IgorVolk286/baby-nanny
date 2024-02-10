import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
    isLoading: false,
    isLogin: true,
  },
  reducers: {
    createFavoriveNany(state, { payload }) {
      state.favorites = [...state.favorites, payload];
    },
    delNany(state, { payload }) {
      state.favorites = state.favorites.filter(item => item.id !== payload);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const selectFavorites = state => state.favorite.favorites;
export const { delNany, createFavoriveNany } = favoriteSlice.actions;
