import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';


export function login(email, password) {
  return { type: LOGIN, user: {email, password}}
}

export function logout() {
  return { type: LOGOUT }
}

export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER }
}

export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER }
}

export function loginSuccess() {
  return { type: LOGIN_SUCCESS }
}

export function loginFailure() {
  return { type: LOGIN_FAILURE }
}

// export const dispatchLogin = (email, password) => dispatch(login(email, password))
// export const dispatchLogout = () => dispatch(logout())
// export const dispatchDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer())
// export const dispatchHideNotificationDrawer = () => dispatch(hideNotificationDrawer())

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password))
    return fetch('/login-success.json')
      .then((response) => response.json())
      .then((response) => dispatch(loginSuccess()))
      .catch((error)=> dispatch(loginFailure()))
  }
}
