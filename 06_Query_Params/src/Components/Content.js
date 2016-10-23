import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    const { location, pattern, pathname, isExact } = this.props  
    return (
      <div>
        <h2>This is {this.props.params.level}!</h2>
        {location.query !== null ? <p><strong>Query String:</strong> {JSON.stringify(location.query, null, 2)}</p>:null}
      </div>
    )
  }
}