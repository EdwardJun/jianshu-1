import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
class Login extends PureComponent {
  render() {
    {
      if (!this.props.login) {
        return (
          <Fragment>
            <LoginWrapper>
              <LoginBox>
                <Input placeholder='账号' ref={(value) => {this.account = value}}/>
                <Input placeholder='密码' type='password' ref={(value) => {this.password = value}}/>
                <Button onClick={() => this.props.handleLogIn( this.props, this.account, this.password)}>登陆</Button>
              </LoginBox>
            </LoginWrapper>
          </Fragment>
        )
      } else {
        return <Redirect to='/'/>
      }
    }
  }
}

const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
  handleLogIn(props, accountElement, passwordElement) {
    dispatch(actionCreators.getLogInAction(props, accountElement.value, passwordElement.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)