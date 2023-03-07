import React, {useContext} from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/hbnblogo.jpg';
import { AppContext } from '../App/AppContext';


const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "4px solid #E0354B",
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
  render() {
    const data = this.context
    const email = data.currentUser.email
    const displayText = () => {
      if (data.currentUser.isLoggedIn){
        return (
        <section id="logoutSection">Welcome {email} 
          <a  className={css(styles.logOut)} onClick={data.logOut}> (logout)</a>
        </section>
        )
      }
    }
    return (
      <>
      <div className={css(styles.header)}>
        <img className={css(styles.img)} src={logo} alt="logo"/>
        <h1 className={css(styles.heading)}>School dashboard</h1>
      </div>
      {displayText()}
      </>
    )
  }
}
Header.contextType = AppContext