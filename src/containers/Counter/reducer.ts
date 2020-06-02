import { INCREMENT_COUNTER, DECREMENT_COUNTER, Actions } from './actions'

export interface SystemState {
  count: {
    value: number
  }
}

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + action.payload,
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - action.payload,
      }
    default:
      return state
  }
}
