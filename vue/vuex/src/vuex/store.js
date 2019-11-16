import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { //类似于data()
    count: 1
}
const mutations = { //相当于methods
    add(state, n) {
        state.count += n
    },
    reduce(state) {
        state.count--
    }
}
const getters = {
    getCount: (state) => {
        return state.count + 100
    }
}

const actions = {
    addAction(context, status) {
        context.commit('add', status)
    },
    reduceAction({ commit }) {
        setTimeout(() => {
            commit('reduce')
        }, 3000)
        console.log('我比reduce先执行')
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})