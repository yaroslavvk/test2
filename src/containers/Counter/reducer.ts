import {
  Actions,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_ASYNC_INCREMENT_SUCCESS,
} from './actions'
import { CounterState } from './model'

const initialState: CounterState = {
  value: 0,
}

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      }
    case COUNTER_ASYNC_INCREMENT_SUCCESS:
      console.log('COUNTER_ASYNC_INCREMENT_SUCCESS')
      return {
        ...state,
        value: state.value + action.payload.value,
      }
    case COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      }
    default:
      return state
  }
}
