<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <router-view></router-view>

  </div>
</template>

<script>
import mainTabbar from './components/content/mainTabbar/mainTabbar'

  export default {
    name: 'App',
    components: {
      mainTabbar
    }
  }
</script>

<style>
  @import "./assets/css/base";
</style>
