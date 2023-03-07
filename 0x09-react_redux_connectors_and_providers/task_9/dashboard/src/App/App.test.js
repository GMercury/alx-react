import React from 'react';
import { App, mapStateToProps } from "./App";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});


describe('App Component', () => {
  let wrapper = shallow(<App />);
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true)
  })

  it("should contain the Header component", () => {
    expect(wrapper.containsMatchingElement(<Header/>)).toEqual(true)
  })

  it("should contain the Login component", () => {
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(true)
   })

  it("should contain the Footer component", () => {
    expect(wrapper.containsMatchingElement(<Footer/>)).toEqual(true)
   })

  it("does not render CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList/>)).toEqual(false)
  })

})


describe('App Component when isLoggedin is true', () => {
  const wrapper = shallow(<App isLoggedIn={true}/>);

  it("does not render Login component", () => {
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(false)
  })

  it("renders CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList/>)).toEqual(true)
  })
})

describe("mapStateToProps function", () => {
    test("mapStateToProps function", () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true
      })
    };
    const obj = mapStateToProps(state)
    expect(obj).toEqual({ isLoggedIn: true, displayDrawer: true })
  })
})