import { Map } from "immutable";

export const filterTypeSelected = (state) => state.get("filter")
export const getNotifications = (state) => state.get("notifications")
export const getUnreadNotifications = (state) =>  {
  const notifications = { ...state.get("notifications")}
  Object.keys(notifications).map((id) => {
    if (notifications[id].isRead) delete notifications[id]
  })
  return notifications
}

// const d =  Map({
//   notifications: {
//     '1': {
//       id: 1,
//       type: 'default',
//       value: 'New course available',
//       isRead: false
//     },
//     '2': {
//       id: 2,
//       type: 'urgent',
//       value: 'New resume available',
//       isRead: true
//     },
//     '3': {
//       id: 3,
//       type: 'urgent',
//       value: 'New data available',
//       isRead: false
//     }
//   },
//   filter: 'DEFAULT'
// })

// console.log(getUnreadNotifications(d))
// console.log(d.toJS())