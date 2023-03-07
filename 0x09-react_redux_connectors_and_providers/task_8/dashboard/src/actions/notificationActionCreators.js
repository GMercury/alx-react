import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from './notificationActionTypes'

export function markAsRead(index) {
  return { type: MARK_AS_READ, index }
}

export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter}
}

export function fetchNotificationsSucess() {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ]
  }
}

export function setLoadingState(loading){
  return { type: SET_LOADING_STATE, loading }
}

export function setNotifications(data=[]){
  return { type: FETCH_NOTIFICATIONS_SUCCESS, data }
}

export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true))
    return fetch('/notifications.json')
    .then((response) => response.json())
    .then((data) => {
      dispatch(setNotifications(data))
      dispatch(setLoadingState(false))
    })
  }
}
