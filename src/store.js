import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { posts, authentication } from './reducers/index'

const reducers = combineReducers({
  posts,
  authentication
})

export default createStore(
  reducers,
  applyMiddleware(thunk))