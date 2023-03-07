import { fetchNotificationsSucess, markAsRead, setNotificationFilter } from "../actions/notificationActionCreators"
import { initialState } from './notificationReducer';
import { notificationReducer } from "./notificationReducer";


describe("notificationReducer function", () => {
  it("the default state returns right data", () => {
    const currentState = notificationReducer(undefined, {})
    expect(currentState).toEqual(initialState)
  })

  it("FETCH_NOTIFICATIONS_SUCCESS action returns the data passed with isRead property set", () => {
    const currentState = notificationReducer(undefined, fetchNotificationsSucess())
    const state = currentState.toJS()
    Object.keys(state.notifications).forEach((id) => {
      expect(state.notifications[id].isRead).toBe(false)
    })
  })

    it("MARK_AS_READ action returns the data with the right item updated", () =>{
    const state = notificationReducer(undefined, fetchNotificationsSucess())
    const index = 2
    const currentState = notificationReducer(state, markAsRead(index))
    expect(currentState.notifications[index].isRead).toEqual(true)
  })

  it("SET_TYPE_FILTER action returns the data with the right item updated", () =>{
    const currentState = notificationReducer(undefined, setNotificationFilter("URGENT"))
    expect(currentState.toJS().filter).toEqual("URGENT")
  })
})