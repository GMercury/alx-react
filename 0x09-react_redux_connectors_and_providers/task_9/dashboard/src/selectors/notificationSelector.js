import { createSelector } from "reselect"


export const filterTypeSelected = (state) => state.notifications.get("filter")
export const getNotifications = (state) => state.notifications.get("notifications")

export const getUnreadNotificationsByType = createSelector([filterTypeSelected, getNotifications], (filter, notifications) => {
  let notifs = [] 
  if (filter == "DEFAULT") {
    notifs = notifications.valueSeq().filter(v => !v.isRead)
   } else if (filter == "URGENT") {
    notifs = notifications.valueSeq().filter(v => !v.isRead && v.type == "urgent")
   }
   return notifs
})
