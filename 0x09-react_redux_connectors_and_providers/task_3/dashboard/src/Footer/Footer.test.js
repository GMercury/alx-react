import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
});


const wrapper = shallow(<Footer/>)
describe('Footer component', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the text “Copyright” when context is set to:(user defined, isLoggedIn is false and an email is set)', () => {
    const wrapper = shallow(<Footer/>)
    expect(wrapper.find('p').text()).toContain("Copyright");
  })

  it('renders the text "Contact us" when context is set to:( user defined, isLoggedIn is true and an email is set)', () => {
    const wrapper = shallow(<Footer isLoggedIn={true}/>)
    expect(wrapper.find('p').text()).toContain("Contact us");
  })
})
