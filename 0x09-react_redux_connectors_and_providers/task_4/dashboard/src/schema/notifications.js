import * as data from '../../notifications.json';
import { normalize, schema } from "normalizr";



// const d={
//   data: [
//     {
//       id: 1,
//       type: "default",
//       value: "New course available"
//     },
//     {
//       id: 2,
//       type: "urgent",
//       value: "New resume available"
//     },
//     {
//       id: 3,
//       type: "urgent",
//       value: "New data available"
//     }
//   ]
// }
// console.log(notificationsNormalizer(d.data))

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, {
  idAttribute: "guid"
})
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})

export const normalizedData = normalize(data.default, [notification])
export const getAllNotificationsByUser = (userId) =>{
  let userNotifs = []
  const notifications = normalizedData.entities.notifications
  const messages = normalizedData.entities.messages
  const NotifIdList = normalizedData.result.filter((notifId)=>notifications[notifId].author == userId)
  NotifIdList.forEach((id)=>userNotifs.push(messages[notifications[id].context]))
  return userNotifs
}

export function notificationsNormalizer(data) {
  const notification = new schema.Entity("notifications")
  const normalizedData = normalize(data, [notification])
  return normalizedData
}