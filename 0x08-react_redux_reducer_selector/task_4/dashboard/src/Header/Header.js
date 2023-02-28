import holbertonLogo from '../assets/holberton_logo.jpg';
import React, {useContext} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';


const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 60
  },
  
  img: {
    width: 160,
    height: 160
  },
  
  heading: {
    color: "#E0354B"
  },

  logOut: {
    fontStyle: "italic",
    textDecoration: "underline",
    cursor: "pointer"
  }

})

export default class Header extends React.Component {
  // static contextType = AppContext
  render() {
    const data = this.context
    const email = data.currentUser.email
    const displayText = () => {
      if (data.currentUser.isLoggedIn){
        return (
        <section id="logoutSection">Welcome {email}
          <span  className={css(styles.logOut)} onClick={data.logOut}>(logout)</span>
        </section>
        )
      }
    }
    return (
      <React.Fragment>
      <div className={css(styles.header)}>
        <img className={css(styles.img)} src={holbertonLogo} alt="logo"/>
        <h1 className={css(styles.heading)}>School dashboard</h1>
      </div>
      {displayText()}
      </React.Fragment>
    )
  }
}
Header.contextType = AppContext