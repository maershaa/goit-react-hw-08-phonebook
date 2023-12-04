import React, {
  // useState,
  useEffect,
  Suspense,
  lazy,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation';

import Layout from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';

import { refreshThunk } from 'redux/auth/auth.operation';

import * as ROUTES from 'constants/routes';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));
const FavouriteContactsPage = lazy(() => import('pages/FavouriteContactsPage'));
const AddConactPage = lazy(() => import('pages/AddConactPage'));
const NotFound = lazy(() => import('pages/NotFound'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.LOGIN_ROUTE}>
        <Register />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <Contacts />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.FAVOURITES_ROUTE,
    element: (
      <PrivateRoute>
        <FavouriteContactsPage />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.ADD_CONTACT_ROUTE,
    element: (
      <PrivateRoute>
        <AddConactPage />
      </PrivateRoute>
    ),
  },
];

const App = () => {
  // Локальное состояние для отслеживания активной вкладки
  const dispatch = useDispatch();

  // !размещено тут чтобы если списко контатков не изменился, то и запрос по 100 раз делать не нужно
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFound />} /> {/* Страница 404 */}
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default App;
