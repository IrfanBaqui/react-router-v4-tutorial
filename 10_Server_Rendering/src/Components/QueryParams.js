import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Content } from '../Components'

export default class QueryParams extends Component {
  render() {
  	const { location, pattern, match, isExact } = this.props
    return (
      <div>
      <h1>Reading the query parameters.</h1>
      <p>Check out the links below to view the queryparams value.</p>
      <div className="leftNavi">
      	<ul>
      		<li><Link to={{
              pathname: match.url+'/level1',
              search: '?abc=23'
            }} activeClassName="active">Level 1</Link></li>
      		<li><Link to={{
              pathname: match.url+'/level2',
              search: '?abc=2&xyz=4'
            }} activeClassName="active">Level 2</Link></li>
      		<li><Link to={match.url+'/level3?xyz=HavingFun'} activeClassName="active">Level 3</Link></li>
      	</ul>
      </div>
      <div className="rightContent">
      	<p>Second Level Content will appear here:</p>
        <Switch>
      	  <Route path={`${match.url}/:level`} component={Content}/>
        </Switch>
      </div>  
      </div>
    )
  }
}