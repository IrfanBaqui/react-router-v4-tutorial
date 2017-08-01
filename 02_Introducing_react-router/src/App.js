import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { Home } from './Components'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink exact={true} to="/" activeClassName="active">Home</NavLink></li>
      </ul>

      <Switch>
        <Route path="/" component={Home} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('main'))
