import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginRequest, loginFailure } from './uiActionCreators'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from "fetch-mock-jest"

const mockStore = configureStore([thunk])


afterEach(() => {
  fetchMock.restore();
});

test("login() returns correct action object", ()=>{
  const action = login('geremi@gmail.com', "sleeper343")
  expect(action).toEqual({ type: "LOGIN", user: { email: 'geremi@gmail.com', password:"sleeper343"}})
})

test("logout() returns correct action object", ()=>{
  const action = logout()
  expect(action).toEqual({ type: "LOGOUT"})
})

test("displayNotificationDrawer() returns correct action object", ()=>{
  const action = displayNotificationDrawer()
  expect(action).toEqual({ type: "DISPLAY_NOTIFICATION_DRAWER"})
})

test("hideNotificationDrawer returns correct action object", ()=>{
  const action = hideNotificationDrawer()
  expect(action).toEqual({ type: "HIDE_NOTIFICATION_DRAWER"})
})

test("API returns the right response, the store received two actions LOGIN and LOGIN_FAILURE", () => {
  const store = mockStore({})
  fetchMock.get('*', {})
  const actions = []
  return store.dispatch(loginRequest('jack', 124)).then(()=>{
    expect(store.getActions()).toEqual([login('jack', 124), loginSuccess()])
  })
})


test("if API query fails, the store received two actions LOGIN and LOGIN_FAILURE", () => {
  const store = mockStore({})
  fetchMock.get('*', 500)

  return store.dispatch(loginRequest('jack', 124)).then(()=>{
    const actions = store.getActions()
    expect(actions).toEqual([login('jack', 124), loginFailure()])
  })
})
