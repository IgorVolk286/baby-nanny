import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'User',
    id: '',
    token: '',
    email: '',
  },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
  },
  delUser(state) {},
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
