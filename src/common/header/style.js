import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0
`

export const Logo = styled.div`
  display: block;
  height: 56px;
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    color: #969696;
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  transition: all 0.2s ease-in;
  &::placeholder{
    color: #999;
  }
  &.focused {
    transition: all 0.2s ease-out;
    width: 240px;
  }
  &.focused + .icon-search:before {
    background: #777;
    color: #fff;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    background: #ec6149;
    color: #fff;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
`

export const SearchInfo = styled.div`
  background: #fff;
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  // background-color: #aaa;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  margin-top: 9px;
  width: 250px;
  left: 0;
  top: 100%;
  border-radius: 4px;
  box-sizing: border-box;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: inline-block;
    transition: all .2s ease-in;
  }
`

export const SearchInfoItem = styled.span`
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  coior: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  font-size: 12px;
`

export const SearchInfoList = styled.span`
  overflow: hidden;
`