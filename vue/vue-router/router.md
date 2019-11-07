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
### 重定向redirect
当输入的是/时，会直接跳转到/login
```
{
    path: '/',
    redirect: '/login'
}
```

### 将hash改为history
```
export default new Router({
    routes: [],
    mode: 'history'
})
```

### router-link的相关属性
1. tag标签
```
<router-link to="/detail" tag="button">详情</router-link>  
```
  tag标签可以将a标签转换为其他，比如button  

2. replace 
```
<router-link to="/detail" tag="button" replace>详情</router-link>  
```
  用户不能按返回键回到上一个页面  

3. linkActiveClass: 'active'  
```
export default new Router({
    routes: [],
    mode: 'history',
    linkActiveClass: 'active'  
})
```
  然后在相应页面的css中修改active的颜色，就会出现点击后有不同的效果

### 动态路由
1. 在index.js中拼接
```
{
    path: '/user/:abc',
    name: 'User',
    component: User
}
```
2. 在App.vue中用v-bind绑定
```
<router-link :to="'/user/'+userId">用户</router-link>

//data中
data() {
  return {
    userId:'zhangsan'
  }
}
``` 
这样路由就会根据data传递的参数拼接显示

3. 如何将路由的参数显示在页面中
```
computed: {
    userId() {
        return this.$route.params.abc
    }
}
```
这里的route是当前处于活跃状态的路由，而router是index.js中的new Router出来的实例
