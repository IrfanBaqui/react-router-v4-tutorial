import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Match, Link } from 'react-router'
import { Home, BasicRouting, Blocking, Miss } from './Components'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/" activeOnlyWhenExact activeClassName="active">Home</Link></li>
        <li><Link to="/basic-routing" activeClassName="active">BasicRouting</Link></li>
        <li><Link to="/blocking" activeClassName="active">Blocking</Link></li>
      </ul>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/basic-routing" component={BasicRouting} />
      <Match pattern="/blocking" component={Blocking} />
    </div>
   </BrowserRouter>
  , document.getElementById('main'))



