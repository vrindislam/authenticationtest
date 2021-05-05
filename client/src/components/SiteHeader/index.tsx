import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './style.less';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypedSelector';
import { authUser } from '../../store/actionCreators/user';

const SiteHeader: FC = (): JSX.Element => {
  const isAuth = useTypedSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    if (!isAuth) return;
    dispatch(authUser({ isAuthenticated: false }));
    localStorage.removeItem('token');
  };
  return (
    <div className="nav-container">
      <Link className="nav-link" to="/">
        Home
      </Link>
      {isAuth ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
        <div className="logoutBtn" key="logout" role="button" onClick={handleLogout}>
          <span className="logout-title">LogOut</span>
        </div>
      ) : (
        <>
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default SiteHeader;
