import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Home, BasicRouting, Blocking, Miss, QueryParams, Recursive, Login, Protected, NoMatch } from './Components'
import fakeAuth from './Auth'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/basic-routing" activeClassName="active">BasicRouting</NavLink></li>
        <li><NavLink to="/blocking" activeClassName="active">Blocking</NavLink></li>
        <li><NavLink to="/miss" activeClassName="active">Miss</NavLink></li>
        <li><NavLink to="/query-params" activeClassName="active">Query Params</NavLink></li>
        <li><NavLink to="/recursive-paths" activeClassName="active">Recursive Paths</NavLink></li>
        <li><NavLink to="/protected" activeClassName="active">Protected</NavLink></li>
      </ul>

      <Switch>
          <Route path="/" component={Home} exact={true} />
        <Route path="/basic-routing" component={BasicRouting} />
        <Route path="/blocking" component={Blocking} />
        <Route path="/miss" component={Miss} />
        <Route path="/query-params" component={QueryParams} />
        <Route path="/recursive-paths" component={Recursive} />
        <Route path="/login" component={Login} />
        <Route path="/protected" component={() => (fakeAuth.isAuthenticated ? (<Protected />) : (<Redirect to={{pathname: '/login',state: { from: '/protected'}
        }}/>))} />
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('main'))
