import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Match, Link } from 'react-router'
import { Home, BasicRouting, Blocking, Miss, QueryParams, Recursive } from './Components'

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
      </ul>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/basic-routing" component={BasicRouting} />
      <Match pattern="/blocking" component={Blocking} />
      <Match pattern="/miss" component={Miss} />
      <Match pattern="/query-params" component={QueryParams} />
      <Match pattern="/recursive-paths" component={Recursive} />
    </div>
   </BrowserRouter>
  , document.getElementById('main'))



