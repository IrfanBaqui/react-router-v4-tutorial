import React, { Component } from 'react'
import { Match, Link } from 'react-router'

export default class Recursive extends Component {
  render() {
  	const { location, pattern, pathname, isExact} = this.props
    return (
      <div>
      <h1>Recursive paths</h1>
      <p>Keep clicking the links below for a recursive pattern.</p>
      {this.props.params.level != null? <div><em>Click Below Link</em></div>:null}
      <div className="leftNavi">
      	<ul>
      		<li><Link activeClassName="active" to={pathname +"/level1"}>Level 1</Link></li>
      		<li><Link activeClassName="active" to={pathname + "/level2"}>Level 2</Link></li>
      		<li><Link activeClassName="active" to={pathname + "/level3"}>Level 3</Link></li>
      	</ul>
      </div>
      <div className="rightContent">
      	<p>Second Level Content will appear here:</p>
      	<Match pattern={`${pathname}/:level`} component={Recursive} />
      </div>
      </div>
    )
  }
}