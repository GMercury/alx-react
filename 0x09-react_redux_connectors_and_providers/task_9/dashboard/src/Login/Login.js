import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  login:{
    '@media (max-width: 900px)': {
      display: "block"
    }
  }
})

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    }
  }

  static propTypes = {
    login: PropTypes.func
  }

  static defaultProps = {
    login: () => {}
  }

  handleLoginSubmit = (event) => {
      event.preventDefault()
      this.props.logIn(this.state.email, this.state.password)
  }

  handleChangeEmail=(event)=> {
    this.setState({email: event.target.value}, this.submitButtonState)
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value}, this.submitButtonState)
  }

  submitButtonState() {
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      this.setState({enableSubmit: true})
    } else {
      this.setState({enableSubmit: false})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <label className={css(styles.login)} htmlFor="email">
          Email: <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChangeEmail}/>&nbsp;&nbsp;
        </label>
        <label className={css(styles.login)} htmlFor="password"> 
          Password: <input type="text" id="password" value={this.state.password} onChange={this.handleChangePassword}/>
        </label>
        <input type="submit" value="OK" disabled={this.state.enableSubmit ? false : true}/>
      </form>
    )
  }
}
