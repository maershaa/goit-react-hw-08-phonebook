import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { StyledLayout } from 'components/Layout/StyledLayout';
import { selectContactsIsLoading, 
  // selectContactsError
 } from 'redux/selectors';
import { selectAuthenticated } from 'redux/auth/auth.selectors';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = ({ children }) => {
  const isLoading = useSelector(selectContactsIsLoading);
  // const error = useSelector(selectContactsError);
  const isAuthenticated = useSelector(selectAuthenticated);
  console.log('isAuthenticated', isAuthenticated);

  return (
    <Suspense fallback={<Loader />}>
      <StyledLayout>
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
                  <NavLink className="headerLink" to="/weather">
                   Weather
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

          {/*  если isAuthenticated равно false, ничего не будет отображаться. */}
          {isAuthenticated ? (
                <UserMenu />
              ) : null}

        </header>

        <div>
          <h1 className="title">Phonebook</h1>
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
