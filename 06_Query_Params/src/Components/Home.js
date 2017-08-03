import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>React-Router v4!</h1>
        <p>We will be learning about React-Router v4. This example will cover all the new components of react-router.</p>
        <p>With v4 routes are managed just like any other react component. It offers a "Route" component, which matches the pattern specified in props with the current location/window.pathname.</p>
        <p>It also provides with the declarative options for Redirects, blocking a transition and Navigation Prompt.</p>
        <p>We will be covering them all in this example.</p>
      </div>
    )
  }
}