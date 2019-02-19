import { GET_MORE_LIST, TOGGLE_TOP_SHOW } from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const getMoreListData = (result) => ({
  type: GET_MORE_LIST,
  moreList: fromJS(result)
})

export const getMoreListAction = () => {
  return ((dispatch) => {
    // 先请求数据赋值
    dispatch(getMoreListData([{
      title: '《菩提花下对影成双》第二章 和好',
      desc: '司命走后，帝君唤出灵镜，试着找出凤九。灵境中，画面停留在诛仙台上，凤九呆坐在诛仙台上，双眼望着三生石上的名字，眼里流出一滴泪。看到这一幕，帝君心里一紧，他真的把他的九儿伤得太深了，如今不论三生石上有没有他的名字，他都不会放开她的手了，他不惧天命，也无需天命施舍，九儿，这段情你已经走了99步，这最后一步，我帮你走完。他收起灵境，化作一阵青烟，飞向诛仙台的方向。',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/9261995-c15f2d914f0546c4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }]))
  })
}

export const toggleTopShow = (isShow) => ({
  type: TOGGLE_TOP_SHOW,
  showToTop: isShow
})
