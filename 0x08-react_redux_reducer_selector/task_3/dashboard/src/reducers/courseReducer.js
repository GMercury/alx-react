import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

export function courseReducer (state = [], action) {
  switch(action.type){
    case FETCH_COURSE_SUCCESS: {
      let data = action.data.map((course)=>({...course}))
      data.map((course) => course.isSelected = false)
      return data
    }
    case SELECT_COURSE: {
      const newState = [...state]
      newState.map((course)=>{
        if (course.id === action.index) course.isSelected = true
      })
      return newState
    }
    case UNSELECT_COURSE: {
      const newState = [...state]
      newState.map((course)=>{
        if (course.id === action.index) course.isSelected = false
      })
      return newState
    }
    default:
      return state
  }
}