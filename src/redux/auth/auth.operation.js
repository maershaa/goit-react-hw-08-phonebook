import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Создание экземпляра Axios с предустановленными параметрами
// 'instance' представляет собой экземпляр Axios, который будет использоваться для всех запросов
// Он создан с помощью axios.create() с определенными настройками, такими как baseURL
// Данный экземпляр будет автоматически добавлять заголовок Authorization к каждому запросу
export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

// Функция setToken устанавливает заголовок Authorization для всех запросов Axios
// Функция setToken позволяет установить токен авторизации, который будет использоваться в этом экземпляре Axios
const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// !Создание санки для асинхронного входа пользователя
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      // Отправка POST-запроса на сервер для входа пользователя
      const { data } = await instance.post('/users/login', formData);
      // Установка токена авторизации в экземпляре Axios
      setToken(data.token);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

// !Создание санки для регистрации нового пользователя
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      // Отправка POST-запроса на сервер для регистрации пользователя
      const { data } = await instance.post('/users/signup', formData);
      // Установка токена авторизации в экземпляре Axios
      setToken(data.token);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

// !Создание санки для выхода пользователя
export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, thunkApi) => {
    try {
      // Отправка POST-запроса на сервер для выхода пользователя
      const { data } = await instance.post('/users/logout');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

// !Создание санки для обновления данных пользователя
export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      // Получение токена из хранилища Redux
      const state = thunkApi.getState();
      const token = state.auth.token;
      // Установка токена авторизации в экземпляре Axios
      setToken(token);
      // Получение текущих данных пользователя с сервера
      const { data } = await instance.get('/users/current');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
  {
    // Условие выполнения санки: проверка на наличие токена в хранилище Redux
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return false; // В случае отсутствия токена выполнение не произойдет
      return true;
    },
  }
);
