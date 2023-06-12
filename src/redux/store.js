import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { phonebookSlice } from './phonebookSlice';

const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts'],
};
const persistedReducer = persistReducer(persistConfig, phonebookSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
