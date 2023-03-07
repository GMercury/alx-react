import React from 'react';
import App, { mapStateToProps } from "./App";
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

let wrapper = shallow(<App />);
describe('App Component', () => {
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

  it("default state for displayDrawer is false and is updated to true after calling handleDisplayDrawer", () => {
    expect(wrapper.state('displayDrawer')).toBe(false)
    wrapper.instance().handleDisplayDrawer()
    expect(wrapper.state('displayDrawer')).toBe(true)
  })

  it("state is updated to be false, after calling handleHideDrawer", () => {
    wrapper.setState({displayDrawer: true})
    wrapper.instance().handleHideDrawer()
    expect(wrapper.state('displayDrawer')).toBe(false)
  })

  it("state is updated accordingly, after calling logIn", () => {
    wrapper.instance().logIn("jack", "badpassword")
    // user details are set and isLoggedIn is now set to true
    expect(wrapper.state('user')).toEqual({"email": "jack", "isLoggedIn": true, "password": "badpassword"})
  })

  it("state is updated accordingly, after calling logOut", () => {
    wrapper.instance().logOut()
    // default user details are set with isLoggedIn set to false
    expect(wrapper.state('user')).toEqual({"email": "", "isLoggedIn": false, "password": ""})
  })

  it("listNotifications state is updated accordingly, after calling markNotificationAsRead", () => {
    // listNotifications state has a length of three
    wrapper.setState({listNotifications: listNotifications})
    wrapper.instance().markNotificationAsRead(1)
    // listNotifications state now has a length of two
    expect(wrapper.state('listNotifications').length).toEqual(2)
  })

  // it('alerts and calls func', () =>{
  //   jest.spyOn(window, 'alert').mockImplementation(() => {});
  //   const spy = jest.spyOn(App.prototype, 'alert')
  //   const wrap = mount(<App logOut={()=>console.log('test')}/>)
  //   // global.alert = jest.fn();
  //   // console.log(App.prototype.alert())
  //   // console.log(wrap.alert())
  //   const event = new KeyboardEvent('keydown', {key:'h', ctrlKey: true})
  //   console.log(window.dispatchEvent(event))
    
  //   expect(window.alert).toHaveBeenCalledTimes(1);
  //   // console.log(wrap.html())
  // })


})

const wrapper_isLoggedIn = shallow(<App/>);
describe('App Component when isLoggedin is true', () => {
  it("does not render Login component", () => {
    wrapper_isLoggedIn.setState({user:{email:'', password:'', isLoggedIn:true}})
    expect(wrapper_isLoggedIn.containsMatchingElement(<Login/>)).toEqual(false)
  })

  it("renders CourseList component", () => {
    expect(wrapper_isLoggedIn.containsMatchingElement(<CourseList listCourses={listCourses}/>)).toEqual(true)
  })
})

test("mapStateToProps function", () => {
  let state = fromJS({
    isUserLoggedIn: true
  });  
  const obj = mapStateToProps(state)
  expect(obj).toEqual({ isLoggedIn: true })
})