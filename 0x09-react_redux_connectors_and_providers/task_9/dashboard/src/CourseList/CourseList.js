import React from 'react';
import CourseListRow from './CourseListRow';
import { StyleSheet, css} from 'aphrodite';
import PropTypes from 'prop-types';
import { fetchCourses, onChangeRow, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { connect } from "react-redux"
import { getListCourses } from '../selectors/courseSelector';


const styles = StyleSheet.create({
  table: {
    width: "100%",
    margin: "0 auto",
    border: "1px solid black"
  }
 
})

export class CourseList extends React.PureComponent{
  static propTypes = {
    listCourses: PropTypes.arrayOf(PropTypes.object),
    fetchCourses: PropTypes.func
  }
    static defaultProps = {
    listCourses: [],
    fetchCourses: () => {}
  }

  componentDidMount() {
    this.props.fetchCourses()
  }

  render () {
  const renderCourses = () => {
    if (this.props.listCourses.length == 0){
      return <tr><td>No course available yet</td></tr>
    } else {
      const rows = this.props.listCourses.map((course) => {
        return <CourseListRow id={course.id} isChecked={course.isSelected} key={course.id} textFirstCell={course.name} 
        textSecondCell={course.credit} onChangeRow={this.props.onChangeRow}/>
      })
      return rows
    }
  }
  return (
      <table className={css(styles.table)} id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true}/>
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
        </thead>
        <tbody>
          {renderCourses()}
        </tbody>
      </table>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    listCourses: getListCourses(state).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourses: () => dispatch(fetchCourses()),
    selectCourse: (id) => dispatch(selectCourse(id)),
    unSelectCourse: (id) => dispatch(unSelectCourse(id)),
    onChangeRow: (id, isChecked) => dispatch(onChangeRow(id, isChecked))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)