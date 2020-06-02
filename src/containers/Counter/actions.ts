export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const INCREMENT_ASYNC_COUNTER = 'INCREMENT_ASYNC_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER
  payload: number
}

interface IncrementCounterAsyncAction {
  type: typeof INCREMENT_COUNTER
  payload: number
}

interface DecrementCounterAction {
  type: typeof DECREMENT_COUNTER
  payload: number
}

export type Actions =
  | IncrementCounterAction
  | IncrementCounterAsyncAction
  | DecrementCounterAction
