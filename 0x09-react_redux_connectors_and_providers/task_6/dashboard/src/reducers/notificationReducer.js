import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map, setIn } from "immutable";


export const initialState = Map({
  notifications: {},
  filter: "DEFAULT",
  loading: false
})

export function notificationReducer(state = initialState, action){
  switch(action.type){
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({notifications: action.data})
    case MARK_AS_READ:
      return setIn(state, ["notifications", action.index, "isRead"], true)
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter)
    case SET_LOADING_STATE:
      return state.set("loading", action.loading)
    default:
      return state
  }
}