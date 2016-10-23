import React, { Component } from 'react'
import { Match, Link } from 'react-router'
import { Content } from '../Components'

export default class QueryParams extends Component {
  render() {
  	const { location, pattern, pathname, isExact } = this.props
    return (
      <div>
      <h1>Reading the query parameters.</h1>
      <p>Check out the links below to view the queryparams value.</p>
      <div className="leftNavi">
      	<ul>
      		<li><Link to={{
              pathname: pathname+'/level1',
              query: { abc: 23 }
            }} activeClassName="active">Level 1</Link></li>
      		<li><Link to={{
              pathname: pathname+'/level2',
              query: { abc: 2, xyz: 4 }
            }} activeClassName="active">Level 2</Link></li>
      		<li><Link to={pathname+'/level3?xyz=HavingFun'} activeClassName="active">Level 3</Link></li>
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