import { fetchNotificationsSucess, markAsRead, setNotificationFilter } from "../actions/notificationActionCreators"
import { initialState } from './notificationReducer';
import { notificationReducer } from "./notificationReducer";


const action = fetchNotificationsSucess()
const state = {notifications: [...action.data]}
state.filter = "DEFAULT"

describe("notificationReducer function", () => {
  it("the default state returns right data", () => {
    const currentState = notificationReducer(undefined, {})
    expect(currentState).toEqual(initialState)
  })

  it("FETCH_NOTIFICATIONS_SUCCESS action returns the data passed with isRead property set", () =>{
    const currentState = notificationReducer(undefined, fetchNotificationsSucess())
    state.notifications.map((notif)=> notif.isRead = false)
    expect(currentState).toEqual(state)
  })

    it("MARK_AS_READ action returns the data with the right item updated", () =>{
    const index = 2
    const currentState = notificationReducer(state, markAsRead(index))
    state.notifications.map((notif)=>{
      if (notif.id === index) notif.isRead = true
    })
    expect(currentState).toEqual(state)
  })

  it("SET_TYPE_FILTER action returns the data with the right item updated", () =>{
    const index = 2
    const currentState = notificationReducer(state, setNotificationFilter("URGENT"))
    state.filter = "URGENT"
    expect(currentState).toEqual(state)
  })
})