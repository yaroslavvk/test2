import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './root-reducer'
import rootEpic from './root-epic'

const epicMiddleware = createEpicMiddleware()
const store = createStore(rootReducer, applyMiddleware(epicMiddleware))
epicMiddleware.run(rootEpic)

export default store
