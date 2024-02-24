import { configureStore } from '@reduxjs/toolkit';
import { naniesReducer } from './NaniesSlice';
import { favoriteSlice } from './FavoriteSlice';
import { userReducer } from './UserSlice';
import { filterReducer } from './FilterSlice';
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
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
