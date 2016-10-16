import { createStore, compose } from 'redux'
import { connect } from 'react-redux'

import rootReducer from '../reducers'
import * as ActionTypes from '../actions'

const initialState = {
  searchTerm: '',
  shoppingCart: {
    'count': 0,
    'items': []
  }
}

/*
BELOW IS ONLY FOR PRODUCTION
const store = createStore(rootReducer)
*/

//BELOW IS FOR DEVELOPMENT
export const store = createStore(
    rootReducer,
    initialState,
    compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (func) => func
))

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    shoppingCart: state.shoppingCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({
        type: ActionTypes.SET_SEARCH_TERM,
        text: 'set search term for characters',
        value: searchTerm
      })
    },
    setShoppingCart: (shoppingCart) => {
      dispatch({
        type: ActionTypes.SET_SHOPPING_CART,
        text: 'set shopping cart items',
        value: shoppingCart
      })
    },
  }
}

export const connector = connect(mapStateToProps,mapDispatchToProps)
