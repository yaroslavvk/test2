import { CounterState } from './model'

export const COUNTER_INCREMENT = '[COUNTER] COUNTER_INCREMENT'
export const COUNTER_DECREMENT = '[COUNTER] COUNTER_DECREMENT'
export const COUNTER_ASYNC_INCREMENT_START =
  '[COUNTER] COUNTER_ASYNC_INCREMENT_START'
export const COUNTER_ASYNC_INCREMENT_CANCEL =
  '[COUNTER] COUNTER_ASYNC_INCREMENT_CANCEL'
export const COUNTER_ASYNC_INCREMENT_SUCCESS =
  '[COUNTER] COUNTER_ASYNC_INCREMENT_SUCCESS'
export const COUNTER_ASYNC_INCREMENT_ERROR =
  '[COUNTER] COUNTER_ASYNC_INCREMENT_ERROR'

interface CounterIncrementAction {
  type: typeof COUNTER_INCREMENT
  payload: CounterState
}

interface CounterDecrementAction {
  type: typeof COUNTER_DECREMENT
  payload: CounterState
}

interface CounterAsyncIncrementStartAction {
  type: typeof COUNTER_ASYNC_INCREMENT_START
  payload: CounterState
}

interface CounterAsyncIncrementCancelAction {
  type: typeof COUNTER_ASYNC_INCREMENT_CANCEL
}

interface CounterAsyncIncrementSuccessAction {
  type: typeof COUNTER_ASYNC_INCREMENT_SUCCESS
  payload: CounterState
}

interface CounterAsyncIncrementErrorAction {
  type: typeof COUNTER_ASYNC_INCREMENT_ERROR
  payload: CounterState
}

export type Actions =
  | CounterIncrementAction
  | CounterDecrementAction
  | CounterAsyncIncrementStartAction
  | CounterAsyncIncrementCancelAction
  | CounterAsyncIncrementSuccessAction
  | CounterAsyncIncrementErrorAction
