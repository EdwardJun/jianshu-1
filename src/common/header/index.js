/*
 * @Author: zhuyanlin 
 * @Date: 2019-01-30 11:48:11 
 * @Last Modified by: zhuyanlin
 * @Last Modified time: 2019-01-31 14:09:52
 */
import React from 'react'
import { connect } from 'react-redux'
import { getInputFocusAction, getInputBlurAction } from '../../store/actionCreators'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

const Header = (props) => (
  <HeaderWrapper>
    <Logo />
    <Nav>
      <NavItem className="left active">首页</NavItem>
      <NavItem className="left">下载App</NavItem>
      <NavItem className="right">登陆</NavItem>
      <NavItem className="right">
        <i className="iconfont icon-Aa"></i>
      </NavItem>
      <SearchWrapper>
        <NavSearch 
          className={props.focused ? 'focused' : ''}
          onFocus={props.handleInputFocus}
          onBlur={props.handleInputBlur}/>
        <i className="iconfont icon-search"></i>
      </SearchWrapper>
      <Addition>
        <Button className='writting'>
          <i className="iconfont icon-yumaobi"></i>
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </Nav>
  </HeaderWrapper>
)

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = getInputFocusAction()
      dispatch(action)
    },
    handleInputBlur() {
      const action = getInputBlurAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)