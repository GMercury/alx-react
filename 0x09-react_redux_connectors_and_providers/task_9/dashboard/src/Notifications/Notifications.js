import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import closebtn from '../assets/close-btn.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


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

const notifType = (color) => {
  return {
    color:"white",
    background: color,
    border: `1px solid ${color}`,
    padding: "3px",
    fontWeight: 600,
    cursor: "pointer"
  }
}

const urgent = notifType("red")
const dfault = notifType("darkblue")

export function Notifications(props) {
    const filterbtns = () => {
      return (
        <p>
          <span id="default" onClick={() => props.setNotificationFilter("DEFAULT")} style={dfault}>default</span> &nbsp;
          <span id="urgent" onClick={() => props.setNotificationFilter("URGENT")} style={urgent}>urgent!</span>
        </p>
      )
    }
    const loadNotifs = () => {
      let rows = <></>
      const notifArray = props.messages
      if (notifArray.length == 0){
          return (
            <>
              {filterbtns()}
              <p>No new notification for now</p>
            </>
          )
      } else {
          rows = notifArray.map((notif, key) => {
            return (<NotificationItem key={key} id={notif.guid} type={notif.type}
            value={notif.value} markNotificationAsRead={props.markNotificationAsRead}/>)
          })
      }
      return (
        <>
        <p className={css(styles.p)}>Here is the list of notifications:</p>
            {filterbtns()}
            <ul className={css(styles.ul)}>
              {rows}
            </ul>
        </>
      )
    }
    const showNotifs = () => {
      if (props.displayDrawer) {
        return (
          <>
            <div className={css(styles.Notifications)}>
              <button style={{float:'right', background: 'none', border: 'none'}}
              id="close-btn"
              aria-label="Close"
              onClick={props.hideDrawer}>
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
      <div onClick={props.showDrawer} className={css(props.displayDrawer ? styles.hideMenuItem : styles.menuItem)}>Your notifications</div>
      {showNotifs()}
    </>
    )
}

Notifications.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    setNotificationFilter: PropTypes.func,
    displayDrawer: PropTypes.bool,
    showDrawer: PropTypes.func,
    hideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func
}

Notifications.defaultProps = {
    messages: [],
    displayDrawer: false,
    showDrawer: () => {},
    hideDrawer: () => {},
    setNotificationFilter: () => {},
    markNotificationAsRead: () => {}
}