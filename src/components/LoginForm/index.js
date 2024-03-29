import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', isTrue: true}

  onSubmit = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}

    if (false) {
      this.onSuccess()
    } else {
      this.onFailure()
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
  }

  onChangeUserName = event => {
    console.log(event.target.value)
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  onSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  onFailure = () => {
    this.setState({isTrue: false})
  }

  render() {
    const {isTrue} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="website-logo"
        />
        <div className="login-from-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <label htmlFor="username">USERNAME</label>
          <input
            onChange={this.onChangeUserName}
            type="text"
            className="input"
            id="username"
            placeholder="Username"
          />

          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={this.onChangePassword}
            type="password"
            className="input"
            id="password"
            placeholder="Password"
          />

          <button type="submit" className="submit-button">
            Login
          </button>
          {!isTrue && (
            <p className="error-message" id="error-para">
              *User Name and Password didn't match
            </p>
          )}
        </div>
      </form>
    )
  }
}
export default LoginForm
