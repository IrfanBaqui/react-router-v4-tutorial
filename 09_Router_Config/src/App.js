import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Match, Link } from 'react-router'
import { routes } from './router-config'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/" activeOnlyWhenExact activeClassName="active">Home</Link></li>
        <li><Link to="/basic-routing" activeClassName="active">BasicRouting</Link></li>
        <li><Link to="/blocking" activeClassName="active">Blocking</Link></li>
        <li><Link to="/miss" activeClassName="active">Miss</Link></li>
        <li><Link to="/query-params" activeClassName="active">Query Params</Link></li>
        <li><Link to="/recursive-paths" activeClassName="active">Recursive Paths</Link></li>
        <li><Link to="/protected" activeClassName="active">Protected</Link></li>
      </ul>
      
      {routes.map((route,index) => (
        <Match key={index} pattern={route.pattern} component={route.component} exactly={route.exactly} />
      ))}

    </div>
   </BrowserRouter>
  , document.getElementById('main'))