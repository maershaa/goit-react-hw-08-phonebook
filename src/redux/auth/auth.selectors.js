// Селектор для получения данных пользователя из хранилища
export const selectUserData = state => state.auth.userData;

// Селектор для получения статуса авторизации из хранилища
export const selectAuthenticated = state => state.auth.isAuthenticated;

// Селектор для получения статуса загрузки из хранилища
export const selectAuthIsLoading = state => state.auth.isLoading;

// Селектор для получения ошибки авторизации из хранилища
export const selectAuthError = state => state.auth.error;
