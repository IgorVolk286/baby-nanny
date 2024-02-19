import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectFilter } from './FilterSlice';

const naniesSlice = createSlice({
  name: 'nanies',
  initialState: {
    naniesList: [],
    isLoading: false,
  },
  reducers: {
    setLoadind(state) {
      state.isLoading = true;
    },
    getAllNanie(state, action) {
      state.naniesList = [...action.payload];
      state.isLoading = false;
    },
  },
});

export const naniesReducer = naniesSlice.reducer;

export const selectNaniesList = state => state.nanies.naniesList;
export const { getAllNanie, setLoadind } = naniesSlice.actions;

export const selectfilteredNanies = createSelector(
  [selectNaniesList, selectFilter],
  (naniesList, filter) => {
    if (filter === 'A to Z') {
      return [...naniesList].sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === 'Z to A') {
      return [...naniesList].sort((a, b) => b.name.localeCompare(a.name));
    } else if (filter === 'Less than 10$') {
      const filtered = [...naniesList].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      if (filtered.some(item => item.price_per_hour <= 10)) {
        return filtered.filter(item => item.price_per_hour <= 10);
      } else {
        alert('Nanies price per hour less than 10$  not found');
      }
      return filtered;
    } else if (filter === 'Greater than 10$') {
      return [...naniesList].sort(
        (a, b) => a.price_per_hour - b.price_per_hour
      );
    } else if (filter === 'Popular') {
      return [...naniesList].sort((a, b) => b.rating - a.rating);
    } else if (filter === 'Not popular') {
      return [...naniesList].sort((a, b) => a.rating - b.rating);
    }
  }
);
