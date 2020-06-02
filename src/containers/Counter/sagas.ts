import { put, takeEvery, all } from 'redux-saga/effects'
import { INCREMENT_COUNTER, INCREMENT_ASYNC_COUNTER } from './actions'

const delay = (ms: any) => new Promise((res) => setTimeout(res, ms))

// eslint-disable-next-line require-yield
function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: INCREMENT_COUNTER, payload: 1 })
}

function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC_COUNTER, incrementAsync)
}

export default function* () {
  yield all([helloSaga(), watchIncrementAsync()])
}
