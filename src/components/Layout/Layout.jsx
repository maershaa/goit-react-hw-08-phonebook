import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { StyledLayout } from 'components/Layout/StyledLayout';
import { selectContactsIsLoading, selectContactsError } from 'redux/selectors';
import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selectors';

import { logOutThunk } from 'redux/auth/auth.operation';

const Layout = ({ children }) => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectAuthenticated);
  console.log('isAuthenticated', isAuthenticated);

  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

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

            {isAuthenticated ? (
              <>
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
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </header>

        <div>
          <h1 className="title">Phonebook</h1>
          {userData && userData.name && <span>Hello, {userData.name}!</span>}
          <button onClick={onLogOut}>Log Out</button>
        </div>
        <main>{children}</main>

        <footer>
          <p className="info">Site crafted by Valeria Maers © 2023</p>
        </footer>
      </StyledLayout>
    </Suspense>
  );
};

export default Layout;
