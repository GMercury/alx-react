import React from 'react';
import {Notifications} from "./Notifications";
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});

const messages = [
  {
    guid: "89",
    isRead: true,
    type: "urgent",
    value: "Odio pellentesque"
  }
]

const notifLength = Object.values(messages).length
const wrapper = shallow(<Notifications displayDrawer={true} messages={messages}/>);
describe(`Notifications Component when displayDrawer prop is true
and messages prop is not empty`, () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true)
  })

  it("renders Notifications div", () => {
    expect(wrapper.find('.Notifications_95aj9m').exists()).toEqual(true)
  })

  it("renders list items", () => {
    expect(wrapper.find('ul').children().length).toEqual(notifLength);
  })

  it("renders the text: 'Here is the list of notifications:'", () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications:</p>)).toEqual(true);
  })

  it("renders first NotificationItem element with the right html", () => {
    const firstChild = wrapper.find('ul').children().first();
    // console.log(firstChild.html())
    expect(firstChild.html()).toBe('<li class="urgent_1uqgzdq-o_O-listItem_1fp99j6" data-notification-type="urgent">\
Odio pellentesque</li>');
  })

  it("call fetctNotifications actioncreator when component is mounted", ()=>{
    const fetchNotifications = jest.fn()
    const wrapper = shallow(<Notifications fetchNotifications={fetchNotifications}/>);
    expect(fetchNotifications).toHaveBeenCalled()
  })

})

const wrapper2 = shallow(<Notifications displayDrawer={true}/>);
describe(`Notifications Component when displayDrawer prop is true
and messages prop is empty (or not used)`, () => {
  it("renders without crashing", () => {
    expect(wrapper2.exists()).toBe(true)
  })

  it("renders the text: 'No new notification for now'", () => {
    expect(wrapper2.containsMatchingElement(<p>No new notification for now</p>)).toEqual(true);
  })

})


describe('Notifications Component when displayDrawer prop is false', () => {
  it("calls handleDisplayDrawer() when meunItem is clicked", () => {
    const showDrawer = jest.fn()
    const comp = shallow(<Notifications showDrawer={showDrawer} displayDrawer={false}/>);
    const menuItem = comp.find('.menuItem_1ron99v')
    menuItem.simulate('click')
    expect(showDrawer).toHaveBeenCalled()
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