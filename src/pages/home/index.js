import React, { Component, Fragment } from 'react'
import Writer from './components/Writer'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight 
} from './style'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
      </Fragment>
    )
  }
}

export default Home