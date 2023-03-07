import React from 'react';
import Header from './Header';
import { shallow, mount }from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import {AppContext, defaultUser, logOut} from '../App/AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});


describe('Header Component', () => {
  it('renders without crashing and logoutSection is not created with a default context value', ()=>{
    const wrapper  = shallow(<AppContext.Provider><Header/></AppContext.Provider>)
    expect(wrapper.exists()).toBe(true)
  })

})

const data = {
			user: {
				email: '',
				password: '',
				isLoggedIn: true,
			},
			logOut: () => {},
};
describe('Context value tests', () => {
  it('renders img and h1 tags', () => {
    const wrap  = mount(<AppContext.Provider value={{currentUser: defaultUser, logOut: logOut}}><Header/></AppContext.Provider>)
    expect(wrap.find('img').exists()).toEqual(true)
    expect(wrap.find('h1').exists()).toEqual(true)
  })

  it('logoutSection is not created with a default context value set (isLoggedIn is false and an email is set)', ()=>{
    const wrapper  = shallow(<AppContext.Provider><Header/></AppContext.Provider>)
    expect(wrapper.find('#logoutSection').exists()).toEqual(false)
  })

  it('logoutSection is created when user defined (isLoggedIn is true and an email is set)', ()=>{

    const wrapper  = mount(<AppContext.Provider value={{currentUser: data.user, logOut: data.logOut}}><Header/></AppContext.Provider>)
    expect(wrapper.find('#logoutSection').exists()).toEqual(true)
  })

  it('calls spy function when logOut is clicked (user defined, isLoggedIn is true and an email is set)', ()=>{
    const spy = jest.spyOn(data, 'logOut')
    const wrapper  = mount(<AppContext.Provider value={{currentUser: data.user, logOut: data.logOut}}><Header/></AppContext.Provider>)
    const logout = wrapper.find('#logoutSection a')
    logout.simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})