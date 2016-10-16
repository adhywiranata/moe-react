import React, { Component }                             from 'react'
import ReactDOM                                         from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { Provider }                                     from 'react-redux'

import App from './containers/App.js'

import { connector, store } from './store/Store'

var mountNode = document.getElementById('main')

ReactDOM.render(
  <App store={ store }/>,
  mountNode
)
