import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    positionNany: 'A to Z',
    positionFavorite: 'A to Z',
  },

  reducers: {
    actualPosition(state, action) {
      state.positionNany = action.payload;
    },
    actualPositionFavorite(state, action) {
      state.positionFavorite = action.payload;
    },
  },
});

export const selectFilter = state => state.filter.positionNany;
export const selectFilterFavorite = state => state.filter.positionFavorite;
export const filterReducer = filterSlice.reducer;
export const { actualPosition, actualPositionFavorite } = filterSlice.actions;
