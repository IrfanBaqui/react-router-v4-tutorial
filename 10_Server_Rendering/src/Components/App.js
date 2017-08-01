import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { routes } from '../router-config'
import { NoMatch } from '../Components'

export default class BasicRouting extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/" activeOnlyWhenExact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/basic-routing" activeClassName="active">BasicRouting</NavLink></li>
          <li><NavLink to="/blocking" activeClassName="active">Blocking</NavLink></li>
          <li><NavLink to="/miss" activeClassName="active">Miss</NavLink></li>
          <li><NavLink to="/query-params" activeClassName="active">Query Params</NavLink></li>
          <li><NavLink to="/recursive-paths" activeClassName="active">Recursive Paths</NavLink></li>
          <li><NavLink to="/protected" activeClassName="active">Protected</NavLink></li>
        </ul>

        <Switch>
          {routes.map((route,index) => (
            <Route key={index} path={route.path} component={route.component} exact={route.exact} />
            ))}
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}