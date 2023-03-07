import React from "react";
import { Notifications } from './Notifications'
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { connect } from "react-redux"
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import PropTypes from 'prop-types';


export class NotifContainer extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    setNotificationFilter: PropTypes.func,
    displayDrawer: PropTypes.bool,
    showDrawer: PropTypes.func,
    hideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
    fetchNotifications: PropTypes.func
  }

  static defaultProps = {
      messages: [],
      displayDrawer: false,
      showDrawer: () => {},
      hideDrawer: () => {},
      setNotificationFilter: () => {},
      markNotificationAsRead: () => {},
      fetchNotifications: () => {}
  }

  componentDidMount() {
    this.props.fetchNotifications()
  }

  render () {
    return <Notifications {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return { messages: getUnreadNotificationsByType(state).toJS() }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
    markNotificationAsRead: (index) => dispatch(markAsRead(index)),
    setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotifContainer)
