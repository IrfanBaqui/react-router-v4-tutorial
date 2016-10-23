import React, { Component } from 'react'
import { Match, Link } from 'react-router'
import { Content } from '../Components'

export default class BasicRouting extends Component {
  render() {
  	const { location, pattern, pathname, isExact } = this.props
    return (
      <div>
      <h1>BasicRouting</h1>
      <p>With the help of "Match" Component we can specify the Component we want to render for a particular pattern of the App loction/window.pathname.</p>
      <p>Select a level from Left Navigation to view the content, also notice the change in URL.</p>
      <div className="leftNavi">
      	<ul>
      		<li><Link to={pathname +"/level1"} activeClassName="active">Level 1</Link></li>
      		<li><Link to={pathname + "/level2"} activeClassName="active">Level 2</Link></li>
      		<li><Link to={pathname + "/level3"} activeClassName="active">Level 3</Link></li>
      	</ul>
      </div>
      <div className="rightContent">
      	<p>Second Level Content will appear here:</p>
      	<Match pattern={`${pathname}/:level`} component={Content}/>
      </div>
      </div>
    )
  }
}