import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

import Layout from './components/Layouts/Layout'
import Characters from './components/Characters/Characters'
import CharacterDetails from './components/Characters/CharacterDetails'

const charactersData = require('json!../public/characters.json')

export default <Router history={hashHistory}>
  <Route
    path='/'
    component={ Layout }
  >
    <IndexRoute
      component={ Characters }
      charactersData={ charactersData }
    />
    <Route
      path="/character/:_id"
      component={ CharacterDetails }
      charactersData={ charactersData }
    />
  </Route>
</Router>

/*
<Route
  path="/character/:_id"
  component={ CharacterDetails }
  charactersData={ charactersData }
  onEnter={ this.assignData.bind(this) }
/>
*/
