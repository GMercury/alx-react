import { getListCourses } from "./courseSelector"
import { Map } from "immutable";


test("getListCourses selector func", ()=> {
  let state = {
    courses: Map({
      "2":{
        "id": "2",
        "name": "Webpack",
        "credit": 20
      }
    })
  }
  const selectCourses = getListCourses(state)
  expect(selectCourses.toJS()).toEqual([ { "id": "2", "name": "Webpack","credit": 20 } ])

})