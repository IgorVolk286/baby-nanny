import { createSlice } from '@reduxjs/toolkit';

const naniesSlice = createSlice({
  name: 'nanies',
  initialState: {
    naniesList: [],
    isLoading: false,
    isLogin: false,
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
export const selectIsLogin = state => state.nanies.isLogin;
export const selectNaniesList = state => state.nanies.naniesList;
export const { getAllNanie, setLoadind } = naniesSlice.actions;
