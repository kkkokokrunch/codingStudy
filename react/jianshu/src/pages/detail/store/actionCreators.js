import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title,content) => ({
  type:constants.CHANGE_DETAIL,
  title,
  content
})

//获取异步数据
export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' +id).then((res) => {
      const result = res.data.data
      //改变state中的数据
      dispatch(changeDetail(result.title,result.content))
    })
  }
}