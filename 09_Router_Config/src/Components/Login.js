import React, { Component } from 'react'
import fakeAuth from '../Auth'
import { Redirect } from 'react-router'

export default class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  login() {
  	fakeAuth.authenticate(() => {
  		this.setState({redirectToReferrer:true})
  	})
  }
  render() {
    const { from } = this.props.location.state || '/'
    const { redirectToReferrer } = this.state  
    return (
      <div>
        {redirectToReferrer && (
          <Redirect to={from || '/'}/>
        )}
        {from && (
          <p>
            You must log in to view the page at
            <code>{from.pathname}</code>
          </p>
        )}
        <button onClick={this.login.bind(this)}>Log in</button>
      </div>
    )
  }
}