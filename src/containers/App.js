import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Routes from '../routes.js'

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
      <Provider store={ this.props.store }>
        { Routes }
      </Provider>
    )
  }
}

export default App
