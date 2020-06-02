import { SystemState } from './reducer'

export const getCountValue = (state: SystemState) => {
  return state.count.value
}
