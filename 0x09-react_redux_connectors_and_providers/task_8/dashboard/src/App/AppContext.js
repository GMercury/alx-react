import React from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
}

export const logOut = () => {}

export const AppContext = React.createContext({
  user: defaultUser,
  logOut: logOut
})