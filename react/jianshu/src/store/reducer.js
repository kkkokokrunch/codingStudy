import {combineReducers} from 'redux-immutable'
import{ reducer as headerReducer }from '../common/header/store'

 //将各个组件中的store合并在一起
const reducer = combineReducers({
  header: headerReducer
})

export default reducer