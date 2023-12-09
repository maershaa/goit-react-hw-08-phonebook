import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  console.log('selectContacts in selectors.js:', state.contacts.contacts.items);
  return state.contacts.contacts.items;
};

export const selectContactsIsLoading = state => {
  // console.log('Contacts Loading:', state.contacts.contacts.isLoading);
  return state.contacts.contacts.isLoading;
};

export const selectContactsError = state => {
  // console.log('Contacts Error:', state.contacts.contacts.error);
  return state.contacts.contacts.error;
};

// !Селектор для получения статуса "избранности" контакта по его идентификатору
// Селектор для получения статуса "избранности" контакта по его ID
export const selectContactsIsFavourite = (state, contactId) => {
  // console.log('Contact ID:', contactId);

  // Найти контакт в массиве контактов по идентификатору
  const contact = state.contacts.contacts.items.find(contact => contact.id === contactId);

  // Логирование найденного контакта
  console.log('Contact in selector isFavourite:', contact);

  // если contact существует (не является null или undefined), будет возвращено значение contact.isFavouriteБ, а иначе будет возвращено false.
  return contact ? contact.isFavourite : false;
};

// Селектор для получения списка избранных контактов
export const selectContactsFavouriteContacts = state => {
  // Логирование списка избранных контактов
  // console.log('Favorite Contacts:', state.contacts.contacts.favouriteContacts);
  return state.contacts.contacts.favouriteContacts;
};

// Селектор для получения значения фильтра
export const selectFilter = state => {

  // Логирование значения фильтра
  // console.log('Filter Word:', state.filterWord);
  return state.contacts.filterWord;
};

// Создание селектора для фильтрации контактов
export const selectFilteredContacts = createSelector(
    // Зависимости для селектора: selectContacts - селектор контактов, selectFilter - селектор фильтра
  [selectContacts, selectFilter],
    // Функция, которая принимает данные из селекторов и применяет фильтрацию
  (contacts, filterWord) => {

   // Логирование контактов и значения фильтрации
  //  console.log('Contacts for Filtering:', contacts);
  //  console.log('Filter Word for Filtering:', filterWord);

    // Проверяем, что filterWord не равен undefined, иначе возвращаем пустой массив
    if (filterWord === undefined) {
      return contacts;
    }

        // Приводим значение фильтра к нижнему регистру и удаляем лишние пробелы
    const formattedFilterWord = filterWord.toLowerCase().trim();

     // Фильтрация контактов:
    // Возвращаем только те контакты, чьи имена или номера телефонов содержат значение форматированного фильтра
    return contacts.filter(
      contact =>
      contact.name.toLowerCase().includes(formattedFilterWord) || // Проверка наличия форматированного фильтра в имени контакта
      contact.number.toString().includes(formattedFilterWord) // Проверка наличия форматированного фильтра в номере телефона контакта
    );
  }
);

