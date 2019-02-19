import React, { PureComponent, Fragment } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'
import uuid from 'uuid'

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props
    return (
      <Fragment>
        <TopicWrapper>
          {
            topicList.map((item) => {
              return (
                <TopicItem key={uuid()}>
                  <img src={item.get('imgUrl')}  alt='topic'/>
                  {item.get('title')}
                </TopicItem>
              )
            })
          }
          更多热门话题》
        </TopicWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Topic)