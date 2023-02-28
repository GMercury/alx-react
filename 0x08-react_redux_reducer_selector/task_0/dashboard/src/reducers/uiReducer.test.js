import { initialState, uiReducer } from './uiReducers';
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { LOGOUT, DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';
// Write a test verifying the state returned by the uiReducer function equals the initial state when no action is passed
// Write a test verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed
// Write a test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property

const state = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: true,
    user: {}
}

describe("test uiReducer function", () => {
  it("(uiReducer function) returns state equals the initial state when no action is passed", ()=>{
    const currentState = uiReducer(initialState, {})
    expect(currentState).toEqual(initialState)
  })

  it("(uiReducer function) returns state equals the initial state when action SELECT_COURSE is passed", ()=>{
    const currentState = uiReducer(initialState, { type: SELECT_COURSE })
    expect(currentState).toEqual(initialState)
  })

  it("(uiReducer function) returns state equals the initial state when action DISPLAY_NOTIFICATION_DRAWER is passed", ()=>{
    const currentState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })
    const expectedState = { isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} }
    expect(currentState).toEqual(expectedState)
  })

  it(`returns state changes isUserLoggedIn property correctly when action LOGIN_FAILURE is passed`, ()=>{
    const currentState = uiReducer(state, { type: LOGIN_FAILURE })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} }
    expect(currentState).toEqual(expectedState)
  })

  it(`returns state changes isUserLoggedIn property correctly when action LOGOUT is passed`, () => {
    const currentState = uiReducer(state, { type: LOGOUT })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} }
    expect(currentState).toEqual(expectedState)
  })
})
