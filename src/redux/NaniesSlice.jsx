import { createSlice } from '@reduxjs/toolkit';

const NaniesSlice = createSlice({
  name: 'nanies',
  initialState: {
    naniesList: [],
    isLoading: false,
    isLogin: true,
  },
  reducers: {},
});

export const naniesReducer = NaniesSlice.reducer;
export const selectIsLogin = state => state.nanies.isLogin;
