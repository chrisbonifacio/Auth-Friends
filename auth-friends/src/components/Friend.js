import React from "react"

export default class Friend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="friend">
        <h2>{this.props.friend.name}</h2>
        <p>Age: {this.props.friend.age}</p>
        <p>Email: {this.props.friend.email}</p>
      </div>
    )
  }
}
