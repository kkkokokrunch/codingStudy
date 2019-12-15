import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Movie = () =>
    import ('../pages/movie/Movie')
const Cinema = () =>
    import ('../pages/cinema/Cinema')
const User = () =>
    import ('../pages/user/User')
Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            redirect: '/movie'
        },
        {
            path: '/movie',
            component: Movie
        }, {
            path: '/cinema',
            component: Cinema
        }, {
            path: '/user',
            component: User
        },
    ]
})