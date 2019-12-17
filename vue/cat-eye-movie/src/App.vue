<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// import mainTabbar from './components/content/mainTabbar/mainTabbar'
import TabBar from './components/common/tabbar/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
 @import "./assets/css/base";
</style>
