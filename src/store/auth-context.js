import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  role: '',
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const [roles, setRoles] = useState('');
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const loginHandler = (token, role) => {
    localStorage.setItem('token', token);
    setToken(token);
    setRoles(role);
  };

  const contextValue = {
    token,
    roles,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
