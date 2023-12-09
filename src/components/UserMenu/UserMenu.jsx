import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/auth.selectors';
import { logOutThunk } from 'redux/auth/auth.operation';
import { StyledUserMenu } from 'components/UserMenu/StyledUserMenu';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <StyledUserMenu>
      <button onClick={onLogOut} className="logOutBtn">
        Log Out
      </button>
      {userData && <p className="authText">Authorized as: {userData.email}</p>}
    </StyledUserMenu>
  );
};

export default UserMenu;
