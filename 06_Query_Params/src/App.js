import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { Home, BasicRouting, Blocking, Miss, QueryParams, NoMatch } from './Components'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/basic-routing" activeClassName="active">BasicRouting</NavLink></li>
        <li><NavLink to="/blocking" activeClassName="active">Blocking</NavLink></li>
        <li><NavLink to="/miss" activeClassName="active">Miss</NavLink></li>
        <li><NavLink to="/query-params" activeClassName="active">Query Params</NavLink></li>
      </ul>

      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/basic-routing" component={BasicRouting} />
        <Route path="/blocking" component={Blocking} />
        <Route path="/miss" component={Miss} />
        <Route path="/query-params" component={QueryParams} />
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('main'))
