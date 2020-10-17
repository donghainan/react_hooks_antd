import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// 中间件
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// reducers
import login from './reducers/login'

const rootReducer = combineReducers({
  login,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const enhancer = composeEnhancers(applyMiddleware(thunk, logger))
const store = createStore(rootReducer, enhancer)
export default store
