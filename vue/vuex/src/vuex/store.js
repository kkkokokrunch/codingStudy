import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'
import { INCREMENT } from './mutation-types'
Vue.use(Vuex)

const state = { //类似于data()
    counter: 1000,
    students: [
        { id: 1, name: '张三', age: 18 },
        { id: 2, name: '李四', age: 5 },
        { id: 3, name: '王五', age: 28 },
        { id: 4, name: '呵呵', age: 22 },
    ],
    info: { id: 6, name: '哈哈', age: 30 }
}
const mutations = { //相当于methods
    [INCREMENT](state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    incrementCount(state, count) {
        state.counter += count
    },
    addStudent(state, stu) {
        state.students.push(stu)
    },
    updateInfo(state) {
        state.info.name = 'code'
    }
}
const getters = {
    powerCounter(state) {
        return state.counter * state.counter
    },
    more20stu(state) {
        return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
        return getters.more20stu.length
    },
    moreAgeStu(state) {
        return function(age) {
            return state.students.filter(s => s.age > age)
        }
    }
}

const actions = {
    aupdateInfo(context) {
        setTimeout(() => {
            context.commit('updateInfo')
        }, 1000)
    }
}
modules: {
    a: {
        state: {}
        mutations:{}
        getters: {}
        actions: {}
    }

    b: {
        state: {}
        mutations:{}
        getters: {}
        actions: {}
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})