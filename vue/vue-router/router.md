### 路由跳转的几种方式
1. 编程式路由跳转
```
   goLogin() {
      this.$router.push({path:'/login'}) //编程式路由跳转
    }
```
2. 用router-link标签包裹
```
  <router-link to="/login"><button>去登录页</button></router-link>
```
### 二级路由
1. 在index.js中
```
 {
    path: '/mine',
    name: 'Mine',
    component: Mine,
    children: [{
        path: 'mine2',
        name: 'Mine2',
        component: Mine2,
    }]
},
```
2. 在App.vue中
```
<router-link to="/mine/mine2">我的2</router-link>
```
3. 在Mine.vue中
```
<router-view/>
```
