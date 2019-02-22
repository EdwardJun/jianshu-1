import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Write extends PureComponent {
  render() {
    if (this.props.login) {
      return (
        <Fragment>
          <p>Write</p>
        </Fragment>
      )
    } else {
      return <Redirect to='/login'/>
    }
  }
}

const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login'])
})

export default connect(mapStateToProps, null)(Write)