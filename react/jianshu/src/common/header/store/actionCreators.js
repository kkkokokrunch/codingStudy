import * as constants from './constants';
import axios from 'axios'
import {fromJS} from 'immutable'

const changeList = (data) => ({
	type:constants.CHANGE_LIST,
	data:fromJS(data),
	totalPage:Math.ceil(data.length/10)
})

//通过actionCreators同意创建action
export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
})
//使用redux-thunk以后，可以return一个函数出去，不一定是对象
export const getList = () => {
	return (dispatch) => { //这个函数可以接收到store的dispatch方法
		axios.get('/api/headerList.json').then((res)=> {
			const data = res.data
			dispatch(changeList(data.data))
		}).catch(()=> {
			console.log('error')
		})
	}
}