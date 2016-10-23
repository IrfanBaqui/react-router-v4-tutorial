import React, { Component } from 'react'

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>Sorry no content available at {location.pathname}!</h2>
      </div>
    )
  }
}