import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BodySection from './BodySection';

describe('BodySection renders', () => {
    it('BodySection should render without errors', () => {
        const bodySectionWrapper = shallow(<BodySection />);
        expect(bodySectionWrapper.exists()).equal(true);
    });

    it(' checking that shallowing the component should render correctly the children and one h2 element', () => {
        const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection> );
        const h = wrapper.find('h2').text();
        const p = wrapper.find('p').text();
        expect(h).equal("test title");
        expect(p).equal("test children node");
        expect(wrapper.containsAllMatchingElements([h, p])).equal(true);
      });
});