import React, { PureComponent, Fragment } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'
import uuid from 'uuid'
class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props
    return (
      <Fragment>
        <RecommendWrapper>
          {
            recommendList.map((item) => (
              <RecommendItem key={uuid()} imgUrl={item.get('imgUrl')}/>
            ))
          }
        </RecommendWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)