import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseListRow from './CourseListRow';

describe('CourseList render', () => {
    it('CourseList should render without errors', () => {
        const wrapper = shallow(<CourseListRow />);
        expect(wrapper.exists()).equal(true);
    })

    it('CourseList should render one cell with colspan=2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textSecondCell={null} testFirstCell='cell' />);

        expect(wrapper.find('tr').children()).to.have.lengthOf(1);
        expect(wrapper.find('th').props()).to.have.property('colSpan', '2');
    })
})