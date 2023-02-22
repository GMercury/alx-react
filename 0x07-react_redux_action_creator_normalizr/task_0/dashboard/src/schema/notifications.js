// mport the JSON data from notifications.json
// return: list containing all the context objects filtered by userid

import * as notificationItem from "../../notifications.json";

export const getAllNotificationsByUser = (userId) => {
  return notificationItem.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};
