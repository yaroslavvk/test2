import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
  devToolsEnhancer({})
)

export default store
