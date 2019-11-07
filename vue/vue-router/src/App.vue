<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/mine">我的</router-link>
    <router-link to="/detail" tag="button">详情</router-link>
    <br/>
    <router-link to="/mine/mine2">我的2</router-link>

    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view/>  
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId:'zhangsan'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
