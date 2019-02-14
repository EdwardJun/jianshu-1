import { SEARCHFOCUS, SEARCHBLUR, INITSEARCHLIST, SEARCHMOUSEIN, SEARCHMOUSEOUT, CHANGESEARCHLIST } from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const getSearchListAction = (list) => ({
  type: INITSEARCHLIST,
  list: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
})

export const getInputFocusAction = () => ({
  type: SEARCHFOCUS
})

export const getInputBlurAction = () => ({
  type: SEARCHBLUR
})

export const getSearchInfoMouseInAction = () => ({
  type: SEARCHMOUSEIN
})

export const getSearchInfoMouseOutAction = () => ({
  type: SEARCHMOUSEOUT
})

export const getChangeSearchPageAction = (page) => ({
  type: CHANGESEARCHLIST,
  page: page
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/').then((res) => {
      dispatch(getSearchListAction(res.data.data))
    }).catch((error) => {
      console.log(error)
    })
  }
}