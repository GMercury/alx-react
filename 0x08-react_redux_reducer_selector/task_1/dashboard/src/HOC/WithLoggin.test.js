/**
 * @jest-environment jsdom
*/
import React from 'react';
import { shallow } from 'enzyme';
import { mount, unmount } from 'enzyme';
import { jest } from '@jest/globals';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Testing WithLogging HOC", () => {
    it("should make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html", () => {
      console.log = jest.fn();
      const Hoc = WithLogging(() => <p>Hello there</p>);
      const comp = <Hoc title="hello" />;
      let wrapper = mount(comp);
      expect(console.log).toBeCalledWith('Component Component is mounted.');
      jest.restoreAllMocks();
    });
  
    it("should make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component", () => {
      console.log = jest.fn();
      const Hoc = WithLogging(Login);
      const comp = <Hoc/>;
      let wrapper = mount(comp);
      expect(console.log).toBeCalledWith('Component Login is mounted.');
      jest.restoreAllMocks();
    });

    it("should make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component", () => {
        console.log = jest.fn();
        const Hoc = WithLogging(Login);
        const comp = <Hoc/>;
        let wrapper = mount(comp);
        expect(console.log).toBeCalledWith('Component Login is mounted.');
        jest.restoreAllMocks();
      });
  
});