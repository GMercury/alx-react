import React from 'react';
import { App, mapStateToProps } from "./App";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import { listCourses } from '../CourseList/CourseList.test';
import { StyleSheetTestUtils } from 'aphrodite';
import { listNotifications } from '../Notifications/Notifications.test'
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

  // it("listNotifications state is updated accordingly, after calling markNotificationAsRead", () => {
  //   // listNotifications state has a length of three
  //   wrapper.setState({listNotifications: listNotifications})
  //   wrapper.instance().markNotificationAsRead(1)
  //   // listNotifications state now has a length of two
  //   expect(wrapper.state('listNotifications').length).toEqual(2)
  // })

})


describe('App Component when isLoggedin is true', () => {
  const wrapper = shallow(<App isLoggedIn={true}/>);

  it("does not render Login component", () => {
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(false)
  })

  it("renders CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList listCourses={listCourses}/>)).toEqual(true)
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