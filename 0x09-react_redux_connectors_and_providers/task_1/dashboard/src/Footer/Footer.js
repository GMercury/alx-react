import React from 'react';
import { StyleSheet, css} from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils'
import { AppContext } from '../App/AppContext';


const styles = StyleSheet.create({
  AppFooter: {
    borderTop: "4px solid #E0354B",
    width: '99%',
    '@media (max-width: 900px)': {
      position: "relative",
      width: "100%",
      marginTop: 60
    }
  },
  
  AppFooter_p: {
    fontStyle: "italic",
    textAlign: "center"
  }


})

export default function Footer() {
  const data = React.useContext(AppContext)
  const footerText = (data.currentUser.isLoggedIn) ? <a href="#">Contact us</a> : `Copyright ${getFullYear()} - ${getFooterCopy(false)}`
  return (
    <div className={css(styles.AppFooter)}>
      <p className={css(styles.AppFooter_p)}>{footerText}</p>
    </div>
    )
  }
