import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';


const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1.1rem',
    paddingLeft: 10,
    margin: 0,
    minHeight: 350
  }
})


export class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func,
    login: PropTypes.func
  }

  static defaultProps = {
      isLoggedIn: false,
      displayDrawer: false,
      displayNotificationDrawer: () => {},
      hideNotificationDrawer: () => {},
      login: () => {}
  }

  componentDidMount() {
    this.alert()
  }

  alert() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.code =='KeyH'){
        e.preventDefault()
        alert('Logging you out')
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', alert)
  }

  render () {
    const showDrawer = this.props.displayNotificationDrawer;
    const hideDrawer = this.props.hideNotificationDrawer;
    const LoginStatus = () => {
      if (this.props.isLoggedIn) {
        return (
          <BodySectionWithMarginBottom title="Course List">
            <CourseList/>
          </BodySectionWithMarginBottom>
        )
      } else {
        return (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={this.props.login}/>
          </BodySectionWithMarginBottom>
        )
    }
    
  }
  return (
      <>
      <Notifications displayDrawer={this.props.displayDrawer} showDrawer={showDrawer} hideDrawer={hideDrawer}/>
      <Header/>
      <div className={css(styles.AppBody)}>
        {LoginStatus()}
        <BodySection title="News from the School">
          <p>
            News around the school!
            News around the school!
            News around the school!
            News around the school!
            News around the school!
            News around the school!
            News around the school!
            News around the school!
          </p>
        </BodySection>
      </div>
      <Footer />
      </>
  );
  }
}

export const mapStateToProps = (state) => {
  return { 
    isLoggedIn: state.ui.get("isUserLoggedIn"),
    displayDrawer: state.ui.get("isNotificationDrawerVisible") 
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    login: (email, password) => dispatch(loginRequest(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

