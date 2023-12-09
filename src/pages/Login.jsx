import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.operation';
import Loader from 'components/Loader/Loader';
// import NotFound from 'pages/NotFound';
import {
  selectAuthIsLoading,
  selectAuthError,
} from 'redux/auth/auth.selectors';
import css from 'pages/LoginaAndRegister.module.css';


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
{error && <p style={{ color: 'green' }}>Invalid username or password</p>}
      <form onSubmit={onSubmit} className={css.form}>
        {isLoading && <Loader />} 
        <label htmlFor="email" className={css.formLabel}>
          <p className={css.labelTitle}>Email:</p>
          <input
            type="email"
            placeholder="hotmail@hotmail.com"
            required
            name="userEmail"
            className={css.inputText}

          />
        </label>
        <label htmlFor="password" className={css.formLabel}>
          <p className={css.labelTitle}>Password:</p>
          <input
            type="password"
            placeholder="*******"
            required
            name="userPassword"
            minLength={7}
            className={css.inputText}
            
          />
        </label>
        <br />
        <button type="submit"
        
        className={css.signInButton}

        >Sign In</button>
      </form>
    </>
  );
};

export default Login;
