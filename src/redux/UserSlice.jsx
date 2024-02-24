import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    id: '',
    token: '',
    email: '',
    isLogin: false,
  },
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.isLogin = true;
      // localStorage.setItem('token', action.payload.token);
    },
    refreshuser(state, action) {
      state.isLogin = true;
    },

    logOut(state, action) {
      state.id = '';
      state.token = '';
      state.email = '';
      state.isLogin = false;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
export const selectIsLogin = state => state.user.isLogin;
export const selectName = state => state.user.name;
