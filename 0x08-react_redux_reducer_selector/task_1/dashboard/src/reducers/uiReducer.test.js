import { initialState, uiReducer } from './uiReducers';
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { LOGOUT, DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes'
import { fromJS } from "immutable";

// You can use the toJS function within your tests for an easy comparison
// Remember that Immutable.js always return a new Map after a modification

const state = fromJS({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: true,
  user: {}
})

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
    const currentState = uiReducer(state, { type: LOGIN_FAILURE })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  it(`returns state changes isUserLoggedIn property correctly when action LOGOUT is passed`, () => {
    const currentState = uiReducer(state, { type: LOGOUT })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} }
    expect(currentState.toJS()).toEqual(expectedState)
  })
})