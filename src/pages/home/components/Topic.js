import React, { Component, Fragment } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {
  render() {
    return (
      <Fragment>
        <TopicWrapper>
          <TopicItem>
            <img src="https://upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
            社会热点
          </TopicItem>
          更多热门话题》
        </TopicWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Topic)