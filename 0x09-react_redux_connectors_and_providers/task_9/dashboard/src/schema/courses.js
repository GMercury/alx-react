import { normalize, schema } from "normalizr";

export function coursesNormalizer(data) {
  const course = new schema.Entity("courses")
  const normalizedData = normalize(data, [course])
  return normalizedData
}
