// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
    })
    //1.基本使用
    // axios({
    //         url: 'http://123.207.32.32:8000/home/multidata',
    //         method: 'get'
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })

// axios({
//         url: 'http://123.207.32.32:8000/home/data',
//         params: { //针对get请求的参数拼接
//             type: 'pop',
//             page: 1
//         }
//     })
//     .then(res => {
//         console.log(res)
//     })

//2.axios发送并发请求,使用全局配置

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([axios({
//         url: '/home/multidata',
//     }), axios({
//         url: '/home/data',
//         params: { //针对get请求的参数拼接
//             type: 'sell',
//             page: 5
//         }
//     })])
//     .then(axios.spread((res1, res2) => {
//         console.log(res1)
//         console.log(res2)
//     }))

//3.创建对应的axios实例
// const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
// })
// instance1({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res)
// })

// instance1({
//     url: '/home/data',
//     params: { //针对get请求的参数拼接
//         type: 'pop',
//         page: 1
//     }
// })

// const instance2 = axios.create({
//     baseURL: 'http://222.207.32.32:8000',
//     timeout: 5000
// })


//4.封装一个request模块
import { request } from './network/request'

// request({
//     url: '/home/multidata'
// }, res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

request({
    url: '/home/multidata'
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})