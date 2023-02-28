import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";

export const initialState = {
    notifications: [],
    filter: "DEFAULT"
}

export function notificationReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const notifs = action.data.map((item)=> ({...item}))
            notifs.map((notif) => notif.isRead = false)
            return {...state, notifications: notifs}
        }
        case MARK_AS_READ: {
            const notifUpdate = [...state.notifications]
            notifUpdate.map((notif)=> {
              if (notif.id === action.index) notif.isRead = true
            })
            return {...state, notifications: notifUpdate}
        }
        case SET_TYPE_FILTER: {
            return {
              ...state,
              filter: action.filter
            }
        }
        default:
            return state
    }
}