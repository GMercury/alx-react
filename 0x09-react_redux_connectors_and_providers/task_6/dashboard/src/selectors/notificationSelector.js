import { Map } from "immutable";

export const filterTypeSelected = (state) => state.get("filter")
export const getNotifications = (state) => state.get("notifications")
export const getUnreadNotifications = (state) =>  {
  const data = Map(state.notifications.get("notifications"))
  const notifications = data.valueSeq().filter(v => !v.isRead)
  return notifications.toJS()
}

// const state =  {
//     notifications:  {
//       notifications: Map({
//       '1': {
//         id: 1,
//         type: 'default',
//         value: 'New course available',
//         isRead: false
//       },
//       '2': {
//         id: 2,
//         type: 'urgent',
//         value: 'New resume available',
//         isRead: true
//       },
//       '3': {
//         id: 3,
//         type: 'urgent',
//         value: 'New data available',
//         isRead: false
//       },
//     }),
//     filter: 'DEFAULT'
//   }
// }

// console.log(getUnreadNotifications(state.notifications))
// console.log(d.toJS())