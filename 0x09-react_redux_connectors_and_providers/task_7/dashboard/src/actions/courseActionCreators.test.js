import { fetchCourses, selectCourse, unSelectCourse } from './courseActionCreators';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk"
import fetchMock from "fetch-mock-jest"


const mockStore = configureStore([thunk])

afterEach(() => {
  fetchMock.restore();
});

test ('selectCourse func returns the right object', ()=>{
  const action = selectCourse(1)
  expect(action).toEqual({ type: "SELECT_COURSE", index: 1 })
})

test ('unselectCourse func returns the right object', ()=>{
  const action = unSelectCourse(1)
  expect(action).toEqual({ type: "UNSELECT_COURSE", index: 1 })
})

test("fetchCourses", () => {
  const store = mockStore({})
  fetchMock.get("/courses.json", [])
  return store.dispatch(fetchCourses()).then(()=>{
    const actions = store.getActions()
    expect(actions).toEqual([ { type: 'FETCH_COURSE_SUCCESS', data: [] } ])
  })
})