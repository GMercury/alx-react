import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import closebtn from '../assets/close-btn.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';


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
    border:"2px dashed red",
    padding: 5,
    width: "30%",
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


export default class Notifications extends React.PureComponent {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    markNotificationAsRead: PropTypes.func,
    showDrawer: PropTypes.func,
    hideDrawer: PropTypes.func
  }

  static defaultProps = {
      displayDrawer: false,
      listNotifications: [],
      markNotificationAsRead: () => {}
  }

  render() {
    const loadNotifs = () => {
      let rows = <></>
      const notifArray = this.props.listNotifications
      if (notifArray.length == 0){
          return <p>No new notification for now</p>
      } else {
          rows = notifArray.map((notif) => {
            if (notif.html != undefined && notif.html.__html != null){
              return (<NotificationItem key={notif.id} id={notif.id} type={notif.type}
              html={notif.html} markNotificationAsRead={this.props.markNotificationAsRead}/>)
            } else {
            return (<NotificationItem key={notif.id} id={notif.id} type={notif.type}
            value={notif.value} markNotificationAsRead={this.props.markNotificationAsRead}/>)
            }
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
