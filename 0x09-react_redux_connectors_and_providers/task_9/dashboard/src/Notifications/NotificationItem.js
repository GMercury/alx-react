import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: { 
    color: "darkblue"
  },

  urgent: {
    color:"red"
  },

  listItem: {
    cursor: "pointer",
    paddingBottom: 5,
    paddingTop: 5,
    ":hover": {
      fontWeight: 600
    },
    '@media (max-width: 900px)': {
      borderBottom: "1px solid black",
      listStyle: "none",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 8,
      paddingRight: 8,
    }
  }

})

const NotificationItem = React.memo(function NotificationItem(props) {
  const NotifType = css(props.type == "default" ? styles.default : styles.urgent, styles.listItem)
  return(
    <li className={NotifType} data-notification-type={props.type}
    onClick={()=>props.markNotificationAsRead(props.id)}>{props.value}</li>
  )
})

NotificationItem.defaultProps = {
  type: "default"
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({__html: PropTypes.string}),
  value: PropTypes.string
}

export default NotificationItem
