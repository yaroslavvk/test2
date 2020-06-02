import { all, fork } from 'redux-saga/effects'
import counter from './containers/Counter/sagas'

export default function* root() {
  yield all([fork(counter)])
}
