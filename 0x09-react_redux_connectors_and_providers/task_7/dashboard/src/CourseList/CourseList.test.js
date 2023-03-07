import React from 'react';
import { CourseList } from './CourseList';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

export const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

const wrapper = shallow(<CourseList listCoures={listCourses}/>)
describe('CourseList component when listCourses prop is empty/not specified', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the 2 headings', () => {
    expect(wrapper.find('table thead').children().length).toEqual(2);
  })

  it("fetcCourses action creator is called when component is mounted", ()=> {
    const fetchCourses = jest.fn()
    const wrapper = shallow(<CourseList listCoures={listCourses} fetchCourses={fetchCourses}/>)
    // const instance = wrapper.instance()
    // instance.componentDidMount()
    expect(fetchCourses).toHaveBeenCalled()
  })
})

const wrapper2 = shallow(<CourseList listCourses={listCourses}/>)
const coursesLength = listCourses.length
describe('CourseList component when listCourses prop is empty/not specified', () => {
  it('renders without crashing', () => {
    expect(wrapper2.exists()).toBe(true)
  })


  it('renders the 5 different rows', () => {
    expect(wrapper2.find('table thead').children().length).toEqual(2);
    expect(wrapper2.find('table tbody').children().length).toEqual(coursesLength);
  })
})