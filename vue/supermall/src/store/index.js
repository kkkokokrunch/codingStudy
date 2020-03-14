import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

const state = {
	cartList:[]
}
const store = new Vuex.Store({
    state,
    getters,
    //mutation唯一的目的是修改state的状态，但是又要确保mutation的每个方法完成的事情尽可能单一
    mutations,
    actions
})

export default store