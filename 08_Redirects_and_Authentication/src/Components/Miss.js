import React, { Component } from 'react'
import { Match, Link, Miss } from 'react-router'
import { Content, NoMatch } from '../Components'

export default class BasicRouting extends Component {
  render() {
  	const { location, pattern, pathname, isExact } = this.props
    return (
      <div>
      <h1>Handling a Miss</h1>
      <p>With a "Miss" component you can handle a missed pattern of its sibling Matches. As for example you will be able to show a custom error message for the missed location/pathname. Try clicking on the links below to find a miss.</p>
      <div className="leftNavi">
      	<ul>
      		<li><Link activeClassName="active" to={pathname +"/abc/level1"}>Level 1</Link></li>
      		<li><Link activeClassName="active" to={pathname + "/level2"}>Level 2</Link></li>
      		<li><Link activeClassName="active" to={pathname + "/abc/level3"}>Level 3</Link></li>
      	</ul>
      </div>
      <div className="rightContent">
      	<p>Second Level Content will appear here:</p>
      	<Match pattern={`${pathname}/abc/:level`} component={Content}/>
        <Match pattern={`${pathname}`} exactly render={() => (null)} />
        <Miss component={NoMatch}/>
      </div>
      </div>
    )
  }
}