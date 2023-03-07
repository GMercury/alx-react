import React from 'react';
import { StyleSheet, css} from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


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



export function Footer(props) {
  const footerText = (props.isLoggedIn) ? <a href="#">Contact us</a> : `Copyright ${getFullYear()} - ${getFooterCopy(false)}`
  return (
    <div className={css(styles.AppFooter)}>
      <p className={css(styles.AppFooter_p)}>{footerText}</p>
    </div>
    )
  }

const mapStateToProps = (state) => {
  const user = state.get("user")
  const isLoggedIn = state.get("isUserLoggedIn")
  return { user, isLoggedIn }
}

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  isLoggedIn: PropTypes.bool
}

Footer.defaultProps = {
    user: {
      email: "",
      password: ""
    },
    isLoggedIn: false
}

export default connect(mapStateToProps)(Footer)