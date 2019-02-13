import { SEARCHFOCUS, SEARCHBLUR, INITSEARCHLIST, SEARCHMOUSEIN, SEARCHMOUSEOUT, CHANGESEARCHLIST } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
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
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      })
    case SEARCHMOUSEIN:
      return state.set('mouseIn', true);
    case SEARCHMOUSEOUT:
      return state.set('mouseIn', false);
    case CHANGESEARCHLIST:
      return state.set('page', action.page);
    default:
      return state;
  }
}