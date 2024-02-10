import { configureStore } from '@reduxjs/toolkit';
import { naniesReducer } from './NaniesSlice';
import { favoriteReducer, favoriteSlice } from './FavoriteSlice';
import { userReducer, userSlice } from '../redux/UserSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, favoriteSlice.reducer);

export const store = configureStore({
  reducer: {
    nanies: naniesReducer,
    favorite: persistedReducer,
    user: userReducer,
  },
});

export const persistor = persistStore(store);
