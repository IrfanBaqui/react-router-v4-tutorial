import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    const location = this.props.location
    const params = this.props.match.params
    return (
      <div>
        <h2>This is {params.level}!</h2>
        <h3>this.props.location</h3>
        <p>{JSON.stringify(location)}</p>
        <h3>this.props.match</h3>
        <p>{JSON.stringify(this.props.match)}</p>
        {location.search !== "" ? <p><strong>Query String:</strong> {JSON.stringify(location.search, null, 2)}</p>:null}
      </div>
    )
  }
}