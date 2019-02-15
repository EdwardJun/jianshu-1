import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 8px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  margin-left: 18px;
  float: left;
  cursor: pointer;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-bottom: 18px;
  img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  overflow: hidden;
  img {
    width: 150px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 4px;
  }
`

export const ListInfo = styled.div`
  width: 450px;
  float: left;
  h3 {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  p {
    font-size: 13px;
    line-height: 24px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 180px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`