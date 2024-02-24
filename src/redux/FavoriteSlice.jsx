import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectFilterFavorite } from '../redux/FilterSlice';

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

export const selectfilteredFvorites = createSelector(
  [selectFavorites, selectFilterFavorite],
  (favorites, filter) => {
    if (filter === 'A to Z') {
      return [...favorites].sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === 'Z to A') {
      return [...favorites].sort((a, b) => b.name.localeCompare(a.name));
    } else if (filter === 'Less than 10$') {
      const filtered = [...favorites].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      if (filtered.some(item => item.price_per_hour <= 10)) {
        return filtered.filter(item => item.price_per_hour <= 10);
      } else {
        alert('Nanies price per hour less than 10$  not found');
      }
      return filtered;
    } else if (filter === 'Greater than 10$') {
      return [...favorites].sort((a, b) => a.price_per_hour - b.price_per_hour);
    } else if (filter === 'Popular') {
      return [...favorites].sort((a, b) => b.rating - a.rating);
    } else if (filter === 'Not popular') {
      return [...favorites].sort((a, b) => a.rating - b.rating);
    }
  }
);
