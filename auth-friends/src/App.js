import React from "react"
import { Route } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import "./App.scss"
import LoginForm from "./components/LoginForm"
import FriendsList from "./components/FriendsList"

function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => {
          return <LoginForm {...props} />
        }}
      />
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </div>
  )
}

export default App
