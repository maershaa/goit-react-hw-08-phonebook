// ! ПРИМЕР
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer } from 'redux/reducer';
import { authReducer } from './auth/auth.reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  contactsStore: contactsReducer,
});

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: rootReducer, // Передача корневого редюсера
  auth: persistReducer(authConfig, authReducer),

  devTools: process.env.NODE_ENV !== 'production', // Включение DevTools только в development-среде
});
export const persistor = persistStore(store);
