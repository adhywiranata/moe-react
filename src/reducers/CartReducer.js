import * as ActionTypes from '../actions'

const initialState = {
  shoppingCart: {
    'count': 0,
    'items': []
  }
}

const setShoppingCart = (state, action) => {
  const newState = {}
  Object.assign(newState, state, action.value)
  return newState
}

const CartReducer = (state = initialState, action) => {
  switch(action.type){
    case ActionTypes.SET_SHOPPING_CART:
      return setShoppingCart(state, action)
    default:
      return state
  }
}

export default CartReducer
