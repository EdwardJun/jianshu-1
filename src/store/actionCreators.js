import { SEARCHFOCUS, SEARCHBLUR } from './actionTypes'

export const getInputFocusAction = () => ({
  type: SEARCHFOCUS
})

export const getInputBlurAction = () => ({
  type: SEARCHBLUR
})