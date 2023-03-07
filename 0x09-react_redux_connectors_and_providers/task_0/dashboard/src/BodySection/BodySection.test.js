import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});


const wrapper = shallow(<BodySection title="test title">
                          <p>test children node</p>
                        </BodySection>)
describe('BodySection component', () => {
  it('renders correctly', () => {
     expect(wrapper.containsMatchingElement(<h2>test title</h2>)).toEqual(true)
     expect(wrapper.containsMatchingElement(<p>test children node</p>)).toEqual(true)
  })
})