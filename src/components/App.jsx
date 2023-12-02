import React, {
  // useState,
  useEffect,
  Suspense,
  lazy,
} from 'react';
import {
  // Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation';
// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/Contacts/ContactsList';
// import Filter from 'components/Filter/Filter';
// import css from './App.module.css';
import Layout from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const FavouriteContactsPage = lazy(() => import('pages/FavouriteContactsPage'));
const AddConactPage = lazy(() => import('pages/AddConactPage'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  // Локальное состояние для отслеживания активной вкладки
  const dispatch = useDispatch();

  // !размещено тут чтобы если списко контатков не изменился, то и запрос по 100 раз делать не нужно
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/favouriteContacts"
            element={<FavouriteContactsPage />}
          />
          <Route path="/addContact" element={<AddConactPage />} />
          <Route path="*" element={<NotFound />} />
          {/* Страница 404 */}
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default App;
