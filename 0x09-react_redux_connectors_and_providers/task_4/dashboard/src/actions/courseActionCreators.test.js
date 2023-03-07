import { selectCourse, unSelectCourse } from './courseActionCreators';

test ('selectCourse func returns the right object', ()=>{
  const action = selectCourse(1)
  expect(action).toEqual({ type: "SELECT_COURSE", index: 1 })
})

test ('unselectCourse func returns the right object', ()=>{
  const action = unSelectCourse(1)
  expect(action).toEqual({ type: "UNSELECT_COURSE", index: 1 })
})