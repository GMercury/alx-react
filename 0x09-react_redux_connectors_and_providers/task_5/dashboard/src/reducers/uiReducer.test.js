import { initialState, uiReducer } from './uiReducers';
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { LOGOUT, DISPLAY_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE } from '../actions/uiActionTypes'
import { fromJS } from "immutable";

const initState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: true,
  user: {}
}

describe("test uiReducer function", () => {
  it("(uiReducer function) returns state equals the initial state when no action is passed", ()=>{
    const currentState = uiReducer(undefined, {})
    expect(currentState).toEqual(initialState)
  })

  it("(uiReducer function) returns state equals the initial state when action SELECT_COURSE is passed", ()=>{
    const currentState = uiReducer(undefined, { type: SELECT_COURSE })
    expect(currentState).toEqual(initialState)
  })

  it("(uiReducer function) returns state equals the initial state when action DISPLAY_NOTIFICATION_DRAWER is passed", ()=>{
    const currentState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })
    const expectedState = { isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  it(`returns state changes isUserLoggedIn property correctly when action LOGIN_FAILURE is passed`, ()=>{
    const currentState = uiReducer(fromJS(initState), { type: LOGIN_FAILURE })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  it(`returns state changes isUserLoggedIn property correctly when action LOGOUT is passed`, () => {
    const currentState = uiReducer(fromJS(initState), { type: LOGOUT })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: null }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  it(`returns state changes user object property correctly when action LOGIN is passed`, () => {
    const email = "jack@test.com"
    const password = "strongpwd"
    const currentState = uiReducer(fromJS(initState), { type: LOGIN, user: {email, password} })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: true, user: {email, password} }
    expect(currentState.toJS()).toEqual(expectedState)
  })
  
  
})