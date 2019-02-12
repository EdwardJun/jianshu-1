import { SEARCHFOCUS, SEARCHBLUR, INITSEARCHLIST } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case SEARCHFOCUS:
      return state.set('focused', true);
    case SEARCHBLUR:
      return state.set('focused', false);
    case INITSEARCHLIST:
      return state.set('list', action.list).set('totalPage', action.totalPage);
    default:
      return state;
  }
}