import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'

import SearchReducer from './SearchReducer'
import CartReducer from './CartReducer'

const rootReducer = combineReducers({ searchTerm: SearchReducer, shoppingCart: CartReducer })

export default rootReducer
