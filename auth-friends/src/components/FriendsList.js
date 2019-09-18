import React from "react"
import { connect } from "react-redux"

import { getFriends, addFriend } from "../store/actions"

import Friend from "./Friend"

class FriendsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    }
  }

  componentDidMount() {
    this.props.getFriends()
  }

  // Handlers
  changeHandler = event => {
    event.preventDefault()
    this.setState({
      ...this.state,
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    })
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.addFriend(this.state.friend)
  }

  render() {
    return (
      <>
        <div className="add-friend">
          <h2>Add Friend</h2>
          <form onSubmit={this.submitHandler}>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.friend.name}
                onChange={this.changeHandler}
              />
            </label>
            <label htmlFor="age">
              Age:
              <input
                type="number"
                name="age"
                placeholder="age"
                value={this.state.friend.username}
                onChange={this.changeHandler}
              />
            </label>
            <label htmlFor="username">
              Email:
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.friend.email}
                onChange={this.changeHandler}
              />
            </label>
            <button type="submit">Add Friend</button>
          </form>
        </div>
        <h2>Friends List</h2>
        <div className="friends-list">
          {this.props.friends.map(friend => {
            return <Friend key={friend.id} friend={friend} />
          })}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(
  mapStateToProps,
  { getFriends, addFriend }
)(FriendsList)
