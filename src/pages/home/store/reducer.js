import { SEARCHFOCUS, SEARCHBLUR, INITSEARCHLIST, SEARCHMOUSEIN, SEARCHMOUSEOUT, CHANGESEARCHLIST } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ]
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case SEARCHFOCUS:
      return state.set('focused', true);
    default:
      return state;
  }
}