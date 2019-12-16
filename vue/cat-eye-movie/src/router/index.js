import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Movie = () =>
    import ('../pages/movie/Movie')
const Cinema = () =>
    import ('../pages/cinema/Cinema')
const User = () =>
    import ('../pages/user/User')
const ComingSoon = () =>
    import ('../pages/movie/ComingSoon')
const NowPlaying = () =>
    import ('../pages/movie/NowPlaying')
Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            redirect: '/movie'
        },
        {
            path: '/movie',
            component: Movie,
            redirect: '/movie/nowPlaying',
            children: [{
                    path: 'nowPlaying',
                    name: 'nowPlaying',
                    component: NowPlaying
                },
                {
                    path: 'comingSoon',
                    name: 'comingSoon',
                    component: ComingSoon
                }
            ]
        }, {
            path: '/cinema',
            component: Cinema
        }, {
            path: '/user',
            component: User
        },
    ]
})