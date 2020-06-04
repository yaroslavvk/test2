import { SelectorsState } from './model'

export const getCountValue = (state: SelectorsState) => {
  return state.count.value
}
