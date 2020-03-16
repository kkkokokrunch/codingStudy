import {combineReducers} from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store';
 //将各个组件中的store合并在一起
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
})

export default reducer