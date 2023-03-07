import { Map } from "immutable"
import { filterTypeSelected, getNotifications, getUnreadNotificationsByType } from "./notificationSelector"

const state = {
  notifications: Map({
    notifications: Map({
      '1': { id: 1, type: 'default', value: 'New data available', isRead: true },
      '2': { id: 2, type: 'urgent', value: 'New data available', isRead: false }
    }),
    filter:"URGENT"
  })
}

test("selector: filterTypeSelected, returns filter property in state", ()=>{
  const selectedFilterType = filterTypeSelected(state) 
  expect(selectedFilterType).toEqual(state.notifications.get("filter"))
})

test("selector: selectedNotifications, returns all notifcations present in state", ()=>{
  const selectedNotifications = getNotifications(state) 
  expect(selectedNotifications).toEqual(state.notifications.get("notifications"))
})

test("reselector: getUnreadNotificationsByType, returns unread urgent notifications when the filter is set to 'URGENT'", ()=>{
  let expected = [
    { id: 2, type: 'urgent', value: 'New data available', isRead: false }
  ]
  const selectedUnread = getUnreadNotificationsByType(state) 
  expect(selectedUnread.toJS()).toEqual(expected)
})