import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})

export const login = (accout, password) => {
	return (dispatch) => {
		//将账号和密码传给后端，其实应该用post方法
		axios.get('/api/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				//如果返回true，就改变登录状态
				dispatch(changeLogin())
			}else {
				alert('登陆失败')
			}
		})
	}
}