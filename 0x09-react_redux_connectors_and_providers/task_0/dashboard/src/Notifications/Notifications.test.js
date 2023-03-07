import React from 'react';
import Notifications from "./Notifications";
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});

export const listNotifications = [
  {id: 1, type:"default", value: "New course available", html:{__html:null}},
  {id: 2, type:"urgent", html:{__html:"Object Oriented Programming intro"}},
  {id: 3, type:"default", value: "Present Javascript project requirements test on Friday"}
]

const notifLength = listNotifications.length
// console.log(newListNotif)
const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
describe(`Notifications Component when displayDrawer prop is true
and listNotifications prop is not empty`, () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true)
  })

  it("renders Notifications div", () => {
    expect(wrapper.find('.Notifications_t7a4fk').exists()).toEqual(true)
  })

  it("renders three list items", () => {
    expect(wrapper.find('ul').children().length).toEqual(notifLength);
  })

  it("renders the text: 'Here is the list of notifications:'", () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications:</p>)).toEqual(true);
  })

  it("renders first NotificationItem element with the right html", () => {
    const firstChild = wrapper.find('ul').children().first();
    // console.log(firstChild.html())
    expect(firstChild.html()).toBe('<li class="default_15qxxom-o_O-listItem_1fp99j6" data-notification-type="default">New course available</li>');
  })

})

const wrapper2 = shallow(<Notifications displayDrawer={true}/>);
describe(`Notifications Component when displayDrawer prop is true
and listNotifications prop is empty (or not used)`, () => {
  it("renders without crashing", () => {
    expect(wrapper2.exists()).toBe(true)
  })

  it("renders the text: 'No new notification for now'", () => {
    expect(wrapper2.containsMatchingElement(<p>No new notification for now</p>)).toEqual(true);
  })

})


describe('Notifications Component when displayDrawer prop is false', () => {
  it("calls handleDisplayDrawer() when meunItem is clicked", () => {
    const displayDrawer = jest.fn()
    const comp = shallow(<Notifications showDrawer={displayDrawer} displayDrawer={false}/>);
    const menuItem = comp.find('.menuItem_1ron99v')
    menuItem.simulate('click')
    expect(displayDrawer).toHaveBeenCalled()
  })

  it("calls handleHideDrawer() when close-btn is clicked", () => {
    const hideDrawer = jest.fn()
    const comp = shallow(<Notifications hideDrawer={hideDrawer} displayDrawer={true}/>);
    const menuItem = comp.find({id: "close-btn"})
    menuItem.simulate('click')
    expect(hideDrawer).toHaveBeenCalled()
  })

  const component = shallow(<Notifications displayDrawer={false}/>);
  it("renders div with menuItem class", () => {
    expect(component.find('.menuItem_1ron99v').exists()).toEqual(true)
  })

  it("does not render Notifications div", () => {
    expect(component.find('.Notifications').exists()).toEqual(false)
  })
})