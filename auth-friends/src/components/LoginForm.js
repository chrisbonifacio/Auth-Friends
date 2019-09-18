import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"

import { login, LOGIN_START } from "../store/actions"

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    }
  }

  // Handlers
  changeHandler = event => {
    event.preventDefault()
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.login(this.state.credentials, this.props)
  }

  render() {
    return (
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
            />
          </label>
          Password:
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.changeHandler}
              value={this.state.credentials.password}
            />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  { login }
)(LoginForm)
