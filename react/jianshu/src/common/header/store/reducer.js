import * as constants from './constants';
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused:false, //搜索框一开始聚焦状态是false
  list:[],
  page:1,
  totalPage:1,
  mouseIn:false,
})

//store把previousState和action传给reducer，处理过后再把新的state还给store
export default (state = defaultState,action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS: //通过immutable返回的是一个全新的对象，并不是原来的state
      return state.set('focused',true);
    case constants.SEARCH_BLUR:
      return state.set('focused',false);
    case constants.CHANGE_LIST:
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn',true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn',false);
    case constants.CHANGE_PAGE:
      return state.set('page',action.page);
    default:
      return state;
  }
  
}