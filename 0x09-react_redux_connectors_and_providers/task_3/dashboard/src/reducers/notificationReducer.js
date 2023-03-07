import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map, setIn } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

export const initialState = Map({
  notifications: [],
  filter: "DEFAULT"
})

export function notificationReducer(state = initialState, action){
  switch(action.type){
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const notifData = notificationsNormalizer(action.data)
      const notifs = notifData.entities.notifications
      notifData.result.map((id) => notifs[id].isRead = false)
      return state.merge(notifData.entities)
    }
    case MARK_AS_READ:
      return setIn(state.toJS(), ["notifications", action.index, "isRead"], true)
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter)
    default:
      return state
  }
}