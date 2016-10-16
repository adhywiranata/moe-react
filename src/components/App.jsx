import React, { Component }                             from 'react'
import ReactDOM                                         from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { Provider }                                     from 'react-redux'

import Header           from './Layouts/Header.jsx'
import Characters       from './Characters/Characters.jsx'
import CharacterDetails from './Characters/CharacterDetails.jsx'

import { connector, store } from './Store.jsx'

const charactersData = require('json!../../public/characters.json')

var mountNode = document.getElementById('main')

const Layout = (props) => {
  var childrenStyle = {
    paddingTop: 50
  }
  return (
    <div>
      <Header handleSearchTerm={ props.route.handleSearchTerm } />
      <div style={childrenStyle}>
        {props.children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: React.PropTypes.element
}

class App extends Component {

  assignData (nextState, replace) {
    const charactersArray = charactersData.filter((character) => { return character._id === nextState.params._id })
    if(charactersArray.length < 1) {
      return replace('/')
    }
    Object.assign(nextState.params, charactersArray[0])
    return nextState
  }

  render(){
    return (
      <Provider store={ store }>
        <Router history={hashHistory}>
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
              onEnter={ this.assignData.bind(this) }
            />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  mountNode
)
