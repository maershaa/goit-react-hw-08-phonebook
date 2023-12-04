import { LOGIN_ROUTE } from 'constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

// Создание компонента PrivateRoute
const PrivateRoute = ({ children, navigateTo = LOGIN_ROUTE }) => {
  // Получение статуса аутентификации из хранилища Redux
  const authenticated = useSelector(selectAuthenticated);

  // Проверка статуса аутентификации:
  // Если пользователь аутентифицирован, отображает переданные дочерние компоненты (children)
  // Если пользователь не аутентифицирован, перенаправляет на указанный маршрут (navigateTo)
  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;
