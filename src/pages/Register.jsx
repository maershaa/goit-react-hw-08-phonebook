import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.operation';

const Register = () => {
  const dispatch = useDispatch();

  // Функция обработки отправки формы регистрации
  const onSubmit = e => {
    e.preventDefault(); // Предотвращение стандартного поведения формы
    // Получение значений полей формы
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      name,
      email,
      password,
    };

    // Отправка данных формы в хранилище для регистрации
    dispatch(registerThunk(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Name:</p>
        <input type="text" placeholder="Full name" required name="userName" />
      </label>
      <label>
        <p>Email:</p>
        <input
          type="email"
          placeholder="Email adress"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          placeholder="Password"
          required
          name="userPassword"
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Register;
