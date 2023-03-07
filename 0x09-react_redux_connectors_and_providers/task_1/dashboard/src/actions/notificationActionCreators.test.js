import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes'

test('markAsRead()', ()=>{
  const action = markAsRead(1)
  expect(action).toEqual({ type: MARK_AS_READ, index: 1 })
})

test('setNotificationFilter()', ()=>{
  const action = setNotificationFilter(NotificationTypeFilters.DEFAULT)
  expect(action).toEqual({ type: SET_TYPE_FILTER, filter:"DEFAULT" })
})
