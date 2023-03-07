import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

const wrapper = shallow(<BodySectionWithMarginBottom title="this is a test"/>)
describe('BodySectionWithMarginBottom', () => {
  it('renders correctly', () => {
    expect(wrapper.containsMatchingElement(<BodySection/>)).toEqual(true)
  })
})