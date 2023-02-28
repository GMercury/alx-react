import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

describe('Login renders', () => {
    it('Login should render', () => {
        const LoginWrapper = shallow(<Login />);
        expect(LoginWrapper.exists());
    })
    it('Login should render 2 input and label tags', () => {
        const LoginWrapper = shallow(<Login />);
        expect(LoginWrapper.find('input', 'label')).to.have.lengthOf(3);
    })
})