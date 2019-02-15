import React, { Component, Fragment } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
import uuid from 'uuid'

class List extends Component {
  render() {
    const { articleList } = this.props
    return (
      <Fragment>
        {
          articleList.map((item) => {
            return (
              <ListItem key={uuid()}>
                <img src={item.get('imgUrl')} alt='article'/>
                <ListInfo>
                  <h3>{item.get('title')}</h3>
                  <p>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(List)