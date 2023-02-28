import { fetchCourseSuccess, selectCourse, unSelectCourse } from "../actions/courseActionCreators"
import { courseReducer } from "./courseReducer"


const courseData = fetchCourseSuccess()
const state = courseData.data
state.map((course)=> course.isSelected=false)

describe("courseReducer", ()=>{
  it("the default state returns an empty array", () =>{
    const currentState = courseReducer(undefined, {})
    expect(currentState).toEqual([])
  })

  it("FETCH_COURSE_SUCCESS action returns the data passed", () =>{
    const currentState = courseReducer(undefined, fetchCourseSuccess())
    expect(currentState).toEqual(state)
  })

  it("SELECT_COURSE action returns the data with the right item updated", () =>{
    const index = 2
    const currentState = courseReducer(state, selectCourse(index))
    state.map((course)=>{
      if (course.id === index) course.isSelected = true
    })
    expect(currentState).toEqual(state)
  })

  it("UNSELECT_COURSE action returns the data with the right item updated", () =>{
    const index = 2
    state[1].isSelected = true
    const currentState = courseReducer(state, unSelectCourse(index))
    state.map((course)=>{
      if (course.id === index) course.isSelected = false
    })
    expect(currentState).toEqual(state)
  })
})
