import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'
import Product from '../pages/product'
import Detail from '../pages/detail'
import Login from '../pages/login'
import Cart from '../pages/cart'
import Order from '../pages/order'
import List from '../pages/orderList'
import Confirm from '../pages/orderConfirm'
import Pay from '../pages/orderPay'
import AliPay from '../pages/alipay'
Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index,
        }, {
          path: '/product/:id',
          name: 'product',
          component: Product,
          // component: () => import('./pages/product.vue')
        }, {
          path: '/detail/:id',
          name: 'detail',
          component: Detail,
          // component: () => import('./pages/detail.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children:[
        {
          path: 'list',
          name: 'order-list',
          component: List,
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: Confirm,
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: Pay,
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: AliPay,
        }
      ]
    }
  ]
});
