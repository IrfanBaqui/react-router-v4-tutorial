import React, { Component } from 'react'
import { Redirect } from 'react-router'
import fakeAuth from '../Auth'

export default class ProtectedPage extends Component {
  state = { signedOut: false}
  render() {
  	const { location, pattern, pathname, isExact, isAutorized, router } = this.props
    const { signedOut } = this.state  
    return (
        <div>
        {signedOut && (<Redirect to='/'/>)}
        <h1>Protected Page</h1>
        <p>You are signed in go back to some other page and come back here.</p>
        <p>You can sign out to view the login page again.</p>
        <button onClick={() => {
              fakeAuth.signout(() => {
                this.setState({signedOut:true})
              })
            }}>Sign out</button>
        </div>
      )
  }
}