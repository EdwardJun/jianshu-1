import React, { PureComponent, Fragment } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { getMoreListAction } from '../store/actionCreators'
import uuid from 'uuid'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { articleList, getMoreList } = this.props
    return (
      <Fragment>
        {
          articleList.map((item) => {
            return (
              // 动态路由
              <Link key={uuid()} to={`/detail/${item.get('id')}`}>
                <ListItem>
                  <img src={item.get('imgUrl')} alt='article'/>
                  <ListInfo>
                    <h3>{item.get('title')}</h3>
                    <p>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList() {
    dispatch(getMoreListAction(1))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)