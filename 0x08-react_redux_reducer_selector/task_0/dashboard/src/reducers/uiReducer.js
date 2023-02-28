import { LOGOUT DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
// Create the basic state
// In a file named reducers/uiReducer.js, define the initial state of the reducer for the UI:
// It should have one boolean property isNotificationDrawerVisible
// It should have one boolean property isUserLoggedIn
// It should have one empty object user
// Create the reducer function
// In the same file, import all the actions that you created in the file actions/uiActionTypes and create a reducer function named uiReducer:
// DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
// HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
// LOGIN_SUCCESS should set isUserLoggedIn to true
// LOGIN_FAILURE should set isUserLoggedIn to false
// LOGOUT should set isUserLoggedIn to false

export const initialState = () => {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true
            }
        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true
            }
        case LOGIN_FAILURE:
            return {
                ..state,
                isUserLoggedIn: false
            }
        case LOGOUT:
            return {
                ..state,
                isUserLoggedIn: false
            }
        default:
            return state
    }
}
