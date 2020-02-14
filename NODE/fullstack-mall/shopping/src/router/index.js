import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>import ('../views/home/Home.vue')
const Focus = () =>import ('../views/focus/Focus.vue')
const Category = () =>import ('../views/category/Category.vue')
const Chat = () =>import ('../views/chat/Chat.vue')
const Me = () =>import ('../views/me/Me.vue')
const Hot = () =>import ('../views/home/homeChild/Hot.vue')
const Food = () =>import ('../views/home/homeChild/Food.vue')
const ManCloth = () =>import ('../views/home/homeChild/ManCloth.vue')
const WomenCloth = () =>import ('../views/home/homeChild/WomenCloth.vue')
const ShoeBag = () =>import ('../views/home/homeChild/ShoeBag.vue')
Vue.use(VueRouter)

const routes = [
{
    path: '',
    redirect: '/home'
},
{
    path: '/home',
    component: Home,
    children:[
      {
        path: '/home',
        redirect: '/home/hot'
      },
      {
        path:'hot',
        component:Hot
      },{
        path:'food',
        component:Food
      },{
        path:'manCloth',
        component:ManCloth
      },{
        path:'womenCloth',
        component:WomenCloth
      },{
        path:'shoeBag',
        component:ShoeBag
      },
    ]
},
{
  path: '/focus',
  component: Focus
},
{
  path: '/category',
  component: Category
},
{
  path: '/chat',
  component:Chat
},
{
  path: '/me',
  component: Me
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
