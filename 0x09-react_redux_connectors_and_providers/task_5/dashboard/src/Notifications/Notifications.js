import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import closebtn from '../assets/close-btn.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { connect } from "react-redux"


const bounceKeyFrames = {
    "0%": {
      transform: "translateY(-4px)",
    },
  
    "100%": {
      transform: "translateY(2px)"
    }
  }

const opacityKeyFrames = {
      "0%": {
        opacity: "0.5",
      },
    
      "100%": {
        opacity: "1"
      }
}

const styles = StyleSheet.create({
  Notifications:   {
    background:"white",
    border:"2px dashed red",
    padding: 5,
    width: "60%",
    position: "absolute",
    right: 0,
    top: "5%",
    marginRight: 10,
    '@media (max-width: 900px)': {
      border: "none",
      top: 0,
      height: "200%",
      padding: 0,
      fontSize: 20,
      width: "97%",
      background: "white",
      zIndex: "9999"
    }
  },

  p: {
    marginTop: 0,
    width: "100%"
  },

  ul: {
    margin: 1,
    '@media (max-width: 900px)': {
      padding: 0,
      }
  },

  menuList: {
    margin: 1
  },

  menuItem: {
    position: "fixed",
    right: 0,
    paddingRight: 10,
    marginBottom: 6,
    ":hover": {
      animationName: [bounceKeyFrames, opacityKeyFrames],
      animationDuration: "0.5s, 1s",
      animationIterationCount: 3,
      cursor: "pointer"
    }
  },

  hideMenuItem: {
    display:"none"
  }
})


export class Notifications extends React.PureComponent {
  static propTypes = {
    messages: PropTypes.object,
  }

  static defaultProps = {
      messages: {},
      fetchNotifications: () => {}
  }

  componentDidMount() {
    this.props.fetchNotifications()
  }

  render() {
    const loadNotifs = () => {
      let rows = <></>
      const notifArray = Object.values(this.props.messages)
      // console.log(notifArray)
      if (notifArray.length == 0){
          return <p>No new notification for now</p>
      } else {
          rows = notifArray.map((notif, key) => {
            return (<NotificationItem key={key} id={notif.guid} type={notif.type}
            value={notif.value} markNotificationAsRead={this.props.markNotificationAsRead}/>)
          })
      }
      return (
        <>
        <p className={css(styles.p)}>Here is the list of notifications:</p>
            <ul className={css(styles.ul)}>
              {rows}
            </ul>
        </>
      )
    }
    const showNotifs = () => {
      if (this.props.displayDrawer) {
        return (
          <>
            <div className={css(styles.Notifications)}>
              <button style={{float:'right', background: 'none', border: 'none'}}
              id="close-btn"
              aria-label="Close"
              onClick={this.props.hideDrawer}>
                <img src={closebtn} alt="close-btn"/>
              </button>
              {loadNotifs()}
            </div>
          </>
        )
      }
    }
    return (
    <>
      <div onClick={this.props.showDrawer} className={css(this.props.displayDrawer ? styles.hideMenuItem : styles.menuItem)}>Your notifications</div>
      {showNotifs()}
    </>
    )
  }
}

const mapPropstoState = (state) =>{
  return { messages: state.notifications.get("notifications") }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: () => dispatch(fetchNotifications())
  }
}

export default connect(mapPropstoState, mapDispatchToProps)(Notifications)
