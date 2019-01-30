/*
 * @Author: zhuyanlin 
 * @Date: 2019-01-30 11:48:11 
 * @Last Modified by: zhuyanlin
 * @Last Modified time: 2019-01-30 18:28:34
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
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

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  render() {
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
              className={this.state.focused ? 'focused' : ''}
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}/>
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
  }

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)