import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

const wrapper  = shallow(<Login/>)
describe('Login Component', () => {
  it('renders without crashing', ()=>{
    expect(wrapper.exists()).toBe(true)
  })

  it('submit button is disabled by default', () => {
    const submit = wrapper.find({type: "submit"})
    //disabled attribute set
    expect(submit.html()).toBe('<input type="submit" value="OK" disabled=""/>')
  })

  it('the submit button is enabled after changing the value of the two inputs', () => {
    const event = {target: { value: "test"}}
    const email = wrapper.find({id: "email"})
    email.simulate('change', event)
    const password = wrapper.find({id: "password"})
    password.simulate('change', event)
    const submit = wrapper.find({type: "submit"})
    //disabled attribute not set
    expect(submit.html()).toBe('<input type="submit" value="OK"/>')
  })

  it(' renders 2 input tags and 2 label tags', () => {
    expect(wrapper.find('input').length).toEqual(3)
    expect(wrapper.find('label').length).toEqual(2)
  })




})