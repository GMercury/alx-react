import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';
import withLogging from './WithLogging';

const LoginComponent = withLogging(Login)
const wrapper = shallow(<LoginComponent/>)
describe('WithLogging HOC', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls console.log twice',() => {
    const instance = wrapper.instance()
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    instance.componentDidMount()
    instance.componentWillUnmount()
    expect(log).toHaveBeenCalledTimes(2);
  })

  it('logs the right message',() => {
    const instance = wrapper.instance()
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    instance.componentDidMount()
    expect(log.mock.calls[0][0]).toBe('Component Login is mounted')
    instance.componentWillUnmount()
    expect(log.mock.calls[1][0]).toBe('Component Login is going to unmount')
  })
})
