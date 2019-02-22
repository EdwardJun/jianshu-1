import { IS_LOGIN, Login_Result } from './actionTypes'
import axios from 'axios'

export const getLogOutAction = (login) => ({
  type: IS_LOGIN,
  login: login
})

export const getLogInAction = (props, account, password) => {
  return (dispatch) => {
    if (account && password) {
      dispatch({
        type: Login_Result,
        success: true
      })
      props.history.push('/')
    } else {
      alert('登陆失败！')
    }
  }
}