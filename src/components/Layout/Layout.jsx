import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { StyledLayout } from 'components/Layout/StyledLayout';
import { selectContactsIsLoading, selectContactsError } from 'redux/selectors';

const Layout = ({ children }) => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  return (
    <Suspense fallback={<Loader />}>
      <StyledLayout>
        {error !== null && (
          <p className="errorBadge">
            Oops, some error occurred... Error message: {error}
          </p>
        )}

        {isLoading && <Loader />}

        <header className="headerContainer">
          <ul className="list">
            <li>
              <NavLink className="headerLink" to="/">
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink className="headerLink" to="/login">
                Log in
              </NavLink>
            </li>

            <li>
              <NavLink className="headerLink" to="/register">
                Registration
              </NavLink>
            </li>

            <li>
              <NavLink className="headerLink" to="/contacts">
                Contact List
              </NavLink>
            </li>
            <li>
              <NavLink className="headerLink" to="/addContact">
                Add new contact
              </NavLink>
            </li>
            <li>
              <NavLink className="headerLink" to="/favouriteContacts">
                Favourite contacts
              </NavLink>
            </li>
          </ul>
        </header>

        <h1 className="title">Phonebook</h1>

        <main>{children}</main>

        <footer>
          <p className="info">Site crafted by Valeria Maers © 2023</p>
        </footer>
      </StyledLayout>
    </Suspense>
  );
};

export default Layout;
