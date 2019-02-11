import { SEARCHFOCUS, SEARCHBLUR } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state=defaultState, action) => {
  if (action.type === SEARCHFOCUS) {
    return state.set('focused', true)
  }
  if (action.type === SEARCHBLUR) {
    return state.set('focused', false)
  }
  return state
}