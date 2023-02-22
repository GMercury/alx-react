import * as notificationItem from "../../notifications.json";
import { normalize, schema } from 'normalizr';


export const getAllNotificationsByUser = (userId) => {
  return notificationItem.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};

// Define a users schema
const user = new schema.Entity('users');

// Define a message schema
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define a notification schema
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(notificationItem.default, [notification])
