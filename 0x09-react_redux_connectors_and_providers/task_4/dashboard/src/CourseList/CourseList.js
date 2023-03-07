import React from 'react';
import CourseListRow from './CourseListRow';
import { StyleSheet, css} from 'aphrodite';
import {CourseShape} from './CourseShape';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  table: {
    width: "100%",
    margin: "0 auto",
    border: "1px solid black"
  }
 
})

export default function CourseList(props) {
  const renderCourses = () => {
    if (props.listCourses.length == 0){
      return <CourseListRow textFirstCell="No course available yet"/>
    } else {
      const rows = props.listCourses.map((course) => {
        // console.log(course);
        return <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit}/>
      })
      return rows
    }
  }
  return (
      <table className={css(styles.table)} id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true}/>
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" and isHeader={true}/>
        </thead>
        <tbody>
          {renderCourses()}
        </tbody>
      </table>
    )
}


CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}