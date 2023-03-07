import { fetchCourseSuccess, selectCourse, unSelectCourse } from "../actions/courseActionCreators"
import { coursesNormalizer } from "../schema/courses"
import { courseReducer } from "./courseReducer"
import { Map } from "immutable"


const action = fetchCourseSuccess()
const courseData = coursesNormalizer(action.data)
const state = courseData.entities.courses
courseData.result.map((id)=> state[id].isSelected = false)

describe("courseReducer", ()=>{
  it("the default state returns an empty array", () =>{
    const currentState = courseReducer(undefined, {})
    expect(currentState).toEqual(Map([]))
  })

  it("FETCH_COURSE_SUCCESS action returns the data passed", () =>{
    const currentState = courseReducer(undefined, fetchCourseSuccess())
    expect(currentState.toJS()).toEqual(state)
  })

  it("SELECT_COURSE action returns the data with the right item updated", () =>{
    const index = 2
    const currentState = courseReducer(Map(state), selectCourse(index))
    expect(currentState.toJS()[index].isSelected).toEqual(true)
  })

  it("UNSELECT_COURSE action returns the data with the right item updated", () =>{
    const index = 2
    state[index].isSelected = true
    const currentState = courseReducer(Map(state), unSelectCourse(index))
    expect(currentState.toJS()[index].isSelected).toEqual(false)
  })
})