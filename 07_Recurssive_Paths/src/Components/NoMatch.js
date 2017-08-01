import React, { Component } from 'react'

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>Sorry no content available at {this.props.location.pathname}!</h2>
      </div>
    )
  }
}