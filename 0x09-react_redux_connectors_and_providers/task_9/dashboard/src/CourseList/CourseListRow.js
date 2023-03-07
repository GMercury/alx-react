import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  th: {
    borderBottom: "1px solid black",
    textAlign: "left",
  },

  th_colspan: {
      borderBottom: "1px solid black",
      textAlign: "center",
  }

})

export default function CourseListRow(props) {
  const rowStyle = {
    background: props.isHeader ? "#deb5b545" : "#f5f5f5ab"
  }

  const rowChecked = {
    background: props.isChecked ? "#e6e4e4" : rowStyle.background
  }

  if (props.isHeader) {
    if (props.textSecondCell == null) {
      return <tr style={rowStyle}><th className={css(styles.th, styles.th_colspan)} colSpan="2">{props.textFirstCell}</th></tr>
    } else {
      return (
        <tr style={rowStyle}>
          <th className={css(styles.th)}>{props.textFirstCell}</th>
          <th className={css(styles.th)}>{props.textSecondCell}</th>
        </tr>
        )
    }
  }
  return (
    <tr style={rowChecked}>
      <td><input onClick={()=>props.onChangeRow(props.id, !props.isChecked)} type="checkbox"/>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </tr>
  )
}


CourseListRow.propTypes = {
  isChecked: PropTypes.bool,
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeRow: PropTypes.func
}

CourseListRow.defaultProps = {
  isChecked: false,
  isHeader: false,
  textSecondCell: null,
  onChangeRow: () => {}
}
