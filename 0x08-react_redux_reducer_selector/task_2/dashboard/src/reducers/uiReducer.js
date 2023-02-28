import { Map } from "immutable";
import { LOGOUT, DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes'

// Install Immutable.js within the project
// Update the uiReducer.js file to use Map from Immutable.js
// Update the different part of the reducer function to use set from Map
// Update the test suite, so it takes into account the changes

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
})

export function uiReducer(state = initialState, action) {
  switch(action.type){
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true)
    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false)
    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true)
    case LOGIN_FAILURE: 
    case LOGOUT:
      return state.set("isUserLoggedIn", false)
    default:
      return state
  }
}
