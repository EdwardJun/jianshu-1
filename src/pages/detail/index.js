import React, { PureComponent, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Detail extends PureComponent {
  render() {
    return (
      <Fragment>
        <p>detail</p>
        {this.props.match.params.id}
      </Fragment>
    )
  }
}

export default connect(null, null)(withRouter(Detail))