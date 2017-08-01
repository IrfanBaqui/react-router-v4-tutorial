import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Home, BasicRouting, Blocking, Miss, QueryParams, Recursive, Login, Protected } from './Components'
import fakeAuth from './Auth'

export const routes = [
   {
      'path':'/',
      'component': Home,
      'exact': true
   },
   {
      'path':'/basic-routing',
      'component': BasicRouting
   },
   {
      'path':'/blocking',
      'component': Blocking
   },
   {
      'path':'/miss',
      'component': Miss
   },
   {
      'path':'/query-params',
      'component': QueryParams
   },
   {
      'path':'/recursive-paths',
      'component': Recursive
   },
   {
      'path':'/login',
      'component': Login
   },
   {
      'path':'/protected',
      'component': () => (fakeAuth.isAuthenticated ? (<Protected />) : (<Redirect to={{pathname: '/login',state: { from: '/protected'}
}}/>))
   }
]