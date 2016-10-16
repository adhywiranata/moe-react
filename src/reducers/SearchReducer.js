import * as ActionTypes from '../actions'

const initialState = {
  searchTerm: ''
}

const setSearchTerm = (state, action) => {
  var newState = ''
  newState = action.value
  return newState
}

const SearchReducer = (state = initialState, action) => {
  switch(action.type){
    case ActionTypes.SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default SearchReducer
