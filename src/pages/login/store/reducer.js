import { fromJS } from 'immutable'
import { IS_LOGIN, Login_Result } from './actionTypes'

const defaultState = fromJS({
  login: false
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case IS_LOGIN:
      return state.set('login', action.login)
    case Login_Result:
      return state.set('login', action.success)
    default:
      return state;
  }
}