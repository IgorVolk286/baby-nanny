import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    position: 'A to Z',
  },

  reducers: {
    actualPosition(state, action) {
      state.position = action.payload;
    },
  },
});

export const selectFilter = state => state.filter.position;
export const filterReducer = filterSlice.reducer;
export const { actualPosition } = filterSlice.actions;
