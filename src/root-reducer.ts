import { combineReducers } from 'redux'
import CounterReducer from './containers/Counter/reducer'

export default combineReducers({
  count: CounterReducer,
})
