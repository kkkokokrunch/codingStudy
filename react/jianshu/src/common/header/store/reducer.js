import * as constants from './constants';
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused:false //搜索框一开始聚焦状态是false
})

//store把previousState和action传给reducer，处理过后再把新的state还给store
export default (state = defaultState,action) => {
  if(action.type === constants.SEARCH_FOCUS) {
    //通过immutable返回的是一个全新的对象，并不是原来的state
    return state.set('focused',true)
  }
  if(action.type === constants.SEARCH_BLUR) {
    return state.set('focused',false)
  }
  return state
}