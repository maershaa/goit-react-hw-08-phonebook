import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/auth/auth.operation';

// Загрузка всех контактов
export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      // !console.log('fetchContacts', response.data);
      // Возвращаем данные при успешном запросе
      return response.data;
    } catch (e) {
      // При ошибке возвращаем отклоненное значение с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Добавление нового контакта (метод POST)
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, email }, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', { name, email });
      // !console.log('addContact', response.data);
      return response.data;
    } catch (error) {
      // В случае ошибки возвращаем отклоненное значение с текстом ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Удаление контакта (метод DELETE)
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      // !console.log('deleteContact contactId', contactId);
      // !console.log('deleteContact data', data);
      return data;
    } catch (error) {
      // В случае ошибки возвращаем отклоненное значение с текстом ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Изменение статуса "избранного" у контакта (метод PUT)
export const toggleIsFavourite = createAsyncThunk(
  'contacts/toggleIsFavourite',
  async (contactId, thunkAPI) => {
    try {
      const response = await instance.get(`/contacts/${contactId}`);
      const { isFavourite } = response.data;

      // Обновляем статус "избранного" на противоположный
      const updatedResponse = await axios.put(`/contacts/${contactId}`, {
        isFavourite: !isFavourite,
      });
      console.log('toggleIsFavourite', updatedResponse.data);
      // Возвращаем обновленные данные контакта
      return updatedResponse.data;
    } catch (error) {
      // В случае ошибки возвращаем отклоненное значение с текстом ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
