/*
 * @Author: zhuyanlin 
 * @Date: 2019-01-30 11:48:11 
 * @Last Modified by: zhuyanlin
 * @Last Modified time: 2019-02-22 14:57:32
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import uuid from 'uuid'
import { Link } from 'react-router-dom'
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

class Header extends PureComponent {

  render () {
    const { focused, handleInputFocus, handleInputBlur, list, login, handelLogOut } = this.props
    if (this.props.location.pathname === '/login') {
      return null
    }
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            login ? <NavItem className="right" onClick={handelLogOut}>退出</NavItem> : <Link to='/login'><NavItem className="right">登陆</NavItem></Link>
          }
          <NavItem className="right">
           <i className="iconfont icon-Aa"></i>
          </NavItem>
          <SearchWrapper>
            <NavSearch 
              className={focused ? 'focused' : ''}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}/>
            <i className="iconfont icon-search"></i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Link to='/write'>
              <Button className='writting'>
                <i className="iconfont icon-yumaobi"></i>
                写文章
              </Button>
            </Link>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }

  getListArea() {
    const { focused, mouseIn, list, page, totalPage, handleSearchInfoMouseIn, handleSearchInfoMouseOut, handleChangePage } = this.props

    const jsList = list.toJS()
    const pageList = []
    for (let i = (page - 1) * 10; i < page * 10 && i < jsList.length; i++) {
      pageList.push(<SearchInfoItem key={uuid()}>{ jsList[i] }</SearchInfoItem>)
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleSearchInfoMouseIn}
          onMouseLeave={handleSearchInfoMouseOut}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}><i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-refrash spin"></i>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
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
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getSearchList())
      dispatch(actionCreators.getInputFocusAction())
    },
    handleInputBlur() {
      dispatch(actionCreators.getInputBlurAction())
    },
    handleSearchInfoMouseIn() {
      dispatch(actionCreators.getSearchInfoMouseInAction())
    },
    handleSearchInfoMouseOut() {
      dispatch(actionCreators.getSearchInfoMouseOutAction())
    },
    handleChangePage(page, totalPage, spin) {
      const originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      spin.style.transform = `rotate(${+originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.getChangeSearchPageAction(page + 1))
      } else {
        dispatch(actionCreators.getChangeSearchPageAction(1))
      }
    },
    handelLogOut() {
      dispatch(loginActionCreators.getLogOutAction(false))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)