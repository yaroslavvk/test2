import { combineEpics } from 'redux-observable'
import incrementAsyncEpic from './containers/Counter/epics'

export default combineEpics(incrementAsyncEpic)
