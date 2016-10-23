import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Home, BasicRouting, Blocking, Miss, QueryParams, Recursive, Login, Protected } from './Components'
import fakeAuth from './Auth'

export const routes = [
   {
      'pattern':'/',
      'component': Home,
      'exactly': true
   },
   {
      'pattern':'/basic-routing',
      'component': BasicRouting
   },
   {
      'pattern':'/blocking',
      'component': Blocking
   },
   {
      'pattern':'/miss',
      'component': Miss
   },
   {
      'pattern':'/query-params',
      'component': QueryParams
   },
   {
      'pattern':'/recursive-paths',
      'component': Recursive
   },
   {
      'pattern':'/login',
      'component': Login
   },
   {
      'pattern':'/protected',
      'component': () => (fakeAuth.isAuthenticated ? (<Protected />) : (<Redirect to={{pathname: '/login',state: { from: '/protected'}
}}/>))
   }
]