import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { Home } from './Components'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
      </ul>

      <Route path="/" component={Home} exact={true} />
    </div>
  </BrowserRouter>
  , document.getElementById('main'))
