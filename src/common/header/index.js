/*
 * @Author: zhuyanlin 
 * @Date: 2019-01-30 11:48:11 
 * @Last Modified by: zhuyanlin
 * @Last Modified time: 2019-02-12 11:48:20
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'

class Header extends Component {

  constructor(props) { 
    super(props)
  }

  render () {
    return (
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
              className={this.props.focused ? 'focused' : ''}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}/>
            <i className="iconfont icon-search"></i>
            {this.getListArea(this.props.focused)}
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
  }

  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>aaa</SearchInfoItem>
            <SearchInfoItem>aaa</SearchInfoItem>
            <SearchInfoItem>aaa</SearchInfoItem>
            <SearchInfoItem>aaa</SearchInfoItem>
            <SearchInfoItem>aaa</SearchInfoItem>
            <SearchInfoItem>aaa</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.getInputFocusAction())
    },
    handleInputBlur() {
      dispatch(actionCreators.getInputBlurAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)