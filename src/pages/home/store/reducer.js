import { fromJS } from 'immutable'
import { GET_MORE_LIST, TOGGLE_TOP_SHOW } from './actionTypes'
import p1 from '../../../statics/1.png'
import p2 from '../../../statics/2.png'
import p3 from '../../../statics/3.png'
import p4 from '../../../statics/4.png'
import p5 from '../../../statics/5.png'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }
  ],
  articleList: [
    {
      title: '《菩提花下对影成双》第二章 和好',
      desc: '司命走后，帝君唤出灵镜，试着找出凤九。灵境中，画面停留在诛仙台上，凤九呆坐在诛仙台上，双眼望着三生石上的名字，眼里流出一滴泪。看到这一幕，帝君心里一紧，他真的把他的九儿伤得太深了，如今不论三生石上有没有他的名字，他都不会放开她的手了，他不惧天命，也无需天命施舍，九儿，这段情你已经走了99步，这最后一步，我帮你走完。他收起灵境，化作一阵青烟，飞向诛仙台的方向。',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/9261995-c15f2d914f0546c4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      title: '《菩提花下对影成双》第二章 和好',
      desc: '司命走后，帝君唤出灵镜，试着找出凤九。灵境中，画面停留在诛仙台上，凤九呆坐在诛仙台上，双眼望着三生石上的名字，眼里流出一滴泪。看到这一幕，帝君心里一紧，他真的把他的九儿伤得太深了，如今不论三生石上有没有他的名字，他都不会放开她的手了，他不惧天命，也无需天命施舍，九儿，这段情你已经走了99步，这最后一步，我帮你走完。他收起灵境，化作一阵青烟，飞向诛仙台的方向。',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/9261995-c15f2d914f0546c4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ],
  recommendList: [
    {
      imgUrl: p1
    },
    {
      imgUrl: p2
    },
    {
      imgUrl: p3
    },
    {
      imgUrl: p4
    },
    {
      imgUrl: p5
    }
  ],
  showToTop: false
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case GET_MORE_LIST:
      return state.set('articleList', state.get('articleList').concat(action.moreList))
    case TOGGLE_TOP_SHOW:
      return state.set('showToTop', action.showToTop)
    default:
      return state;
  }
}