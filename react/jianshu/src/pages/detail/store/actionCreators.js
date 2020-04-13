import axios from "axios";
import * as constants from "./constants";

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content,
});

//获取异步数据
//使用了redux-thunk中间件，actionCreator也可以返回一个函数
export const getDetail = (id) => {
  return (dispatch) => {
    //这个函数自带一个dispatch参数，可以直接dispatch给store
    axios.get("/api/detail.json?id=" + id).then((res) => {
      const result = res.data.data;
      //改变state中的数据
      dispatch(changeDetail(result.title, result.content));
    });
  };
};
