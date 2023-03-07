import { normalize, schema } from "normalizr";

export function coursesNormalizer(data) {
  const course = new schema.Entity("courses")
  const normalizedData = normalize(data, [course])
  // console.log(normalizedData.entities)
  return normalizedData
}


// const x = {
//   data: [
//     {
//       id: 1,
//       name: "ES6",
//       credit: 60
//     },
//     {
//       id: 2,
//       name: "Webpack",
//       credit: 20
//     },
//     {
//       id: 3,
//       name: "React",
//       credit: 40
//     }
//   ]
// }
// coursesNormalizer(x.data)