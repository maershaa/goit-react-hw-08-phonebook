import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.operation';
import Loader from 'components/Loader/Loader';
// import NotFound from 'pages/NotFound';
import {
  selectAuthIsLoading,
  selectAuthError,
} from 'redux/auth/auth.selectors';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  const onSubmit = async e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    // Dispatch the loginThunk and handle the error response
    try {
      await dispatch(loginThunk(formData));
    } catch (err) {
      // Handle the error here
      console.error('Login failed:', err);
    }
  };

  return (
    <>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <form onSubmit={onSubmit}>
        {isLoading && <Loader />} 
        <label>
          <p>Email:</p>
          <input
            type="email"
            placeholder="hotmail@hotmail.com"
            required
            name="userEmail"
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            placeholder="*******"
            required
            name="userPassword"
            minLength={7}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default Login;
