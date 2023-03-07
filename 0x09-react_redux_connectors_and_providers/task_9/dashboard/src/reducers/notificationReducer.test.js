import { markAsRead, setLoadingState, setNotificationFilter } from "../actions/notificationActionCreators"
import { initialState } from './notificationReducer';
import { notificationReducer } from "./notificationReducer";
import { Map } from "immutable"


describe("notificationReducer function", () => {
  it("the default state returns right data", () => {
    const currentState = notificationReducer(undefined, {})
    expect(currentState).toEqual(initialState)
  })

  it("MARK_AS_READ action returns the data with the right item updated", () =>{
    const state = Map({
        "notifications": {
          "1": {
            "guid": "1",
            "isRead": false,
            "type": "urgent",
            "value": "Test Message"
          }
        },
      "filter": "DEFAULT",
      "loading": false
    })
    const index = 2
    const currentState = notificationReducer(state, markAsRead(index))
    expect(currentState.toJS().notifications[index].isRead).toEqual(true)
  })

  it("SET_TYPE_FILTER action returns the data with the right item updated", () =>{
    const currentState = notificationReducer(undefined, setNotificationFilter("URGENT"))
    expect(currentState.toJS().filter).toEqual("URGENT")
  })

  it("SET_LOADING_STATE action returns the data with the right item updated", () =>{
    const currentState = notificationReducer(undefined, setLoadingState(true))
    expect(currentState.toJS().loading).toBe(true)
  })
})