import { fromJS, Map } from "immutable"
import { fetchNotificationsSucess } from "../actions/notificationActionCreators"
import { notificationReducer } from "../reducers/notificationReducer"
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector"

const state = notificationReducer(undefined, fetchNotificationsSucess())

test("selector: filterTypeSelected, returns filter property in state", ()=>{
  const selectedFilterType = filterTypeSelected(state) 
  expect(selectedFilterType).toEqual(state.get("filter"))
})

test("selector: selectedNotifications, returns all notifcations present in state", ()=>{
  const selectedNotifications = getNotifications(state) 
  expect(selectedNotifications).toEqual(state.get("notifications"))
})

test("selector: getUnreadNotifications, returns all unread(isRead: false) notifcations present in state", ()=>{
  let newState = {
    notifications: Map({
      notifications: {
        '1': { id: 1, type: 'urgent', value: 'New data available', isRead: true },
        '2': { id: 2, type: 'urgent', value: 'New data available', isRead: false }
      },
      filter:"URGENT"
    })
  }
let expected = [
  { id: 2, type: 'urgent', value: 'New data available', isRead: false }
]
  const selectedUnread = getUnreadNotifications(newState) 
  expect(selectedUnread).toEqual(expected)
})