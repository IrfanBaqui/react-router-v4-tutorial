import React, { Component } from 'react'
import NavigationPrompt from 'react-router/NavigationPrompt'

export default class Blocking extends Component {
  render() {
    return (
      <div>
        <h1>Blocking a transition!</h1>
        <p>You can block a transition and have a Navigation prompt with the appropriate message. If you try to go back from this page or navigate to some other page you will see a prompt showing up.</p>
        <NavigationPrompt
            message={(location) => (
              `Are you sure you want to go to ${location.pathname}`
            )}
          />
      </div>
    )
  }
}