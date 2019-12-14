import Vue from 'vue'
import Router from 'vue-router'
import parent from '@/components/views/parent'
// import show from '@/components/form/show'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'parent',
        component: parent
    }]
})