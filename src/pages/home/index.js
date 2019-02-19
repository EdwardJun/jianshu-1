import React, { PureComponent, Fragment } from 'react'
import Writer from './components/Writer'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import { scrollAnimation } from '../../utils'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {

  handleScrollTop () {
    const currentY = document.documentElement.scrollTop || document.body.scrollTop
    scrollAnimation(currentY, 0)
  }

  render() {

    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"  alt='banner'/>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
        {
          this.props.showToTop ? <BackTop onClick={this.handleScrollTop}>⬆</BackTop> : null
        }
      </Fragment>
    )
  }

  componentDidMount() {
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

}

const mapStateToProps = (state) => ({
  showToTop: state.getIn(['home', 'showToTop'])
})

const mapDispatchToProps = (dispatch) => ({
  changeScrollTopShow() {
    const currentY = document.documentElement.scrollTop || document.body.scrollTop
    if (currentY > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)