import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map } from "immutable";


export const initialState = Map({
  notifications: Map({}),
  filter: "DEFAULT",
  loading: false
})

export function notificationReducer(state = initialState, action){
  switch(action.type){
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep(Map({notifications: action.data}))
    case MARK_AS_READ:
      return state.setIn(["notifications", action.index, "isRead"], true)
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter)
    case SET_LOADING_STATE:
      return state.set("loading", action.loading)
    default:
      return state
  }
}