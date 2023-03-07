import React from 'react';
import {Header} from './Header';
import { shallow }from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});


describe('Header Component', () => {
  it('renders without crashing and logoutSection is not created with a default context value', ()=>{
    const wrapper  = shallow(<Header/>)
    expect(wrapper.exists()).toBe(true)
  })

})


describe('Context value tests', () => {
  it('renders img and h1 tags', () => {
    const wrap  = shallow(<Header/>)
    expect(wrap.find('img').exists()).toEqual(true)
    expect(wrap.find('h1').exists()).toEqual(true)
  })

  it('logoutSection is not created with a default context value set (isLoggedIn is false and an email is set)', ()=>{
    const wrapper  = shallow(<Header/>)
    expect(wrapper.find('#logoutSection').exists()).toEqual(false)
  })

  it('logoutSection is created when user defined (isLoggedIn is true and an email is set)', ()=>{

    const wrapper  = shallow(<Header isLoggedIn={true}/>)
    expect(wrapper.find('#logoutSection').exists()).toEqual(true)
  })

  it('calls spy function when logOut is clicked (user defined, isLoggedIn is true and an email is set)', ()=>{
    const logOut = jest.fn()
    const wrapper  = shallow(<Header isLoggedIn={true} logOut={logOut}/>)
    const logoutBtn = wrapper.find('#logoutSection a')
    logoutBtn.simulate('click')
    expect(logOut).toHaveBeenCalled()
  })
})