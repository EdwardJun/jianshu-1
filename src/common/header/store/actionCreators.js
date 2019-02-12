import { SEARCHFOCUS, SEARCHBLUR } from './actionTypes'
import axios from 'axios'

export const getInputFocusAction = () => ({
  type: SEARCHFOCUS
})

export const getInputBlurAction = () => ({
  type: SEARCHBLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('')
  }
}