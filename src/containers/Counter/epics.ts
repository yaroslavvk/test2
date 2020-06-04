import { Action } from 'redux'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { map, delay, takeUntil } from 'rxjs/operators'
import { ofType, ActionsObservable } from 'redux-observable'
import {
  COUNTER_ASYNC_INCREMENT_START,
  COUNTER_ASYNC_INCREMENT_SUCCESS,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  COUNTER_DECREMENT,
} from './actions'

export default (action$: ActionsObservable<Action>) => {
  return action$.pipe(
    ofType(COUNTER_ASYNC_INCREMENT_START),
    delay(1000),
    map(() => ({
      type: COUNTER_ASYNC_INCREMENT_SUCCESS,
      payload: { value: 1 },
    }))
    // takeUntil(action$.pipe(ofType(COUNTER_DECREMENT)))
  )
}
