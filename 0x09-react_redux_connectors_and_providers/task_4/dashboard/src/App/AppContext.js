import React from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
}

export const logOut = () => {
  console.log("logged out..")
}

export const AppContext = React.createContext({
  user: defaultUser,
  logOut: logOut
})