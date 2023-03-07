import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('NotificationItem component', () => {
  it('renders without crashing',() => {
    const wrapper = shallow(<NotificationItem/>);
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the correct html (with given dummy  type and value props)', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="test"/>);
    const html = wrapper.html()
    // console.log(wrapper.html());
    expect(html).toBe('<li class="urgent_137u7ef-o_O-listItem_1fp99j6" data-notification-type="urgent">test</li>')
  })

  it('renders the correct html (with given dummy html props)', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const html = wrapper.html()
    expect(html).toBe('<li class="default_15qxxom-o_O-listItem_1fp99j6" data-notification-type="default"><u>test</u></li>')
  })

})
