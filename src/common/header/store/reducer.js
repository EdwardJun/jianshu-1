import { SEARCHFOCUS, SEARCHBLUR } from './actionTypes'

const defaultState = {
  focused: false
}

export default (state=defaultState, action) => {
  if (action.type === SEARCHFOCUS) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.focused = true
    return newState
  }
  if (action.type === SEARCHBLUR) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.focused = false
    return newState
  }
  return state
}