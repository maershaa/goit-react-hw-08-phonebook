import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.operation';
import {
  selectAuthIsLoading,
  selectAuthError,
} from 'redux/auth/auth.selectors';
import Loader from 'components/Loader/Loader';
import css from 'pages/LoginaAndRegister.module.css';


const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  // Функция обработки отправки формы регистрации
  const onSubmit = e => {
    e.preventDefault(); // Предотвращение стандартного поведения формы
    // Получение значений полей формы
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name: typeof name === 'string' ? name.trim() : name,
      email: typeof email === 'string' ? email.trim() : email,
      password: typeof password === 'string' ? password.trim() : password,
    };

      // Проверка длины пароля
  if (password.length < 7) {
    alert('Пароль должен содержать минимум 7 символов');
    return;
  }
    // Отправка данных формы в хранилище для регистрации
    dispatch(registerThunk(formData));
  };

  return (
    <form onSubmit={onSubmit}>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {isLoading && <Loader />} 
      <label htmlFor="text" className={css.formLabel}>
        <p className={css.labelTitle}>Name:</p>
        <input type="text" placeholder="Full name" required name="userName"             className={css.inputText}
/>
      </label>
      <label htmlFor="email" className={css.formLabel}>
        <p className={css.labelTitle}>Email:</p>
        <input
          type="email"
          placeholder="Email adress"
          required
          name="userEmail"
          className={css.inputText}
        />
      </label>
      <label htmlFor="password" className={css.formLabel}>
        <p className={css.labelTitle}>Password:</p>
        <input
          type="password"
          placeholder="Password"
          required
          name="userPassword"
          className={css.inputText}
        />
      </label>
      <br />
      <button type="submit"  className={css.signUpButton}>Sign Up</button>
    </form>
  );
};

export default Register;
