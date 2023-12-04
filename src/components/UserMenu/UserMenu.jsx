import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserData } from 'redux/auth/auth.selectors';

import { logOutThunk } from 'redux/auth/auth.operation';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <p>{userData.email}</p>
      <button onClick={onLogOut}>Log Out</button>{' '}
    </div>
  );
};

export default UserMenu;
