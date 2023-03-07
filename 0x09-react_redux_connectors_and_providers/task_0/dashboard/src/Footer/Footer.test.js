import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import {AppContext, defaultUser, logOut} from '../App/AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});


const wrapper = shallow(<AppContext.Provider><Footer/></AppContext.Provider>)
describe('Footer component', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the text “Copyright” when context is set to:(user defined, isLoggedIn is false and an email is set)', () => {
    const wrapper = mount(<AppContext.Provider value={{currentUser:defaultUser, logOut:logOut}}><Footer/></AppContext.Provider>)
    expect(wrapper.find('p').text()).toContain("Copyright");
  })

  it('renders the text "Contact us" when context is set to:( user defined, isLoggedIn is true and an email is set)', () => {
    defaultUser.isLoggedIn = true
    const wrapper = mount(<AppContext.Provider value={{currentUser:defaultUser, logOut:logOut}}><Footer/></AppContext.Provider>)
    expect(wrapper.find('p').text()).toContain("Contact us");
  })
})